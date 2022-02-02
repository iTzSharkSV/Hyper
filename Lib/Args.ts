import * as meow from 'meow';
import Clrs from './Utils/Clrs';

// prettier-ignore
const {
	dim,
	gray,
	cyan,
	green,
	yellow,
	bgCyan,
	bgGreen,
	bgYellow
} = Clrs;

const helpTxt = `
${bgGreen(` USAGE `)}\n
${gray('$')} ${green('hyper')} ${cyan('<commands>')} ${yellow('[options]')}

${bgCyan(` COMMANDS `)}\n
${cyan('help')}   ${dim('Print help info')}
${cyan('init')}   ${dim('Initialize a new project')}
${cyan('ls')}     ${dim('List available templates')}

${bgYellow(` OPTIONS `)}\n
${yellow('-c, --clear')}     ${dim('Clear terminal')} ${gray('(default)')}
${yellow('-v, --version')}   ${dim('Print Cli version')}
${yellow('-y, --default')}   ${dim('Roll with default selection')}
${yellow('-i, --install')}   ${dim('Install dependencies')}
${yellow('-r, --rainbow')}   ${dim('I wonder🏳️‍🌈')}
`;

const Args = meow(helpTxt, {
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
			description: 'Print Cli version'
		},
		default: {
			type: 'boolean',
			default: false,
			alias: 'y',
			description: 'Roll with default selection'
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
});

export default Args;
