#!/usr/bin/env node

/**
 * Hyper
 * A Cli to bootstrap new projects!
 *
 * @author SharkSV <https://github.com/iTzSharkSV>
 */

const info = require('../Lib/Info.js');
const cli = require('../Lib/Cli');
const Init = require('../Lib/Init');
const Log = require('../Lib/Utils/Log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	info({ clear });
	// Commands
	input.includes(`help`) && cli.showHelp(0);
	input.includes(`init`) && Init();
	// Flags
	debug && Log('warning', 'You Sneaky!') & console.table(flags);
})();
