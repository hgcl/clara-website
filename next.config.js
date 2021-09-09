const smartypants = require("@silvenon/remark-smartypants");
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [smartypants],
    rehypePlugins: [],
  },
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});

module.exports = {
  images: {
    domains: ["covers.openlibrary.org", "image.tmdb.org"],
  },
  async rewrites() {
    return [
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ];
  },
};
