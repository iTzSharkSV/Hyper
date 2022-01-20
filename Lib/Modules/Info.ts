import { Chalk } from 'chalk'
import { Clear } from './Clear'
import { Clrs } from '../Utils/Clrs'
const { Dim, BoldDim, greenInverse } = Clrs

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
		bold: boolean
		clear: boolean
	}

	const defaultOptions: optionsInterface = {
		title: 'Heading',
		tagLine: 'Tagline',
		description: 'Description',
		version: '',
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
		bold,
		clear
	} = options

	let Dimmed: Chalk

	switch (bold) {
		case true:
			Dimmed = BoldDim
			break
		case false:
			Dimmed = Dim
			break
	}

	/** @param {boolean} clear - Clear the terminal before printing */
	clear && Clear()

	/** @returns */
	console.log(
		`\n${greenInverse(` ${title} `)} v${version} ${Dimmed(
			tagLine
		)} \n${Dimmed(description)}\n`
	)
}
