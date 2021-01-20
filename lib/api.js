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
  // console.log(fullPath);
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
  // console.log(items);
  return items;
}

export function getAllPosts(fields = [], isRecipe) {
  // 1. Get Markdown files from correct folder and save in `slugs`
  const slugs = getPostSlugs(isRecipe);
  console.log(slugs);
  // 2. Map and sort posts
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, isRecipe))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}

export async function getAllBooks(booksJson) {
  // 1. get isbns from json
  // construct sequence of ISBNs for open library API call
  const isbnSequence = booksJson.reduce((acc, cur) => {
    const curIsbn = cur.isbn;
    return `${acc && `${acc},`}ISBN:${curIsbn}`;
  }, "");

  // 2. hit openlibrary API
  // fetch books metadata
  const response = await fetch(
    `https://openlibrary.org/api/books?bibkeys=${isbnSequence}&format=json&jscmd=data`
  );
  const booksMetadata = await response.json();

  // 3. return right shape for books
  const books = booksJson.map((book) => {
    // destructure record data
    const { date, isbn, rating, notes, review, link } = book;

    // destructure book metadata
    const { title, authors, publish_date, cover } = booksMetadata[
      `ISBN:${isbn}`
    ];

    return {
      title,
      author: authors[0].name,
      date,
      rating: rating || null,
      publish_date: publish_date || null,
      coverUrl: cover ? cover.medium : "/assets/cover.jpg",
      isbn,
      notes: notes || null,
      review: review || null,
      link: link || null,
    };
  });

  return books;
}
