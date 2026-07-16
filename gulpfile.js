import { src, dest, watch as gulpWatch } from "gulp";
import gulpSass from "gulp-sass";
import sass from "sass";

const sassCompiler = gulpSass(sass);

const SOURCE = {
  SCSS: "_sass/*.scss",
};

const OUTPUT = {
  SCSS: "_site/static/css",
};

const compileSass = () => {
  return src(SOURCE.SCSS)
    .pipe(sassCompiler.sync({ outputStyle: "compressed" }).on("error", sassCompiler.logError))
    .pipe(dest(OUTPUT.SCSS));
};

export const watch = () => {
  gulpWatch(SOURCE.SCSS, { ignoreInitial: false }, compileSass);
};

export default compileSass;
