import { useState } from "react";
import MediaTile from "./MediaTile";
import { getYear } from "date-fns";
import DropdownButton from "./DropdownButton";

export default function MediaGrid({ items, dateLabel, type }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    gridTemplateColumns: "repeat(auto-fill, minmax(8rem, 1fr))",
  };
  // Year media dropdown:
  const [yearFilter, setYear] = useState(0);
  const yearDropdown = [
    { name: "All", value: 0 },
    { name: "2021", value: 2021 },
    { name: "2020", value: 2020 },
    { name: "2019", value: 2019 },
  ];
  // Rating media dropdown:
  const [ratingFilter, setRating] = useState(0);
  const ratingDropdown = [
    { name: "All", value: 0 },
    { name: "5", value: 5 },
    { name: "4", value: 4 },
    { name: "3", value: 3 },
  ];

  return (
    <>
      <div className="flex flex-row">
        <DropdownButton
          title="Year"
          filter={yearFilter}
          setHook={setYear}
          itemsArray={yearDropdown}
          marginRight="mr-6"
        />
        <DropdownButton
          title="Rating"
          filter={ratingFilter}
          setHook={setRating}
          itemsArray={ratingDropdown}
        />
      </div>
      <section
        className="grid gap-x-1 xs:gap-x-4 gap-y-8 mt-6"
        style={gridStyle}
      >
        {type === "isMovie" &&
          items
            // Year filter
            .filter((movie) =>
              yearFilter ? getYear(new Date(movie.date)) === yearFilter : movie
            )
            // Rating filter
            .filter((movie) =>
              ratingFilter ? movie.rating === ratingFilter : movie
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
        {type === "isBook" &&
          items
            // Year filter
            .filter((book) =>
              yearFilter ? getYear(new Date(book.date)) === yearFilter : book
            )
            // Rating filter
            .filter((book) =>
              ratingFilter ? book.rating === ratingFilter : book
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
      </section>
    </>
  );
}
