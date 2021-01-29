import { useState } from "react";
import MediaTile from "./MediaTile";
import { getYear } from "date-fns";
import ArrowIcon from "../public/icons/ArrowIcon";
import Dropdown from "./Dropdown";

export default function MediaGrid({ items, dateLabel, type }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(8rem, 1fr))",
  };
  // Mediafilters
  const [yearFilter, setYear] = useState(0);
  const [open, setOpen] = useState(false);
  const closeDropdown = () => setOpen(false);

  return (
    <>
      <label className="relative z-20">
        <button
          className="z-20 flex flex-row items-center w-20 mx-2 mt-1"
          aria-label="Select Year"
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={() => setOpen((o) => !o)}
        >
          <span className="pr-3">{yearFilter === 0 ? "Year" : yearFilter}</span>
          <span className="w-full">
            <ArrowIcon className="transform rotate-90" />
          </span>
        </button>
      </label>
      <Dropdown open={open} closeDropdown={closeDropdown} setYear={setYear} />
      <section
        className="grid gap-x-1 xs:gap-x-4 gap-y-8 mt-6"
        style={gridStyle}
      >
        {type === "isBook" &&
          items
            .filter((book) =>
              yearFilter
                ? getYear(new Date(book.date)) === parseInt(yearFilter)
                : book
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
              yearFilter
                ? getYear(new Date(movie.date)) === parseInt(yearFilter)
                : movie
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
