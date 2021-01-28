import Rating from "./Rating";
import DateFormatter from "./date-formatter";
import { motion, AnimatePresence } from "framer-motion";
import { CLOSE, ARROW } from "../lib/constants";
import Link from "./link";

const OpenMediaModal = ({
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpenMediaModal;
