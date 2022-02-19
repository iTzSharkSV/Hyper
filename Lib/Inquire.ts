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

	enum pType {
		Library = 'Lib',
		Binary = 'Bin'
	}

	const rsProjType: DistinctQuestion = {
		type: 'list',
		name: 'rsProjType',
		message: 'Rust Project Type?',
		default: pType.Binary,
		choices: [
			{ name: 'Binary', value: pType.Binary },
			{ name: 'Library', value: pType.Library }
		],
		when: (answers: Answers) => answers.projTemplate === pTemplate.Rust
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
		when: (answers: Answers) =>
			install && answers.projTemplate === pTemplate.Node
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
				key: 'a',
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
		rsProjType,
		packageManager,
		initilizeGit,
		firstCommit,
		areYou,
		Confirm
	]);
}

export default Inquire;
