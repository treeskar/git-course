require('console.table');

function printHelp() {
    console.log('Usage: \n');
    console.table([
        { Options: '  cli add <index> <name>', Description: 'Add slide' },
        { Options: '  cli rm <index>', Description: 'Delete slide' },
        { Options: '  cli mv <from> <to>', Description: 'Move slide' },
        { Options: '  cli mv <index> <index> <newName>', Description: 'Rename slide' },
        { Options: '  cli init <name>', Description: 'Create example repository' },
        { Options: '  cli nit-remote <name>', Description: 'Create remote (bare) example repository' },
        { Options: '  cli -h', Description: 'Display command list' },
    ]);
}

module.exports = printHelp;