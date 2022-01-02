import { Chalk } from 'chalk'
import { Clrs } from '../Utils/Clrs'
const {
	red,
	cyan,
	green,
	yellow,
	redInverse,
	blueInverse,
	greenInverse,
	orangeInverse
} = Clrs

interface SymbolsInterface {
	Info: string
	Pass: string
	Error: string
	Warning: string
}

export const Symbols: SymbolsInterface = {
	Info: cyan('ℹ'),
	Pass: green('✔'),
	Error: red('✖'),
	Warning: yellow('⚠')
}

/**
 * 📟 Prints out a prettified message to the console.
 * @param {string} type Print type (pass, error, warning, info)
 * @param {string} msg Message to print (optional)
 * @param {string} title Msg title (optional)
 * @example
 * ```ts
 * import { Print } from '...'
 * Print('warning', 'a very serious warning!')
 * ```
 */

export function Print(type: string, msg?: string, title?: string): void {
	const pType = type.toLowerCase()
	const Title = title ? title : type.toUpperCase()
	const Msg = msg ? msg : ''

	let Sym: string
	let Clr: Chalk
	let Inverse: Chalk

	switch (pType) {
		case 'pass':
			Inverse = greenInverse
			Sym = Symbols.Pass
			Clr = green
			break
		case 'error':
			Inverse = redInverse
			Sym = Symbols.Error
			Clr = red
			break
		case 'warning':
			Inverse = orangeInverse
			Sym = Symbols.Warning
			Clr = yellow
			break
		default:
			Inverse = blueInverse
			Sym = Symbols.Info
			Clr = cyan
			break
	}

	console.log(`\n${Sym} ${Inverse(` ${Title} `)} ${Clr(Msg)}\n`)
}
