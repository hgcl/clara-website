import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLOSE, ARROW } from "../lib/constants";
import Link from "./link";
import DateFormatter from "./date-formatter";
import Rating from "./Rating";
import Image from "next/image";
import Logo from "../public/icons/Logo";

export default function MediaTile({
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
          <ClosedTile
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
          <ClosedTile
            coverUrl={coverUrl}
            title={title}
            author={author}
            rating={rating}
            notes={notes}
            review={review}
          />
        </div>
      )}
      <OpenModal
        open={open}
        onClose={closeModal}
        title={title}
        author={author}
        notes={notes}
        review={review}
        date={date}
        dateLabel={dateLabel}
        rating={rating}
        link={link}
      />
    </>
  );
}

const ClosedTile = ({ review, notes, coverUrl, title, author, rating }) => {
  return (
    <>
      <div className="absolute">
        <div className="z-10 relative w-full -top-1 -left-1 text-2xl transform rotate-45">
          {(review || notes) && (
            <Logo className="fill-current text-white w-3 opacity-60" />
          )}
        </div>
      </div>
      <Image
        src={coverUrl}
        className="object-cover shadow-2xl"
        height="312rem"
        width="200rem"
      />
      <ul>
        <h2 className="mt-4 capitalize text-xl tracking-tight leading-snug">
          {title}
        </h2>
        <p className="mt-1 text-gray-regular leading-snug">
          {author && author}
        </p>
        {rating && (
          <p className="text-gray-regular">
            <Rating rating={rating} />
          </p>
        )}
      </ul>
    </>
  );
};

const OpenModal = ({
  open,
  onClose,
  title,
  author,
  notes,
  review,
  rating,
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
          className="h-review z-40 absolute top-0 left-0 w-screen h-screen"
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
                  <h2 className="p-name text-3xl leading-snug mb-1">{title}</h2>
                  {author && <p>by {author}</p>}
                </div>
                <p className="e-content mb-8">{review ? review : notes}</p>
                {link && (
                  <div className="mb-4 comment">
                    <Link href={link}>Recommendation source&ensp;{ARROW}</Link>
                  </div>
                )}
                {rating && (
                  <p className="text-gray-regular mb-4">
                    <Rating rating={rating} pRating />
                  </p>
                )}
                <p className="text-base text-gray-regular">
                  {dateLabel} <DateFormatter dateString={date} dtPublished />
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
