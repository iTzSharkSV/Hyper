const inquirer = require('inquirer');

Prompt = async (options) => {
	// Placeholders:
	const _Name = 'Author';
	const _Email = 'me@Example.com';
	const _Template = 'Javascript';

	// Questions
	let Template, Name, Email, Git, License;

	Template = {
		type: 'list',
		name: 'template',
		message: 'Project Template:',
		choices: ['Javascript', 'Typescript'],
		default: _Template
	};

	Name = {
		type: 'input',
		name: 'name',
		message: "Author's Name:",
		default: _Name
	};

	Email = {
		type: 'input',
		name: 'email',
		message: 'Public Email:',
		default: _Email
	};

	Git = {
		type: 'confirm',
		name: 'git',
		message: 'Initilize Git?',
		default: true
	};

	License = {
		type: 'confirm',
		name: 'license',
		message: 'Create a License?',
		default: true
	};

	const questions = [Template, Name, Email, Git, License];
	const answers = await inquirer.prompt(questions);

	return {
		...options,
		Template: answers.template,
		Name: answers.name,
		Email: answers.email,
		Git: answers.git,
		License: answers.license
	};
};

module.exports = Prompt;
