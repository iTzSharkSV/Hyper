import Listr from 'listr'
import inquirer from 'inquirer'
import { Args } from '../Args'
import { inquire } from './Inquire'
import { Print } from '../Modules/Print'
import { copyTemplateFiles, initGit, iDependencies } from './Tasks'

const flags = Args.flags
const { install } = flags

async function createProject(options: inquirer.Answers): Promise<void> {
	// prettier-ignore
	const { 
		projTemplate, 
		projType, 
		gitInit, 
		pkgManager 
	} = options

	const Tasks = new Listr(
		[
			{
				title: 'Copy project files',
				task: () => copyTemplateFiles(projType, projTemplate)
			},
			{
				title: 'Initialize git',
				task: () => initGit(),
				enabled: () => gitInit
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
