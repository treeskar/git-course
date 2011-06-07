const path = require('path');
const SLIDE_PATTERN = /^(\d+)_(.+)\.md$/;
const COURSE_DIR = process.env.COURSE_DIR || path.resolve(__dirname, '../course');
const SLIDES_DIR = process.env.SLIDES_DIR || path.resolve(__dirname, '../course/slides');
const EXAMPLES_DIR = process.env.SLIDES_DIR || path.resolve(__dirname, '../course/examples');
const REMOTE_EXAMPLES_DIR = `${EXAMPLES_DIR}/remote`;

module.exports = {
	SLIDE_PATTERN,
	COURSE_DIR,
	SLIDES_DIR,
	EXAMPLES_DIR,
	REMOTE_EXAMPLES_DIR,
};