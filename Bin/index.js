#!/usr/bin/env node

/**
 * Hyper
 * A Cli to bootstrap new projects!
 *
 * @author SharkSV <https://github.com/iTzSharkSV>
 */

const info = require('../Lib/Info.js');
const cli = require('../Lib/Cli');
const cProject = require('../Lib/Init/cProject');
const Prompt = require('../Lib/Init/Prompt');

const input = cli.input;
const flags = cli.flags;
const { clear } = flags;

Init = async () => {
	options = await Prompt();
	info();
	await cProject(options);
};

(async () => {
	info({ clear });
	// Commands
	input.includes(`help`) && cli.showHelp(0);
	input.includes(`init`) && Init();
})();
