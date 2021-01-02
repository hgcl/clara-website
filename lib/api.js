import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
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

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
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
    const { date, isbn, rating, notes } = book;

    // destructure book metadata
    const { title, authors, publish_date, cover } = booksMetadata[
      `ISBN:${isbn}`
    ];

    return {
      title,
      author: authors[0].name,
      date,
      rating,
      publish_date,
      coverUrl: cover ? cover.medium : "/assets/cover.jpg",
      isbn,
      notes,
    };
  });

  return books;
}
