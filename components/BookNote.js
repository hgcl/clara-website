import Rating from "../components/Rating";
import Image from "next/image";
import DateFormatter from "../components/date-formatter";
import Popup from "reactjs-popup";
import React, { useState } from "react";

export default function BookNote({
  coverUrl,
  title,
  author,
  rating,
  notes,
  date,
  dateLabel,
}) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen((o) => !o)} className="text-left">
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
          <p className="mt-1 text-gray-regular leading-snug">{author}</p>
          {rating && (
            <p className="text-gray-regular">
              <Rating rating={rating} />
            </p>
          )}
        </ul>
      </button>
      <Popup open={open} onClose={closeModal} className="book">
        {notes ? (
          <div onClick={closeModal} className="flex items-center p-8 h-screen">
            <div className="text-xl relative">
              <div className="text-center md:text-left mb-8">
                <div className="comment mb-4 md:fixed md:top-6">Notes</div>
                <h2 className="text-3xl leading-snug mb-1">{title}</h2>
                <p>by {author}</p>
              </div>
              <p className="mb-6">{notes}</p>
              <p className="text-base text-gray-regular">
                {dateLabel} <DateFormatter dateString={date} />
              </p>
            </div>
          </div>
        ) : (
          <p className="comment text-xl">
            There isn’t any notes for this book.
          </p>
        )}
      </Popup>
    </>
  );
}
