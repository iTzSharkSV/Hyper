import Print from '../Modules/Print';
import { join } from 'path';
import { writeFile } from 'fs';
import { MIT } from './Json/LicenseList.json';

async function createLicense(Author: string): Promise<void> {
	const currentDir = process.cwd();
	const targetPath = join(currentDir, 'LICENSE');
	const licenseContent = MIT.licenseTxt
		.replace('<year>', `${new Date().getFullYear()}`)
		.replace('<copyright holders>', `${Author}`);

	writeFile(targetPath, licenseContent, 'utf8', (err) => {
		err
			? Print('error', "Couldn't setup up License file")
			: Promise.resolve();
	});
}

export default createLicense;
