const fs = require('fs');

const { SLIDES_DIR } = require('./config');
const { getSlideMeta, metaListToRefs, getMetaList } = require('./tools');
const refs = require('./refs');
const file = require('./file');

async function createSlide(slideName) {
	const path = `${SLIDES_DIR}/${slideName}.md`;
	await file.add(path, `## ${slideName}`);
	return getSlideMeta(path);
}

module.exports = createSlide;

async function addSlide(index, name) {
	index = parseInt(index, 10);
	name = name || 'slide';
	console.log(`Adding a new slide "${name}"`);

	async function digestSlide(meta) {
		if (meta.index >= index) {
			meta.index += 1;
			await file.rename(`${SLIDES_DIR}/${meta.fullName}`, `${SLIDES_DIR}/${meta.index}_${meta.name}.md`);
		}
		return meta;
	}

	if (!fs.statSync(SLIDES_DIR).isDirectory()) {
		throw new Error(`Wrong path! ${SLIDES_DIR} is not a directory`);
	}
	const slides = getMetaList();
	try {
		let refList;
		if (Number.isInteger(index)) {
			index = index < 0 ? 0 : index;
			const createSlideTask = createSlide(`${index}_${name}`);
			const tasks = [createSlideTask, ...slides.map(digestSlide)];
			const metaList = await Promise.all(tasks);
			refsList = metaListToRefs(metaList);
		} else {
			const newIndex = Math.max(...slides.map(meta => meta.index)) + 1;
			slides.push({ index: newIndex, name, fullName: `${newIndex}_${name}.md` });
			await createSlide(`${newIndex}_${name}`);
			refsList = metaListToRefs(slides);
		}
		await refs.update(refsList);
		console.log(`Slide "${name}" added successfully`);
	} catch(err) {
		throw err;
	}
}

module.exports = addSlide;