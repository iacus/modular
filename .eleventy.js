const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, klass, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600, 1000, 1500],
    formats: ["webp", "png", "jpeg"],
    outputDir: "./dist/images",
    urlPath: "/images/",
    useCache: true
  });

  let imageAttributes = {
    class: klass,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (config) {

  config.addNunjucksAsyncShortcode("image", imageShortcode);

   config.addCollection('posts', collection => {
      return collection.getFilteredByGlob('_site/posts/*.md')
   });

   return {
      dir: {
         input: "_site",
         includes: "_templates",
         data: "_data",
         output: "dist"
      },
      templateFormats: ["html", "md", "njk"],
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk"
   }
}
