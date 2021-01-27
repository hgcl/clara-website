import MediaTile from "./MediaTile";

export default function MediaGrid({ items, dateLabel, type }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(8rem, 1fr))",
  };
  return (
    <section className="grid gap-y-8 gap-x-4 md:gap-x-5" style={gridStyle}>
      {type === "isBook" &&
        items
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((book) => {
            const {
              date,
              title,
              author,
              rating,
              // publish_date,
              coverUrl,
              isbn,
              notes,
              review,
              link,
            } = book;

            return (
              <article key={isbn}>
                <MediaTile
                  coverUrl={coverUrl}
                  title={title}
                  author={author}
                  rating={rating}
                  notes={notes}
                  review={review}
                  dateLabel={dateLabel}
                  date={date}
                  link={link}
                />
              </article>
            );
          })}
      {type === "isMovie" &&
        items
          .sort(
            (a, b) =>
              new Date(b.date || b.release_date) -
              new Date(a.date || a.release_date)
          )
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
                <MediaTile
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
