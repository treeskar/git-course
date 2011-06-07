const fs = require('fs');
const { SLIDES_DIR, SLIDE_PATTERN } = require('./config');

function getSlideMeta(slidePath) {
	const slide = slidePath.replace(`${SLIDES_DIR}/`, '');
	if (!SLIDE_PATTERN.test(slide)) {
		return null;
	}
	const [fullName, index, name] = slide.match(SLIDE_PATTERN);
	return { fullName, index: parseInt(index, 10), name };
}

function metaListToRefs(metaList) {
	return metaList
		.filter(meta => meta)
		.sort((metaA, metaB) => metaA.index - metaB.index)
		.map(meta => meta.name);
}

function getMetaList() {
	return fs.readdirSync(SLIDES_DIR).map(getSlideMeta).filter(meta => meta);
}

function isIndexValid(index, max) {
	return Number.isInteger(index) && index >= 0 && index <= max;
}

module.exports = {
	getSlideMeta,
	metaListToRefs,
	getMetaList,
	isIndexValid,
};