const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const SOURCE = {
  SCSS: "_sass/*.scss",
};

const OUTPUT = {
  SCSS: "_site/static/css",
};

const compileSass = () => {
  return src(SOURCE.SCSS)
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest(OUTPUT.SCSS));
};

exports.watch = () => {
  watch(SOURCE.SCSS, { ignoreInitial: false }, compileSass);
};

exports.default = compileSass;
