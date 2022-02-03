import Args from './Args';
import Init from './Tasks';
import Inquire from './Inquire';
import Info from './Modules/Info';
import Print from './Modules/Print';
import listTemplates from './Tasks/List';
import * as updateNotifier from 'update-notifier';

(async (): Promise<void> => {
	Info({
		title: 'Hyper',
		tagLine: 'by @Shorky',
		description: 'A Cli to bootstrap new projects',
		version: '2.3',
		clear: true
	});

	const pkg = {
		name: '@sharksv/hyper',
		version: '2.3.0'
	};

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
			gitInit: true,
			pkgManager: 'npm'
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
