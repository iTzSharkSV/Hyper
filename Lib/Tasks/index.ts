import * as Listr from 'listr';
import Args from '../Args';
import initGit from './Git';
import commitFiles from './Commit';
import Print from '../Modules/Print';
import createLicence from './License';
import copyTemplateFiles from './Copy';
import iDependencies from './InstallDep';
import { Answers } from 'inquirer';

async function Init(options: Answers): Promise<void> {
	const flags = Args.flags;
	// prettier-ignore
	const {
		aName,
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
				task: () => {
					const Jumpstart = () => {
						copyTemplateFiles('Jumpstart', overWriteFiles);
					};

					switch (projTemplate) {
						case 'Node':
						case 'Rust':
						case 'Static':
							Jumpstart();
							copyTemplateFiles(projTemplate, overWriteFiles);
							break;
						default:
							Jumpstart();
					}
				}
			},
			{
				title: 'Setting up License',
				task: () => createLicence(aName)
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
				task: () => {
					projTemplate == 'Node'
						? iDependencies(pkgManager)
						: 'Installing dependencies only available for $Node projects';
				},
				skip: () =>
					!flags.install && projTemplate == 'Node'
						? 'Pass -i to automatically install dependencies'
						: 'Coming soon!'
			}
		],
		{
			exitOnError: false
		}
	);

	const Run = async () => {
		await Tasks.run();
	};

	switch (confirm) {
		case 'yes':
			Run();
			break;
		case 'overwrite':
			overWriteFiles = true;
			Run();
			break;
		case 'change':
			Print('Warning', "Couldn't change project dir (Coming soon!)");
			break;
		case 'abort':
			Print('Warning', 'Aborting project initialization...');
			process.exit(0);
		default:
			Print('Error', "Couldn't get user input");
	}
}

export default Init;
