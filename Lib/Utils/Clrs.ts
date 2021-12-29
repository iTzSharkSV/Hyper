import chalk from 'chalk'

export const Clrs = {
	Dim: chalk.dim,

	// Clrs
	red: chalk.red,
	gray: chalk.gray,
	cyan: chalk.cyan,
	green: chalk.green,
	yellow: chalk.yellow,

	// Inverse
	redInverse: chalk.bold.inverse.red,
	blueInverse: chalk.bold.inverse.blue,
	cyanInverse: chalk.bold.inverse.cyan,
	greenInverse: chalk.bold.inverse.green,
	yellowInverse: chalk.bold.inverse.yellow,
	orangeInverse: chalk.bold.inverse.hex('#FFA500')
}
