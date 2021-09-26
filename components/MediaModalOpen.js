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

  const styles = (
    <style jsx>{`
      .review-wrapper {
        z-index: 40;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
      }
      .close-review {
        z-index: 50;
        cursor: pointer;
        position: fixed;
        top: var(--padding-sides-default);
        right: var(--padding-sides-default);
        width: 1.5rem;
        font-size: 1.5rem;
        line-height: 0.5;
        color: var(--color-text-reversed);
      }
      .review-background {
        position: fixed;
        background-color: var(--color-bg-transparent);
        width: inherit;
        height: inherit;
      }
      .review-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: inherit;
        margin: 0 auto;
        padding-left: var(--padding-sides-default);
        padding-right: var(--padding-sides-default);
        max-width: 40rem;
        color: var(--color-text-reversed);
      }
      .review-text > .type {
        position: fixed;
        top: var(--padding-sides-default);
        font-family: "SourceSansProSmallCaps";
        font-variant-caps: all-small-caps;
        letter-spacing: 0.02rem;
      }
      .review-text > .e-content {
        margin: 1.5rem 0;
      }
      .review-text > .date {
        margin-top: 0.5rem;
      }

      /* Dark mode */
      @media (prefers-color-scheme: dark) {
        .review-text {
          color: var(--color-text-default);
        }
        .close-review {
          color: var(--color-text-default);
        }
      }
    `}</style>
  );
  return (
    open && (
      <div onClick={onClose} role="button" className="review-wrapper h-review">
        {styles}
        <button onClick={onClose} aria-label="Close" className="close-review">
          {CLOSE}
        </button>
        <div className="review-background" onClick={onClose}>
          <div role="button" onClick={onClose} className="review-text">
            <p className="type">{review ? "Review" : "Notes"}</p>
            <h2 className="p-name">{title}</h2>
            {author && <p>by {author}</p>}
            <p className="e-content">{review ? review : notes}</p>
            {rating && (
              <p>
                <Rating rating={rating} pRating height="18" />
              </p>
            )}
            {link && (
              <Link href={link}>Recommendation source&ensp;{ARROW}</Link>
            )}
            <p className="date">
              {dateLabel} <DateFormatter dateString={date} dtPublished />
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default MediaModalOpen;
