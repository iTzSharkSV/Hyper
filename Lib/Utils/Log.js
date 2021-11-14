const alert = require('cli-alerts');

module.exports = (funcType, info) => {
	let name = '';

	switch (funcType) {
		case 'success':
			name = 'Pass';
			break;
		case 'error':
			name = 'Fail';
			break;
		case 'warning':
			name = 'Log';
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
