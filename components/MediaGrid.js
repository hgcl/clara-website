import { useState } from "react";
import MediaTile from "./MediaTile";
import { getYear } from "date-fns";
import { motion } from "framer-motion";
import ArrowIcon from "../public/icons/ArrowIcon";

export default function MediaGrid({ items, dateLabel, type }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(8rem, 1fr))",
  };
  // Mediafilters
  const [yearFilter, setYear] = useState(0);
  const [open, setOpen] = useState(false);
  const closeDropdown = () => setOpen(false);

  const dropdownOption =
    "w-full h-12 bg-black bg-opacity-90 px-2 text-left hover:bg-opacity-100 hover:text-accent focus:bg-opacity-100 focus:text-accent";
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        closeDropdown();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return (
    <>
      {/* https://codepen.io/LukyVj/pen/meJqor */}
      <label className="relative z-20">
        <button
          className="z-20 flex flex-row items-center w-20 mb-3 mx-2 mt-1"
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
      {open && (
        <motion.div
          className="relative"
          exit={{ opacity: 0 }}
          onMouseLeave={() => closeDropdown()}
        >
          <div className="z-10 absolute flex flex-col top-0 left-0 rounded-t w-24 h-full bg-black bg-opacity-90 -mt-10 pt-8">
            <button
              role="option"
              id="year_all"
              className={`${dropdownOption} active`}
              aria-selected="true"
              onClick={() => {
                setYear(0);
                closeDropdown();
              }}
            >
              All
            </button>
            <button
              role="option"
              id="year_2021"
              className={`${dropdownOption}`}
              aria-selected="false"
              onClick={() => {
                setYear(2021);
                closeDropdown();
              }}
            >
              2021
            </button>
            <button
              role="option"
              id="year_2020"
              className={`${dropdownOption} rounded-b pb-2`}
              aria-selected="false"
              onClick={() => {
                setYear(2020);
                closeDropdown();
              }}
            >
              2020
            </button>
          </div>
        </motion.div>
      )}

      <section className="grid gap-x-1 xs:gap-x-4 gap-y-8" style={gridStyle}>
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
