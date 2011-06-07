const fs = require('fs');
const path = require('path');
const git = require('simple-git/promise')(path.resolve(__dirname, '../'));

function removeFile(file) {
	return git.rm(file);
}

function renameFile(currentName, newName) {
	return git.mv(currentName, newName);
}

function addFile(path, content) {
	return new Promise((resolve, reject) => {
		fs.writeFile(path, content, (err) => {
			if (err) return reject(err);
			return git.add(path).then(() => resolve(path), reject);
		});
	});
}
module.exports = {
	remove: removeFile,
	rename: renameFile,
	add: addFile,
};