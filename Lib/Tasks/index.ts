import * as Listr from 'listr';
import * as execa from 'execa';
import Args from '../Args';
import Print from '../Modules/Print';
import { Answers } from 'inquirer';
import { join } from 'path';
import { writeFile } from 'fs';
import { copy } from 'fs-extra';
import { MIT } from './Json/LicenseList.json';

async function Init(options: Answers): Promise<void> {
	const flags = Args.flags;
	const currentDir = process.cwd();
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
					const copyFiles = (
						template: string,
						overWrite: boolean
					) => {
						const templateDir: string = join(
							__dirname,
							'../../Templates',
							template
						);

						copy(templateDir, currentDir, {
							overwrite: overWrite || false,
							preserveTimestamps: false
						}).catch(() => {
							throw new Error('Could not copy template files');
						});
					};

					switch (projTemplate) {
						case 'Node':
						case 'Rust':
						case 'Static':
							copyFiles('Jumpstart', overWriteFiles);
							copyFiles(projTemplate, overWriteFiles);
							break;
						default:
							copyFiles('Jumpstart', overWriteFiles);
					}
				}
			},
			{
				title: 'Setting up License',
				task: () => {
					const targetPath = join(currentDir, 'LICENSE');
					const licenseContent = MIT.licenseTxt
						.replace('<year>', `${new Date().getFullYear()}`)
						.replace('<copyright holders>', `${aName}`);

					writeFile(targetPath, licenseContent, 'utf8', (err) => {
						if (err) {
							throw new Error('Could not write license file');
						}
					});
				}
			},
			{
				title: 'Initialize git',
				task: () =>
					execa.command('git init').catch(() => {
						throw new Error('Could not initialize git');
					}),
				skip: () => !gitInit
			},
			{
				title: 'Commit files',
				task: () => {
					execa.command('git add .');
					execa
						.command(`git commit -m "Initial commit"`)
						.catch(() => {
							throw new Error('Could not commit files');
						});
				},
				skip: () => !fstCommit
			},
			{
				title: 'Install dependencies',
				task: () => {
					projTemplate == 'Node' || 'Static'
						? () => {
								switch (pkgManager) {
									case 'Npm':
										execa.command('npm install');
										break;
									case 'Yarn':
										execa.command('yarn install');
										break;
								}
						  }
						: 'Installing dependencies only available for $Node projects';
				},
				skip: () => {
					if (!flags.install) {
						('Pass -i to automatically install dependencies');
					}
				}
			}
		],
		{
			exitOnError: false
		}
	);

	switch (confirm) {
		case 'yes':
			Tasks.run();
			break;
		case 'overwrite':
			overWriteFiles = true;
			Tasks.run();
			break;
		case 'change':
			Print('Error', "Couldn't change project dir (Coming soon!)");
			break;
		case 'abort':
			Print('Warning', 'Aborting project initialization...');
			process.exit(0);
	}
}

export default Init;
