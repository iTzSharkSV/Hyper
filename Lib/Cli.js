const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	runInstall: {
		type: `boolean`,
		default: false,
		alias: `i`,
		desc: `Install dependencies`
	}
};

const commands = {
	help: { desc: `Print help info` },
	init: { desc: `Initiize a new project` }
};

const helpText = meowHelp({
	name: `hyper`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
