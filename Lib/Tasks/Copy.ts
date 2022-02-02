import { join } from 'path';
import { copy } from 'fs-extra';

async function copyTemplateFiles(
	Template: string,
	OverwriteFiles: boolean
): Promise<void> {
	const currentDir = process.cwd();
	// prettier-ignore
	const templateDir: string = join(
		__dirname,
		'../Templates',
		Template
	);

	copy(templateDir, currentDir, {
		overwrite: OverwriteFiles || false,
		preserveTimestamps: false
	});
}

export default copyTemplateFiles;
