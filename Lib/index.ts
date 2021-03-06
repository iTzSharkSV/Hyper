import Args from './Args';
import Inquire from './Inquire';
import Init from './Tasks/Init';
import Info from './Modules/Info';
import Print from './Modules/Print';
import listTemplates from './Tasks/List';
import { UpdateNotifier } from 'update-notifier';

(async (): Promise<void> => {
	const input: string[] = Args.input;
	const flags = Args.flags;

	Info({
		title: 'Hyper',
		tagLine: 'by @Shorky',
		description: 'A Cli to bootstrap new projects',
		version: '3.0',
		clear: flags.keep ? false : true
	});

	const pkg = {
		name: '@sharksv/hyper',
		version: '3.0.0'
	};

	new UpdateNotifier({
		pkg,
		updateCheckInterval: 0
	}).notify({ isGlobal: true });

	// Cmds
	input.includes('help') && Args.showHelp(0);
	input.includes('list') && listTemplates();

	if (input.includes('init')) {
		const defaultSelection = {
			confirm: 'yes',
			aName: 'Someone',
			projTemplate: 'Node',
			pkgManager: 'Npm',
			gitInit: true,
			fstCommit: true
		};

		const userSelection =
			flags.skip === true
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
