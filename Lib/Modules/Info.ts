import { optionsInterface } from '../Utils/Interfaces';
import clearConsole from './Clear';
import Clrs from '../Utils/Clrs';

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
 * 	clear: true,
 * })
 * ```
 */

function Info(uOptions: object): void {
	const { dim, bgGreen } = Clrs;

	const defaultOptions: optionsInterface = {
		title: 'Hallo',
		tagLine: 'by @Shorky',
		description: 'An awesome description!',
		version: 'v3-Mil',
		clear: true
	};

	const options = { ...defaultOptions, ...uOptions };
	// prettier-ignore
	const {
		title,
		tagLine,
		description,
		version,
		clear
	} = options

	/** @param {boolean} clear - Clear the terminal before printing */
	clear && clearConsole();

	/** @returns */
	console.log(
		`\n${bgGreen(` ${title} `)} v${version} ${dim(tagLine)} \n${dim(
			description
		)}\n`
	);
}

export default Info;
