const argv = require('yargs').argv;
const addSlide = require('./add-slide');
const deleteSlide = require('./delete-slide');
const moveSlide = require('./move-slide');
const printHelp = require('./help.js');
const { initRepository, initRemoteRepository } = require('./init-repository');

const CMD = (argv._.shift() || '').toUpperCase();

if(argv.h || argv.help) {
	printHelp();
	process.exit();
}
switch(CMD) {
	case 'ADD':
		addSlide(...argv._);
		break;
	case 'REMOVE':
	case 'RM':
	case 'DELETE':
		deleteSlide(...argv._);
		break;
	case 'MOVE':
	case 'MV':
		moveSlide(...argv._);
		break;
	case 'INIT':
		initRepository(...argv._);
		break;
	case 'INIT-REMOTE':
		initRemoteRepository(...argv._);
		break;
	default:
		console.info('Unknown command');
}
