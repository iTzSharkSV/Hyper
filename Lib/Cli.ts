import { Info } from './Modules/Info'
import { Args } from './Args'
import { Init } from './Init/cProject'
import updateNotifier from 'update-notifier'
import pkg from '../package.json'

// prettier-ignore
(async (): Promise<void> => {
	Info({
		title: 'Hyper',
		tagLine: 'by Shorky',
		description: 'A CLI to bootstrap new projects!',
		version: pkg.version,
		bold: false,
		clear: true
	})

	updateNotifier({
		pkg,
		updateCheckInterval: 0,
	}).notify({isGlobal: true})

	const input: string[] = Args.input

	// Cmds
	input.includes('help') && Args.showHelp(0)
	input.includes('init') && Init()
})()
