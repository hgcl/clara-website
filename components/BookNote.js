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
            {notes ? (
              <div className="text-xl relative w-full md:pr-16">
                <div className="text-center md:text-left mb-8">
                  <div className="comment tracking mb-4 md:fixed md:top-6">
                    Notes
                  </div>
                  <h2 className="text-3xl leading-snug mb-1">{title}</h2>
                  <p>by {author}</p>
                </div>
                <p className="mb-6">{notes}</p>
                <p className="text-base text-gray-regular">
                  {dateLabel} <DateFormatter dateString={date} />
                </p>
              </div>
            ) : (
              <div className="relative w-full">
                <div className="text-center text-xl comment">
                  <p>There isn’t any notes for this book.</p>
                </div>
              </div>
            )}{" "}
          </div>
        </div>
      </Popup>
    </>
  );
}
