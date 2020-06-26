const CleanCSS = require('clean-css');

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('cssmin', (code) => {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addHandlebarsShortcode('removeWhitespaces', (value) => value.replace(/\s/g,''));
  eleventyConfig.addHandlebarsShortcode('getActive', (arg1, arg2) => arg1 == arg2 ? 'navigation__item--active' : '');

  return {
    dir: {
      input: '.',
      includes: '_includes',
      output: '_site'
    },
    templateFormats: [
			"hbs",
      "png",
      "jpg",
      "gif",
      "jpeg",
      "js",
      "htaccess",
      "xml"
		],
		passthroughFileCopy: true,
  };
};
