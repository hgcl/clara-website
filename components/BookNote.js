import DateFormatter from "../components/date-formatter";
import Popup from "reactjs-popup";
import React, { useState } from "react";
import Link from "../components/link";
import BookTile from "../components/BookTile";
import { ARROW } from "../lib/constants";

export default function BookNote({
  coverUrl,
  title,
  author,
  rating,
  notes,
  review,
  date,
  dateLabel,
  link,
}) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      {review || notes ? (
        <button
          className="text-left"
          aria-label={title}
          onClick={() => setOpen((o) => !o)}
        >
          <BookTile
            coverUrl={coverUrl}
            title={title}
            author={author}
            rating={rating}
            notes={notes}
            review={review}
          />
        </button>
      ) : (
        <div className="text-left">
          <BookTile
            coverUrl={coverUrl}
            title={title}
            author={author}
            rating={rating}
            notes={notes}
            review={review}
          />
        </div>
      )}

      <Popup open={open} onClose={closeModal} className="book">
        <div
          onClick={closeModal}
          className="top-0 right-0 w-screen sm:max-w-screen-sm"
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-8 text-3xl leading-none line"
          >
            &times;
          </button>
          <div onClick={closeModal} className="flex items-center h-screen p-8">
            <div className="text-xl relative w-full md:pr-16">
              <div className="text-center md:text-left mb-8">
                <p className="comment tracking mb-4 md:fixed md:top-6">
                  {review ? "Review" : "Notes"}
                </p>
                <h2 className="text-3xl leading-snug mb-1">{title}</h2>
                <p>by {author}</p>
              </div>
              <p className="mb-8">{review ? review : notes}</p>
              {link && (
                <div className="mb-4">
                  <Link href={link}>Recommendation source&ensp;{ARROW}</Link>
                </div>
              )}
              <p className="text-base text-gray-regular">
                {dateLabel} <DateFormatter dateString={date} />
              </p>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
