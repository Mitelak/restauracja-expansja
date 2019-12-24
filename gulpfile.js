const { src, dest, watch, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const SOURCE = {
  CSS: 'static/css/*.css'
}

const OUTPUT = {
  CSS: '_site/static/css'
}

const minCSS = () => {
  return src(SOURCE.CSS)
    .pipe(cleanCSS({}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(OUTPUT.CSS));
}

exports.watch = () => {
  watch(SOURCE.CSS, { ignoreInitial: false }, minCSS);
}
exports.default = minCSS
