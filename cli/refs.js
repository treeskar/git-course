const fs = require('fs');
const { COURSE_DIR } = require('./config');

function updateSlidesRefs(slidesRefs) {
	return new Promise((resolve, reject) => {
		fs.writeFile(`${COURSE_DIR}/slides.json`, JSON.stringify(slidesRefs, null, '\t'), (err) => (
			err ? reject(err) : resolve()
		));
	});
}

module.exports = {
	update: updateSlidesRefs,
};