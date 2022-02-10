import Args from './Args';
import Init from './Tasks';
import Inquire from './Inquire';
import Info from './Modules/Info';
import Print from './Modules/Print';
import listTemplates from './Tasks/List';
import * as pkg from '../package.json';
import * as updateNotifier from 'update-notifier';

(async (): Promise<void> => {
	const { version } = pkg;
	const ver = version.substring(0, version.length - 2);

	Info({
		title: 'Hyper',
		tagLine: 'by @Shorky',
		description: 'A Cli to bootstrap new projects',
		version: ver,
		clear: true
	});

	updateNotifier({
		pkg,
		updateCheckInterval: 0
	}).notify({ isGlobal: true });

	const input: string[] = Args.input;
	const flags = Args.flags;

	// Cmds
	input.includes('help') && Args.showHelp(0);
	input.includes('ls') && listTemplates();

	if (input.includes('init')) {
		const defaultSelection = {
			aName: 'Someone',
			projTemplate: 'Node',
			overWriteFiles: false,
			gitInit: true,
			fstCommit: true,
			pkgManager: 'npm',
			confirm: 'yes'
		};

		const userSelection =
			flags.default === true
				? defaultSelection
				: {
						...(await (async () => {
							return Inquire();
						})())
				  };

		Init(userSelection);
	}

	// Handle errors
})().catch((err: Error) => {
	Print('Error', err.message);
	process.exit(1);
});
