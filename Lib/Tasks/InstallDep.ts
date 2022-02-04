import * as execa from 'execa';

async function iDependencies(pkgManager: string): Promise<void> {
	switch (pkgManager) {
		case 'Npm':
			await execa('npm', ['install']);
			break;
		case 'Yarn':
			await execa('yarn', ['install']);
			break;
		default:
			Promise.reject(new Error("Couldn't install dependencies"));
	}
}

export default iDependencies;
