import execa from 'execa';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { rmSync, mkdirSync, existsSync } from 'fs';

(async () => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	const currentDir = process.cwd();
	const targetPath = join(currentDir, 'Tests', 'Target');

	const createDir = async () => mkdirSync(targetPath);
	const removeDir = async () => {
		rmSync(targetPath, {
			recursive: true,
			force: true
		});
	};

	const rmAnCr = async () => {
		removeDir();
		createDir();
	};

	existsSync(targetPath) ? rmAnCr() : createDir();

	const Init = execa('node', ['../../Bin/Hyper', 'init', '-y'], {
		cwd: join(__dirname, './Target')
	});

	Init.stdout.on('data', (data) => {
		process.stdout.write(data);
	});

	Init.stderr.on('data', (data) => {
		console.error(`Error: ${data}`);
	});

	Init.on('close', (code) => {
		console.log(`LOG: Process exited with code ${code}`);
		removeDir();
	});
})();
