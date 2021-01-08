import BookNote from "../components/BookNote";

export default function BookGrid({ books }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(150px, 1fr))",
  };
  return (
    <section className="grid gap-y-8 gap-x-4 md:gap-x-6" style={gridStyle}>
      {books
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((book) => {
          const {
            // date,
            title,
            author,
            rating,
            // publish_date,
            coverUrl,
            isbn,
            notes,
          } = book;

          return (
            <article key={isbn}>
              <BookNote
                coverUrl={coverUrl}
                title={title}
                author={author}
                rating={rating}
                notes={notes}
              />
            </article>
          );
        })}
    </section>
  );
}
