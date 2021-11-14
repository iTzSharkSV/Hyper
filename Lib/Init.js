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
const Log = require('./Utils/Log');
const cli = require('./Cli');
const flags = cli.flags;
const { runInstall } = flags;

const copy = promisify(ncp);
const writeFile = promisify(fs.writeFile);

// Options:
const _Name = 'Author';
const _Email = 'me@Example.com';
const templateDir = path.join(__dirname, '../Template');
const currentDir = process.cwd();

// Methods:
copyTemplateFiles = async () => {
	return copy(templateDir, currentDir, {
		clobber: true
	});
};

createLicense = async () => {
	const targetPath = path.join(currentDir, 'LICENSE');
	const licenseContent = mitLicense.licenseText
		.replace('<year>', new Date().getFullYear())
		.replace('<copyright holders>', `${_Name} (${_Email})`);
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

module.exports = createProject = async () => {
	const Tasks = new Listr(
		[
			{
				title: 'Copy project files',
				task: () => copyTemplateFiles()
			},
			{
				title: 'Initialize git',
				task: () => initGit()
			},
			{
				title: 'Create a license',
				task: () => createLicense()
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
		],
		{
			exitOnError: false
		}
	);

	await Tasks.run();
	Log('success', 'Project initilized successfully!');
	return true;
};
