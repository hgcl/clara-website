import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");
const recipesDirectory = join(process.cwd(), "_recipes");

export function getPostSlugs(isRecipe) {
  return fs.readdirSync(isRecipe ? recipesDirectory : postsDirectory);
}

export function getPostBySlug(slug, fields = [], isRecipe) {
  // 1. Separate filename from `.mdx`
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(
    isRecipe ? recipesDirectory : postsDirectory,
    `${realSlug}.mdx`
  );
  // 2. Read file contents and parse into `data` (front matter) and `content` (article itself)
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields = [], isRecipe) {
  // 1. Get Markdown files from correct folder and save in `slugs`
  const slugs = getPostSlugs(isRecipe);
  // 2. Map and sort posts
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, isRecipe))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}
