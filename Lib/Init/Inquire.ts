import { DistinctQuestion, Separator, prompt } from 'inquirer'
import { Args } from '../Args'

const flags = Args.flags
const { install, rainbow } = flags

export async function inquire(): Promise<DistinctQuestion> {
	const projectName: DistinctQuestion = {
		type: 'input',
		name: 'projName',
		message: 'Project Name:',
		default: 'Amazing-Name',
		filter: (answer: string) => answer.trim()
	}

	enum pTemplate {
		// Node = 'Node'
		// Static = 'Static',
		Jumpstart = 'Jumpstart'
	}

	const projectTemplate: DistinctQuestion = {
		type: 'list',
		name: 'projTemplate',
		message: 'Project Template?',
		default: pTemplate.Jumpstart,
		choices: [
			{ name: 'Jumpstart project', value: pTemplate.Jumpstart },
			new Separator(),
			{ name: 'Coming Soon', value: pTemplate.Jumpstart },
			{ name: 'Coming Soon', value: pTemplate.Jumpstart }
		]
	}

	enum pType {
		Vanilla = 'Vanilla',
		Abstract = 'Abstract'
	}

	const projectType: DistinctQuestion = {
		type: 'list',
		name: 'projType',
		message: 'Project Type?',
		default: pType.Vanilla,
		choices: [
			{ name: 'Vanilla Js', value: pType.Vanilla },
			{ name: 'Abstract (Ts/Sass)', value: pType.Abstract }
		]
	}

	enum pManager {
		Npm = 'Npm',
		Yarn = 'Yarn'
	}

	const packageManager: DistinctQuestion = {
		type: 'list',
		name: 'pkgManager',
		message: 'Package Manager?',
		default: pManager.Npm,
		choices: [
			{ name: 'Npm', value: pManager.Npm },
			{ name: 'Yarn', value: pManager.Yarn }
		],
		when: () => install == true
	}

	const initilizeGit = {
		type: 'confirm',
		name: 'gitInit',
		message: 'Initilize Git?',
		default: true
	}

	enum Extras {
		Travis = 'Travis',
		License = 'License',
		Workflows = 'Workflows'
	}

	const extraQuestions: DistinctQuestion = {
		type: 'checkbox',
		name: 'extras',
		message: 'Extras!',
		choices: [
			{
				checked: true,
				name: 'Create a License',
				value: Extras.License
			},
			{
				checked: true,
				name: 'Include GitHub Workflows',
				value: Extras.Workflows
			},
			{
				checked: false,
				name: 'Include Travis-CI config',
				value: Extras.Travis
			}
		]
	}

	const areYou = {
		type: 'confirm',
		name: 'areU',
		message: 'Do you listen to girl in red?',
		default: true,
		when: () => rainbow == true
	}

	return prompt([
		projectName,
		projectTemplate,
		projectType,
		packageManager,
		initilizeGit,
		extraQuestions,
		areYou
	])
}
