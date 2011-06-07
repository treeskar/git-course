const file = require('./file');
const refs = require('./refs');
const { getMetaList, isIndexValid, metaListToRefs } = require('./tools');
const { SLIDES_DIR } = require('./config');

async function moveSlide(from, to, name='') {
	from = parseInt(from, 10);
	to = parseInt(to, 10);
	const slides = getMetaList();
	const max = Math.max(...slides.map(meta => meta.index));
	if ([from, to].some(index => !isIndexValid(index, max))) {
		throw new Error(`Slide index has to be in range 0..${max}`);
	}

	console.log(`Updating slide position ${from} -> ${to} ${name}`);
	const step = from < to ? -1 : 1;
	const minInRange = from < to ? from : to;
	const maxInRange = from > to ? from : to;

	async function digestSlide(meta) {
		if (meta.index < minInRange || meta.index > maxInRange) {
			return meta;
		}
		if (meta.index === from) {
			meta.index = to;
		} else {
			meta.index += step;
		}
		meta.fullName = await file.rename(`${SLIDES_DIR}/${meta.fullName}`, `${SLIDES_DIR}/${meta.index}_${meta.name}.md`);
		return meta;
	}

	try {
		let metaList;
		if (from === to) {
			if (name === '') {
				console.log(`Slide position updated ${from} -> ${to} successfully`);
				return;
			}
			const slide = slides.find(meta => meta.index === from);
			slide.name = name;
			metaList = slides;
			slide.fullName = await file.rename(`${SLIDES_DIR}/${slide.fullName}`, `${SLIDES_DIR}/${slide.index}_${name}.md`);
		} else {
			const tasks = slides.map(digestSlide);
			metaList = await Promise.all(tasks);
		}
		refsList = metaListToRefs(metaList);
		await refs.update(refsList);
		console.log(`Slide position updated ${from} -> ${to} ${name} successfully`);
	} catch(err) {
		throw err;
	}
}

module.exports = moveSlide;
