const fs = require('fs');

const { SLIDES_DIR } = require('./config');
const { metaListToRefs, getMetaList } = require('./tools');
const refs = require('./refs');
const file = require('./file');

async function deleteSlide(index='', name='') {
	console.log(`Removing slide "${index}_${name}"`);
	if (!fs.statSync(SLIDES_DIR).isDirectory()) {
		throw new Error(`Wrong path! ${SLIDES_DIR} is not a directory`);
	}

	const slides = getMetaList();
	let slide;
	index = parseInt(index, 10);
	if (Number.isInteger(index) || index < 0) {
		slide = slides.find((meta) => meta.index === index);
	} else {
		slide = slides.find((meta) => meta.name === name);
	}

	if (!slide) {
		console.log('Slide not found');
		return;
	}

	async function digestSlide(meta) {
		if (meta.index === slide.index) {
			await file.remove(`${SLIDES_DIR}/${meta.fullName}`);
			return null;
		}
		if (meta.index > slide.index) {
			await file.rename(`${SLIDES_DIR}/${meta.fullName}`, `${SLIDES_DIR}/${meta.index - 1}_${meta.name}.md`);
		}
		return meta;
	}

	try {
		const tasks = slides.map(digestSlide);
		const metaList = await Promise.all(tasks);
		const refsList = metaListToRefs(metaList);
		await refs.update(refsList);
		console.log(`Slide "${index}_${name}" removed successfully`);
	} catch(err) {
		throw err;
	}
}

module.exports = deleteSlide;