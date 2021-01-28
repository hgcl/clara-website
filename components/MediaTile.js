import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLOSE, ARROW } from "../lib/constants";
import Link from "./link";
import DateFormatter from "./date-formatter";
import Rating from "./Rating";
import Image from "next/image";
import NoteIcon from "../public/icons/NoteIcon";

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
          className="text-left"
          aria-label={title}
          onClick={() => setOpen((o) => !o)}
        >
          <ClosedTile
            author={author}
            coverUrl={coverUrl}
            date={date}
            notes={notes}
            rating={rating}
            review={review}
            title={title}
          />
        </button>
      ) : (
        <div className="text-left">
          <ClosedTile
            date={date}
            review={review}
            author={author}
            coverUrl={coverUrl}
            notes={notes}
            rating={rating}
            title={title}
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

const ClosedTile = ({
  author,
  coverUrl,
  date,
  notes,
  rating,
  review,
  title,
}) => {
  return (
    <>
      <div className="relative transition duration-200 transform hover:scale-101 hover:shadow-xl hover:-translate-y-1">
        <Image
          src={coverUrl}
          className="object-cover shadow-2xl rounded"
          height="312rem"
          width="200rem"
        />
        <motion.div
          initial={{ opacity: "0" }}
          whileHover={{ opacity: "0.9" }}
          className="z-10 bg-black rounded-sm absolute w-full h-full left-0 top-0 flex flex-col justify-center px-4 py-4 text-center"
        >
          <h2 className="text-lg leading-snug mb-2">{title}</h2>
          <p className="text-gray-regular leading-snug">{author && author}</p>
        </motion.div>
      </div>
      <div>
        <div className="mt-2 flex flex-row">
          <div className="flex flex-row items-center">
            {rating && <Rating rating={rating} />}
            <span>
              {(review || notes) && <NoteIcon className="text-white ml-2" />}
            </span>
          </div>
          <div className="w-full text-xs text-gray-regular text-right">
            <DateFormatter shortDate dateString={date} />
          </div>
        </div>
      </div>
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
