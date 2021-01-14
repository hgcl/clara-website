import Rating from "../components/Rating";
import Image from "next/image";
import DateFormatter from "../components/date-formatter";
import Popup from "reactjs-popup";
import React, { useState } from "react";
import Link from "../components/link";
import { ARROW, STAR } from "../lib/constants";

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
      <button onClick={() => setOpen((o) => !o)} className="text-left">
        <div className="absolute">
          <div className="relative w-full -top-4 -left-2 text-2xl z-40">
            {(review || notes) && `${STAR}`}
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
            {review || notes ? (
              <div className="text-xl relative w-full md:pr-16">
                <div className="text-center md:text-left mb-8">
                  <div className="comment tracking mb-4 md:fixed md:top-6">
                    {review ? "Review" : "Notes"}
                  </div>
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
