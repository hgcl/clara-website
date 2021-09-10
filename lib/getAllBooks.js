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
    // destructure local data
    const {
      // date,
      isbn,
      // rating,
      // notes, review, link,
    } = book;

    // destructure book metadata from API
    const {
      // title,
      // authors,
      publish_date,
      // cover
    } =
      booksMetadata[
        `ISBN:${isbn}` // with isbn previously destructured
      ];

    return {
      //   title,
      //   author: authors[0].name,
      //   date,
      //   rating: rating || null,
      publish_date: publish_date || null,
      //   coverUrl: cover ? cover.medium : "/assets/cover.jpg",
      isbn,
      //   notes: notes || "",
      //   review: review || "",
      //   link: link || null,
    };
  });

  // console.log(books);
  return books;
}
