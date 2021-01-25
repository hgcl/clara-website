import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLOSE } from "../lib/constants";
import BookTile from "./BookTile";
import Link from "./link";
import DateFormatter from "./date-formatter";

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
          className="text-left transition duration-300 transform hover:-translate-y-4"
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
      <BookModal
        open={open}
        onClose={closeModal}
        title={title}
        author={author}
        notes={notes}
        review={review}
        date={date}
        dateLabel={dateLabel}
      />
    </>
  );
}

const BookModal = ({
  open,
  onClose,
  title,
  author,
  notes,
  review,
  date,
  dateLabel,
  link,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          exit={{ opacity: 0 }}
          className="z-40 absolute top-0 left-0 w-screen h-screen"
          onClick={onClose}
        >
          <div
            className="fixed top-0 left-0 h-screen w-screen md:max-w-2xl m-auto bg-black bg-opacity-90"
            onClick={onClose}
          >
            <div className="sticky ml-auto w-12">
              <button aria-label="Close" className="absolute text-4xl top-3">
                {CLOSE}
              </button>
            </div>
            <div onClick={onClose} className="flex items-center h-screen p-8">
              <div className="text-xl relative w-full">
                <div className="text-center md:text-left mb-6">
                  <p className="comment tracking mb-4 md:fixed md:top-6">
                    {review ? "Review" : "Notes"}
                  </p>
                  <h2 className="text-3xl leading-snug mb-1">{title}</h2>
                  {author && <p>by {author}</p>}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
