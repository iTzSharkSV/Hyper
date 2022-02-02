import Print from '../Modules/Print';
import Clrs from '../Utils/Clrs';
import { pTemplate } from '../Inquire';

const { dim, yellow } = Clrs;

async function listTemplates(): Promise<void> {
	try {
		for (let i = 0; i < Object.keys(pTemplate).length; i++) {
			console.log(
				`${dim(`${i}-`)} ${yellow(Object.values(pTemplate)[i])}`
			);
		}
	} catch (err) {
		Print('Error', "Error: Couldn't list templates");
	} finally {
		// Prints an empty newline
		console.log('');
	}
}

export default listTemplates;
