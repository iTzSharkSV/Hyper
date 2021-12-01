const cProject = require('./cProject');
const Prompt = require('./Prompt');
const info = require('../Info.js');
const cli = require('../Cli.js');
const flags = cli.flags;
const { clear } = flags;

module.exports = Init = async () => {
	options = await Prompt('');
	info({ clear });
	await cProject(options);
};
