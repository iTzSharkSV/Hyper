// Dependencies:
const fs = require('fs');
const path = require('path');
const ncp = require('ncp');
const execa = require('execa');
const Listr = require('listr');
const mitLicense = require('spdx-license-list/licenses/MIT');
const { promisify } = require('util');
const { projectInstall } = require('pkg-install');

// Imports:
const Print = require('../Utils/Print');
const cli = require('../Cli');

const copy = promisify(ncp);
const writeFile = promisify(fs.writeFile);

// Global variables:
const currentDir = process.cwd();

// Functions:
copyTemplateFiles = async () => {
	const { Template } = options;
	const templateDir = path.join(__dirname, '../../Templates', Template);
	return copy(templateDir, currentDir, {
		clobber: true
	});
};

createLicense = async () => {
	const { Name, Email } = options;
	const targetPath = path.join(currentDir, 'LICENSE');
	const licenseContent = mitLicense.licenseText
		.replace('<year>', new Date().getFullYear())
		.replace('<copyright holders>', `${Name} (${Email})`);
	return writeFile(targetPath, licenseContent, 'utf8');
};

initGit = async () => {
	const result = await execa('git', ['init'], {
		cwd: currentDir
	});
	result.failed
		? Promise.reject(new Error('Failed to initialize git'))
		: Promise.resolve();
};

createProject = async (options) => {
	const { Git, License } = options;
	const flags = cli.flags;
	const { runInstall } = flags;

	const Todo = [
		{
			title: 'Copy project files',
			task: () => copyTemplateFiles(options)
		},
		{
			title: 'Initialize git',
			task: () => initGit(),
			enabled: () => Git
		},
		{
			title: 'Create a license',
			task: () => createLicense(options),
			enabled: () => License
		},
		{
			title: 'Install dependencies',
			task: () =>
				projectInstall({
					cwd: currentDir
				}),
			skip: () =>
				!runInstall
					? 'Pass -i to automatically install dependencies'
					: undefined
		}
	];

	const Tasks = new Listr(Todo, {
		exitOnError: false
	});

	try {
		await Tasks.run();
		Print('success', 'Project initilized successfully!');
	} catch (error) {
		Print('error', 'An error occured while initializing the project.');
	}
};

module.exports = createProject;
