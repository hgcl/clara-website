// 'ISBN:052562077X': {
//   url: 'https://openlibrary.org/books/OL30551916M/Gods_of_Jade_and_Shadow',
//   key: '/books/OL30551916M',
//   title: 'Gods of Jade and Shadow',
//   authors: [ [Object] ],
//   number_of_pages: 384,
//   identifiers: { isbn_10: [Array], isbn_13: [Array], openlibrary: [Array] },
//   publishers: [ [Object], [Object] ],
//   publish_date: 'Feb 18, 2020',
//   subjects: [ [Object] ],
//   cover: {
//     small: 'https://covers.openlibrary.org/b/id/10471547-S.jpg',
//     medium: 'https://covers.openlibrary.org/b/id/10471547-M.jpg',
//     large: 'https://covers.openlibrary.org/b/id/10471547-L.jpg'
//   }
// },

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
      `ISBN:${isbn}` // with isbn previously destructured
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
