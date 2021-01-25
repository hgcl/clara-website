import BookNote from "./BookNote";

export default function MovieGrid({ movies, dateLabel }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(8rem, 1fr))",
  };
  return (
    <section className="grid gap-y-8 gap-x-4 md:gap-x-5" style={gridStyle}>
      {movies
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((movie) => {
          const {
            coverUrl,
            date,
            notes,
            rating,
            review,
            title,
            tmdb_id,
          } = movie;
          return (
            <article key={tmdb_id}>
              <BookNote
                coverUrl={coverUrl}
                title={title}
                rating={rating}
                notes={notes}
                review={review}
                dateLabel={dateLabel}
                date={date}
                // link={link}
              />
            </article>
          );
        })}
    </section>
  );
}
