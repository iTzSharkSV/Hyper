const inquirer = require('inquirer');

module.exports = PFO = async options => {
	// Options:
	const _Name = 'Author';
	const _Email = 'me@Example.com';
	const questions = [];

	if (!options.name) {
		questions.push({
			type: 'input',
			name: 'name',
			message: "Author's Name",
			default: _Name
		});
	}

	if (!options.email) {
		questions.push({
			type: 'input',
			name: 'email',
			message: 'Public Email',
			default: _Email
		});
	}

	if (!options.git) {
		questions.push({
			type: 'confirm',
			name: 'git',
			message: 'Initilize Git?',
			default: true
		});
	}

	if (!options.license) {
		questions.push({
			type: 'confirm',
			name: 'license',
			message: 'Create a License?',
			default: true
		});
	}

	const answers = await inquirer.prompt(questions);
	return {
		...options,
		name: options.name || answers.name,
		email: options.email || answers.email,
		git: options.git || answers.git,
		license: options.license || answers.license
	};
};
