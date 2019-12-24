const CleanCSS = require('clean-css');

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('cssmin', (code) => {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addHandlebarsShortcode('removeWhitespaces', (value) => value.replace(/\s/g,''));
  eleventyConfig.addHandlebarsShortcode('getActive', (arg1, arg2) => arg1 == arg2 ? 'active' : '');

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
      "jpeg",
      "js",
      "htaccess",
      "xml"
		],
		passthroughFileCopy: true,
  };
};
