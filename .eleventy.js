import CleanCSS from "clean-css";
import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";

export default function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", (code) => {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(handlebarsPlugin);

  eleventyConfig.addShortcode("removeWhitespaces", (value) => value.replace(/\s/g, ""));
  eleventyConfig.addShortcode("getActive", (arg1, arg2) =>
    arg1 == arg2 ? "navigation__item--active" : "",
  );
  eleventyConfig.addShortcode("add", (a, b) => a + b);
  eleventyConfig.addShortcode("ifIsNumber", (value, body) =>
    typeof value === "number" ? body : "",
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["hbs", "png", "jpg", "gif", "jpeg", "js", "htaccess", "xml"],
  };
}
