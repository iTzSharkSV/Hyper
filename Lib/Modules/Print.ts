import { Chalk } from 'chalk';
import { symbolsInterface } from '../Utils/Interfaces';
import Clrs from '../Utils/Clrs';

// prettier-ignore
const {
	red,
	cyan,
	green,
	yellow,
	bgRed,
	bgCyan,
	bgGreen,
	bgYellow
} = Clrs;

const Symbols: symbolsInterface = {
	Info: cyan('ℹ'),
	Pass: green('✔'),
	Error: red('✖'),
	Warning: yellow('⚠')
};

/**
 * 📟 Prints out a prettified message to the console.
 * @param {string} type Print type (pass, error, warning, info)
 * @param {string} msg Message to print
 * @example
 * ```ts
 * import { Print } from '...'
 * Print('warning', 'a very serious warning!')
 * ```
 */

function Print(Type: string, Msg: string): void {
	const pType = Type.toLowerCase();

	let Sym: string;
	let Clr: Chalk;
	let Bg: Chalk;

	switch (pType) {
		case 'pass':
			Bg = bgGreen;
			Sym = Symbols.Pass;
			Clr = green;
			break;
		case 'error':
			Bg = bgRed;
			Sym = Symbols.Error;
			Clr = red;
			break;
		case 'warning':
			Bg = bgYellow;
			Sym = Symbols.Warning;
			Clr = yellow;
			break;
		default:
			Bg = bgCyan;
			Sym = Symbols.Info;
			Clr = cyan;
			break;
	}

	console.log(`\n${Sym} ${Bg(` ${Type} `)} ${Clr(Msg)}\n`);
}

export default Print;
