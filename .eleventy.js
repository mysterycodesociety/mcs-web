module.exports = function(eleventyConfig) {
  // Layouts
  // Add layout names here to enable referencing them by just their file name
  // instead of the entire path
  eleventyConfig.addLayoutAlias('default', `layouts/default.liquid`);

  // Passthrough copy
  // Just copy this content into the _site directory
  eleventyConfig.addPassthroughCopy({'assets': 'assets' });
};
