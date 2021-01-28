import { useState } from "react";
import MediaTile from "./MediaTile";
import { getYear } from "date-fns";

// Dropdown:

export default function MediaGrid({ items, dateLabel, type }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(8rem, 1fr))",
  };
  // Mediafilters
  const [yearFilter, setYear] = useState(0);
  const tagStyle = "pt-1 pb-2 px-4 mr-4 all-small-caps border-1 rounded-sm";
  const inactiveTag = "border-gray-regular text-gray-regular";
  const activeTag = "border-accent";

  return (
    <>
      <section className="mb-16">
        <button
          className={`${yearFilter ? inactiveTag : activeTag} ${tagStyle}`}
          onClick={() => setYear(0)}
        >
          All Books
        </button>
        <button
          className={`${
            yearFilter === 2021 ? activeTag : inactiveTag
          } ${tagStyle}`}
          onClick={() => setYear(2021)}
        >
          2021
        </button>
        <button
          className={`${
            yearFilter === 2020 ? activeTag : inactiveTag
          } ${tagStyle}`}
          onClick={() => setYear(2020)}
        >
          2020
        </button>
      </section>
      <section className="grid gap-x-1 xs:gap-x-4 gap-y-8" style={gridStyle}>
        {type === "isBook" &&
          items
            .filter((book) =>
              yearFilter ? getYear(new Date(book.date)) === yearFilter : book
            )
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((book) => {
              const {
                author,
                coverUrl,
                date,
                isbn,
                link,
                notes,
                rating,
                review,
                title,
              } = book;

              return (
                <article key={isbn}>
                  <MediaTile
                    author={author}
                    coverUrl={coverUrl}
                    date={date}
                    dateLabel={dateLabel}
                    link={link}
                    notes={notes}
                    rating={rating}
                    review={review}
                    title={title}
                  />
                </article>
              );
            })}
        {type === "isMovie" &&
          items
            .filter((movie) =>
              yearFilter ? getYear(new Date(movie.date)) === yearFilter : movie
            )
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
                release_date,
                review,
                title,
                tmdb_id,
              } = movie;
              return (
                <article key={tmdb_id}>
                  <MediaTile
                    // link={link}
                    coverUrl={coverUrl}
                    date={date || release_date}
                    dateLabel={dateLabel}
                    notes={notes}
                    rating={rating}
                    review={review}
                    title={title}
                    type={type}
                  />
                </article>
              );
            })}
      </section>
    </>
  );
}
