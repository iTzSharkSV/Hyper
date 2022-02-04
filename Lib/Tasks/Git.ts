import * as execa from 'execa';

async function initGit(): Promise<void> {
	try {
		await execa('git', ['init']);
	} catch (error) {
		Promise.reject(new Error("Couldn't initialize git"));
	}
}

export default initGit;
