import { DistinctQuestion, Separator, prompt } from 'inquirer'
import { Args } from '../Args'

const flags = Args.flags
const { install, rainbow } = flags

export async function inquire(): Promise<DistinctQuestion> {
	const authorName: DistinctQuestion = {
		type: 'input',
		name: 'aName',
		message: "Author's Name:",
		default: 'Someone',
		filter: (answer: string) => answer.trim()
	}

	enum pTemplate {
		Static = 'Static',
		Jumpstart = 'Jumpstart',
		Node = 'Node',
		Rust = 'Rust'
	}

	const projectTemplate: DistinctQuestion = {
		type: 'list',
		name: 'projTemplate',
		message: 'Project Template?',
		default: pTemplate.Jumpstart,
		choices: [
			{
				name: 'Jumpstart (bootstrap existing projects)',
				value: pTemplate.Jumpstart
			},
			new Separator(),
			{ name: 'A Node.js project', value: pTemplate.Node },
			{ name: 'Static site biolerplate', value: pTemplate.Static },
			{ name: 'Oxidized-C project (Rust)', value: pTemplate.Rust }
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

	const createLicense = {
		type: 'confirm',
		name: 'cLicense',
		message: 'Create License?',
		default: true
	}

	const areYou = {
		type: 'confirm',
		name: 'areU',
		message: 'Do you listen to girl in red?',
		default: true,
		when: () => rainbow == true
	}

	return prompt([
		authorName,
		projectTemplate,
		packageManager,
		initilizeGit,
		createLicense,
		areYou
	])
}
