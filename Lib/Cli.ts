import { Info } from './Modules/Info'
import { Args } from './Args'
import { Init } from './Init/cProject'

// prettier-ignore
(async (): Promise<void> => {
	Info({
		title: 'Hyper',
		tagLine: 'by Shorky',
		description: 'A CLI to bootstrap new projects!',
		version: '2.0',
		bgColor: '#36BB09',
		bold: false,
		clear: true
	})

	const input: string[] = Args.input

	// Cmds
	input.includes('help') && Args.showHelp(0)
	input.includes('init') && Init()
})()
