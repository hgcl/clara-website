import React, { useState } from "react";
import { motion } from "framer-motion";
import DateFormatter from "./date-formatter";
import Rating from "./Rating";
import Image from "next/image";
import NoteIcon from "../public/icons/NoteIcon";
import OpenMediaModal from "./OpenMediaModal";

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
      <OpenMediaModal
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
