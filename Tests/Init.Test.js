/* eslint-disable @typescript-eslint/no-var-requires */
const execa = require('execa');
const path = require('path');
const fs = require('fs');

(async () => {
	const currentDir = process.cwd();
	const targetPath = path.join(currentDir, 'Tests', 'Target');

	const createDir = async () => fs.mkdirSync(targetPath);
	const removeDir = async () => {
		fs.rmSync(targetPath, {
			recursive: true,
			force: true
		});
	};

	const rmAnCr = async () => {
		removeDir();
		createDir();
	};

	fs.existsSync(targetPath) ? rmAnCr() : createDir();

	const Init = execa('hyper', ['init', '-y'], {
		cwd: path.join(__dirname, './Target')
	});

	Init.stdout.on('data', (data) => {
		process.stdout.write(data);
	});

	Init.stderr.on('data', (data) => {
		console.error(`Error: ${data}`);
	});

	Init.on('close', (code) => {
		const logTxt = `
		LOG:
			Process exited with code ${code}
			Removing $target dir
		`;
		console.log(logTxt);
		removeDir();
	});
})();
