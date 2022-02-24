import Args from './Args';
import { DistinctQuestion, Separator, Answers, prompt } from 'inquirer';

async function Inquire(): Promise<DistinctQuestion> {
	const { install, rainbow } = Args.flags;

	const authorName: DistinctQuestion = {
		type: 'input',
		name: 'aName',
		message: "Author's Name:",
		default: 'Someone',
		filter: (answer: string) => answer.trim()
	};

	enum pTemplate {
		Jumpstart = 'Jumpstart',
		Static = 'Static',
		Rust = 'Rust',
		Node = 'Node'
	}

	const projectTemplate: DistinctQuestion = {
		type: 'list',
		name: 'projTemplate',
		message: 'Project Template?',
		default: pTemplate.Node,
		choices: [
			{ name: 'Jumpstart', value: pTemplate.Jumpstart },
			new Separator(),
			{ name: 'A Node.js project', value: pTemplate.Node },
			{ name: 'Static site biolerplate', value: pTemplate.Static },
			{ name: 'Oxidized-C project (Rust)', value: pTemplate.Rust }
		]
	};

	const initilizeGit = {
		type: 'confirm',
		name: 'gitInit',
		message: 'Initilize Git?',
		default: true
	};

	const firstCommit = {
		type: 'confirm',
		name: 'fstCommit',
		message: 'Commit current files?',
		default: true,
		when: (answers: Answers) => answers.gitInit === true
	};

	enum pManager {
		Npm = 'Npm',
		Yarn = 'Yarn',
		Cargo = 'Cargo'
	}

	const packageManager: DistinctQuestion = {
		type: 'list',
		name: 'pkgManager',
		message: 'Package Manager?',
		default: pManager.Npm,
		choices: [
			{ name: 'Npm', value: pManager.Npm },
			{ name: 'Yarn', value: pManager.Yarn },
			{ name: 'Cargo', value: pManager.Cargo }
		],
		when: () => install
	};

	const areYou = {
		type: 'confirm',
		name: 'areU',
		message: 'Do you listen to girl in red?',
		default: true,
		when: () => rainbow
	};

	const Confirm = {
		type: 'expand',
		name: 'confirm',
		message: 'Generating proj in currentDir...',
		choices: [
			{
				key: 'y',
				name: 'Confirm selection',
				value: 'yes'
			},
			{
				key: 'c',
				name: 'Change directory',
				value: 'change'
			},
			{
				key: 'o',
				name: 'Overwrite conflicting files (if any)',
				value: 'overwrite'
			},
			new Separator(),
			{
				key: 'x',
				name: 'Abort',
				value: 'abort'
			}
		]
	};

	return prompt([
		authorName,
		projectTemplate,
		packageManager,
		initilizeGit,
		firstCommit,
		areYou,
		Confirm
	]);
}

export default Inquire;
