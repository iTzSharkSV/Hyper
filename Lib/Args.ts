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

// prettier-ignore
const helpTxt = `
${bgGreen(` USAGE `)}\n
${gray('$')} ${green('hyper')} ${cyan('<commands>')} ${yellow('[options]')}

${bgCyan(` COMMANDS `)}\n
${cyan('help')}   ${dim('Print help info')}
${cyan('init')}   ${dim('Initialize a new project')}
${cyan('list')}   ${dim('List available templates')}

${bgYellow(` OPTIONS `)}\n
${yellow('-k, --keep')}      ${dim('Keep terminal output ')} ${gray('(off by Default)')}
${yellow('-y, --skip')}      ${dim('Generate without prompt')}
${yellow('-i, --install')}   ${dim('Install dependencies')}
${yellow('-v, --version')}   ${dim('Print Cli version')} ${gray('(following semver)')}
`;

const Args = meow(helpTxt, {
	flags: {
		keep: {
			type: 'boolean',
			default: false,
			alias: 'k',
			description: 'Keep terminal output'
		},
		skip: {
			type: 'boolean',
			default: false,
			alias: 'y',
			description: 'Generate without prompt'
		},
		install: {
			type: 'boolean',
			default: false,
			alias: 'i',
			description: 'Install dependencies'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v',
			description: 'Print Cli version'
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
