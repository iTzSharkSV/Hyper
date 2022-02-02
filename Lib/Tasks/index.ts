import * as Listr from 'listr';
import Args from '../Args';
import initGit from './Git';
import copyTemplateFiles from './Copy';
import iDependencies from './InstallDep';
import { Answers } from 'inquirer';

async function Init(options: Answers): Promise<void> {
	const flags = Args.flags;
	const {
		// Inquirer answers
		projTemplate,
		gitInit,
		pkgManager
	} = options;

	const Tasks = new Listr(
		[
			{
				title: 'Copy project files',
				task: () => copyTemplateFiles(projTemplate, false)
			},
			{
				title: 'Initialize git',
				task: () => initGit(),
				skip: () => !gitInit
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

	await Tasks.run();
}

export default Init;
