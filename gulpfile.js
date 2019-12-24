const { src, dest, watch, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

sass.compiler = require('sass');

const SOURCE = {
  CSS: 'static/css/*.css',
  SCSS: '_sass/*.scss'
}

const OUTPUT = {
  CSS: '_site/static/css',
  SCSS: '_site/static/css'
}

const minCSS = () => {
  return src(SOURCE.CSS)
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS({}))
    .pipe(dest(OUTPUT.CSS));
}

const compileSass = () => {
  return src(SOURCE.SCSS)
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest(OUTPUT.SCSS));
};

exports.watch = () => {
  watch(SOURCE.SCSS, { ignoreInitial: false }, compileSass);
}

exports.default = compileSass
