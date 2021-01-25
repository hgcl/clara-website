const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["js", "mdx"],
});

module.exports = {
  images: {
    domains: ["covers.openlibrary.org", "image.tmdb.org"],
  },
};
