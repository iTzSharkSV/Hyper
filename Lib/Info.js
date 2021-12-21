const welcome = require('cli-welcome');
const pkg = require('../package.json');
const unhandled = require('cli-handle-unhandled');

Info = () => {
	unhandled();
	welcome({
		title: `Hyper`,
		tagLine: `by Shorky`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear: true
	});
};

module.exports = Info;
