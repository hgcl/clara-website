const withMDX = require("@next/mdx")({ extension: /\.mdx?$/ });

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});

module.exports = {
  images: {
    domains: ["covers.openlibrary.org", "image.tmdb.org"],
  },
};
