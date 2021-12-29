/**
 * 💾 Cross platform clear console
 * @example
 * ```ts
 * import { Clear } from '...'
 * clearConsole ? Clear() : doSomethingElse()
 * ```
 */

export function Clear(): void {
	let arg: string

	switch (process.platform) {
		case 'win32':
			arg = '\x1B[2J\x1B[0f'
			break
		default:
			arg = '\x1B[2J\x1B[3J\x1B[H'
	}

	process.stdout.write(arg)
}
