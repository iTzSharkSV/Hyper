import meow from 'meow'
import { Clrs } from './Utils/Clrs'
const {
	Dim,
	gray,
	cyan,
	green,
	yellow,
	blueInverse,
	greenInverse,
	orangeInverse
} = Clrs

const helpTxt = `
    ${greenInverse(` USAGE `)}\n
    ${gray('$')} ${green('hyper')} ${cyan('<commands>')} ${yellow('[options]')}

    ${blueInverse(` COMMANDS `)}\n
    ${cyan('help')}   ${Dim('Print help info')}
    ${cyan('init')}   ${Dim('Initialize a new project')}

    ${orangeInverse(` OPTIONS `)}\n
    ${yellow('-c, --clear')}     ${Dim('Clear terminal')}
    ${yellow('-v, --version')}   ${Dim('Print version')}
    ${yellow('-y, --install')}   ${Dim('Install dependencies')}
    ${yellow('-r, --rainbow')}   ${Dim('I wonder🏳️‍🌈')}

`
export const Args = meow(helpTxt, {
	flags: {
		clear: {
			type: 'boolean',
			default: true,
			alias: 'c',
			description: 'Clear terminal'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v',
			description: 'Print version'
		},
		install: {
			type: 'boolean',
			default: false,
			alias: 'i',
			description: 'Install dependencies'
		},
		rainbow: {
			type: 'boolean',
			default: false,
			alias: 'r',
			description: 'I wonder🏳️‍🌈'
		}
	},
	inferType: true,
	description: false,
	hardRejection: false
})
