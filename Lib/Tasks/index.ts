import * as Listr from 'listr';
import Args from '../Args';
import initGit from './Git';
import commitFiles from './Commit';
import Print from '../Modules/Print';
import copyTemplateFiles from './Copy';
import iDependencies from './InstallDep';
import { Answers } from 'inquirer';

async function Init(options: Answers): Promise<void> {
	const flags = Args.flags;
	// prettier-ignore
	const {
		projTemplate,
		gitInit,
		fstCommit,
		pkgManager,
		confirm
	} = options;

	let overWriteFiles = false;

	const Tasks = new Listr(
		[
			{
				title: 'Copy project files',
				task: () => copyTemplateFiles(projTemplate, overWriteFiles)
			},
			{
				title: 'Initialize git',
				task: () => initGit(),
				skip: () => !gitInit
			},
			{
				title: 'Commit files',
				task: () => commitFiles(),
				skip: () => !fstCommit
			},
			{
				title: 'Install dependencies',
				task: () => iDependencies(pkgManager),
				skip: () =>
					!flags.install
						? 'Pass -i to automatically install dependencies'
						: undefined
			}
		],
		{
			exitOnError: false
		}
	);

	switch (confirm) {
		case 'yes':
			await Tasks.run();
			break;
		case 'overwrite':
			overWriteFiles = true;
			await Tasks.run();
			break;
		case 'abort':
			Print('Warning', 'Aborting project initialization...');
			process.exit(0);
		default:
			Print('Error', "Couldn't get user input");
			await Tasks.run();
	}
}

export default Init;
