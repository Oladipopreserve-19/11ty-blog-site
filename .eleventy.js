const { DateTime } = require("luxon");

module.exports = function (eleventyconfig) {
  eleventyconfig.addPassthroughCopy("./src/style.css");
  eleventyconfig.addPassthroughCopy("./src/assets");

  eleventyconfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
