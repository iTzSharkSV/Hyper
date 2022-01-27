import execa from 'execa'
import { ncp } from 'ncp'
import { join } from 'path'
import { writeFile } from 'fs'
import { Print } from '../Modules/Print'
import { MIT } from './Json/LicenseList.json'

// Global variables
const currentDir: string = process.cwd()

// Functions
export async function copyTemplateFiles(
	Template: string,
	overWriteFiles?: boolean
): Promise<void> {
	const templateDir: string = join(__dirname, '../../../Templates', Template)

	ncp(
		templateDir,
		currentDir,
		{ clobber: overWriteFiles || false },
		(err: Error[] | null) => {
			return err ? Print('error', err.toString()) : null
		}
	)
}

export async function initGit(): Promise<void> {
	const result = await execa('git', ['init'])

	switch (result.failed) {
		case true:
			Print('error', 'An error occured while initializing git')
			break
		default:
			Promise.resolve()
	}
}

export async function iDependencies(pkgManager: string): Promise<void> {
	switch (pkgManager) {
		case 'Npm':
			await execa('npm', ['install'])
			break
		case 'Yarn':
			await execa('yarn', ['install'])
			break
		default:
			Print('error', "Couldn't install dependencies")
	}
}

export async function createLicense(Author: string): Promise<void> {
	const targetPath = join(currentDir, 'LICENSE')
	const licenseContent = MIT.licenseTxt
		.replace('<year>', `${new Date().getFullYear()}`)
		.replace('<copyright holders>', `${Author}`)

	return writeFile(targetPath, licenseContent, 'utf8', (err) => {
		return err ? Print('error', err.toString()) : null
	})
}
