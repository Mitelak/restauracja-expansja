const CleanCSS = require("clean-css");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("cssmin", (code) => {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addHandlebarsShortcode("removeWhitespaces", (value) =>
    value.replace(/\s/g, "")
  );
  eleventyConfig.addHandlebarsShortcode("getActive", (arg1, arg2) =>
    arg1 == arg2 ? "navigation__item--active" : ""
  );
  eleventyConfig.addHandlebarsShortcode("add", (a, b) => a + b);
  eleventyConfig.addHandlebarsShortcode("ifIsNumber", (value, body) =>
    typeof value === "number" ? body : ""
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: [
      "hbs",
      "png",
      "jpg",
      "gif",
      "jpeg",
      "js",
      "htaccess",
      "xml",
    ],
    passthroughFileCopy: true,
  };
};
