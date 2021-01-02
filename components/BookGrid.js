import Rating from "../components/Rating";

export default function BookGrid({ books }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(150px, 1fr))",
  };
  return (
    <section className="grid gap-x-6 gap-y-8" style={gridStyle}>
      {/* TODO sort books by date */}
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
            // notes,
          } = book;

          return (
            <article key={isbn}>
              <img src={coverUrl} className="object-cover h-64 shadow-2xl" />
              <ul>
                <h2 className="mt-4 capitalize text-xl tracking-tight leading-snug">
                  {title}
                </h2>
                <p className="mt-1 text-gray-regular leading-snug">{author}</p>
                <p className="text-gray-regular">
                  <Rating rating={rating} />
                </p>
              </ul>
            </article>
          );
        })}
    </section>
  );
}
