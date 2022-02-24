import Clrs from '../Utils/Clrs';

const { dim } = Clrs;
const logTxt = `
---------------------------------------------------------
LANGUAGE          Size(kb)     NAME
---------------------------------------------------------
(-)               ${dim('37.5')}	       Jumpstart
Typescript        ${dim('40.1')}         Node.js Project
Ts/Sass           ${dim('41.0')}         Static-Web
Rust-Lang         ${dim('38.1')}         Rust Project ${dim('(Bin, Lib)')}
Java              ${dim('-')}            Java Project ${dim('(Coming soon)')}
---------------------------------------------------------
`;

export default function listTemplates() {
	console.log(logTxt);
}
