module.exports = function(eleventyConfig) {
  // Pass through CSS and images
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  
  // Ignore the base template from being built as a page
  eleventyConfig.ignores.add("src/_includes/**");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
