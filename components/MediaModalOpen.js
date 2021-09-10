import { useEffect } from "react";
import Rating from "./Rating";
import DateFormatter from "./date-formatter";
import { CLOSE, ARROW } from "../lib/constants";
import Link from "./link";

const MediaModalOpen = ({
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

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });
  return (
    open && (
      <div
        onClick={onClose}
        className="h-review z-40 absolute -top-8 left-0 w-screen h-full"
      >
        <div
          className="overflow-y-auto fixed top-0 left-0 h-screen w-screen md:max-w-2xl m-auto bg-gray-darkest bg-opacity-95 text-gray-lightest"
          onClick={onClose}
        >
          <div className="sticky ml-auto w-12">
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute text-4xl top-3"
            >
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
              {rating && (
                <p className="text-gray-regular mb-4">
                  <Rating rating={rating} pRating height="18" />
                </p>
              )}
              {link && (
                <div className="mb-2 comment">
                  <Link href={link}>Recommendation source&ensp;{ARROW}</Link>
                </div>
              )}
              <p className="text-base text-gray-regular">
                {dateLabel} <DateFormatter dateString={date} dtPublished />
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MediaModalOpen;
