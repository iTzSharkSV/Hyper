import Listr from 'listr'
import inquirer from 'inquirer'
import { Args } from '../Args'
import { inquire } from './Inquire'
import { Print } from '../Modules/Print'
import {
	copyTemplateFiles,
	initGit,
	iDependencies,
	createLicense
} from './Tasks'

async function createProject(options: inquirer.Answers): Promise<void> {
	const {
		// Inquirer answers
		aName,
		projTemplate,
		gitInit,
		pkgManager,
		cLicense
	} = options

	const flags = Args.flags
	const { install } = flags

	const Tasks = new Listr(
		[
			{
				title: 'Copy project files',
				task: () => copyTemplateFiles(projTemplate)
			},
			{
				title: 'Create a License',
				task: () => createLicense(aName),
				skip: () => !cLicense
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
					!install
						? 'Pass -i to automatically install dependencies'
						: undefined
			}
		],
		{
			exitOnError: false
		}
	)

	await Tasks.run()
	Print('pass', 'Project initilized successfully!')
}

export async function Init(): Promise<void> {
	const options = await inquire()
	Print('info', 'Initializing project...')
	await createProject(options)
}
