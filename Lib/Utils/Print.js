const alert = require('cli-alerts');

Print = (funcType, info) => {
	let name;

	switch (funcType) {
		case 'success':
			name = 'Pass';
			break;
		case 'error':
			name = 'Fail';
			break;
		case 'warning':
			name = 'Attention';
			break;
		default:
			name = 'Info';
	}

	alert({
		type: funcType,
		name: name,
		msg: info
	});
};

module.exports = Print;
