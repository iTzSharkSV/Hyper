import * as execa from 'execa';

async function commitFiles(): Promise<void> {
	try {
		await execa('git', ['add', '.']);
		// prettier-ignore
		await execa('git', [
            'commit', 
            '-m', 
            'Initial-commit'
        ]);
	} catch (error) {
		Promise.reject(new Error("Couldn't commit changes"));
	}
}

export default commitFiles;
