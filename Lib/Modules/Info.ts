import chalk, { Chalk } from 'chalk'
import { Clear } from './Clear'

/**
 * 📟 Prints out an info header for Node.js CLIs
 * @param {object} uOptions
 * @example
 * ```ts
 * Info({
 * 	title: '@projectName',
 * 	tagLine: 'by ✨@author✨',
 * 	description: 'A very useful description!',
 * 	version: '1.0',
 * 	bgColor: '#ffffff',
 * 	bold: false,
 * 	clear: true,
 * })
 * ```
 */

export function Info(uOptions: object): void {
	interface optionsInterface {
		title: string
		tagLine: string
		description: string
		version: string
		bgColor: string
		bold: boolean
		clear: boolean
	}

	const defaultOptions: optionsInterface = {
		title: 'Heading',
		tagLine: 'Tagline',
		description: 'Description',
		version: '',
		bgColor: '#ffffff',
		bold: false,
		clear: true
	}

	const options = { ...defaultOptions, ...uOptions }
	// prettier-ignore
	const {
		title,
		tagLine,
		description,
		version,
		bgColor,
		bold,
		clear
	} = options

	let Dim: Chalk
	let BG: Chalk

	switch (bold) {
		case true:
			Dim = chalk.dim.bold
			break
		case false:
			Dim = chalk.dim
			break
	}

	switch (bgColor) {
		case '':
			BG = chalk.inverse.green
			break
		default:
			BG = chalk.hex(bgColor).inverse
	}

	/** @param {boolean} clear - Clear the terminal before printing */
	clear && Clear()

	/** @returns */
	console.log(
		`\n${BG(` ${title} `)} v${version} ${Dim(tagLine)} \n${Dim(
			description
		)}\n`
	)
}
