import React, { useState } from "react";
import DateFormatter from "../components/date-formatter";
import Rating from "../components/Rating";
import Image from "next/image";
import NoteIcon from "../public/icons/NoteIcon";
import MediaModalOpen from "./MediaModalOpen";

export default function MediaTile({
  author,
  coverUrl,
  date,
  dateLabel,
  link,
  notes,
  rating,
  review,
  status,
  title,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const styles = (
    <style jsx>{`
      button {
        width: 100%;
        background-color: transparent;
      }
    `}</style>
  );
  return (
    <>
      {review || notes ? (
        // A review or note exists => can be opened
        <button aria-label={title} onClick={() => setModalOpen((o) => !o)}>
          {styles}
          <MediaModalClosed
            author={author}
            coverUrl={coverUrl}
            date={date}
            notes={notes}
            rating={rating}
            review={review}
            status={status}
            title={title}
          />
        </button>
      ) : (
        <div>
          <MediaModalClosed
            date={date}
            review={review}
            author={author}
            coverUrl={coverUrl}
            notes={notes}
            rating={rating}
            status={status}
            title={title}
          />
        </div>
      )}
      <MediaModalOpen
        open={modalOpen}
        onClose={() => setModalOpen(false)}
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

const MediaModalClosed = ({
  author,
  coverUrl,
  date,
  notes,
  rating,
  review,
  status,
  title,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false); // Tooltip modal hook
  const unfinishedBooks = status === "unfinished" && "opacity-30";
  const styles = (
    <style jsx>{`
      .image-wrapper {
        position: relative;
      }
      .tile-image {
        width: 100%;
        height: 12rem;
      }
      .custom-img {
        object-fit: cover;
        width: 100% !important;
        position: relative !important;
        height: 12rem !important;
        border-radius: 0.25rem;
      }
      .tile-image > div:first-of-type {
        position: unset !important;
      }

      /* Appears on hover */
      .tile-hover {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .tile-hover:hover {
        opacity: 1;
        background-color: var(--color-bg-transparent);
        border-radius: 0.2rem;
      }
      .tile-hover h2 {
        font-size: var(--font-size-h4);
        line-height: var(--line-height-h1);
      }
      .tile-hover > * {
        color: var(--color-text-reversed);
        text-align: center;
        padding: 0.5rem;
      }

      /* Info below tile */
      .tile-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0.5rem;
        font-family: var(--font-family-body);
        font-size: calc(
          var(--font-size) / var(--font-ratio) / var(--font-ratio)
        );
        color: var(--color-text-default);
      }
      .tile-info > div {
        display: flex;
        flex-direction: row;
      }
      .tile-info .rating {
        margin-right: 0.25rem;
      }
      .tile-info .date {
        white-space: nowrap;
      }

      /* Tooltip */
      .tooltip-container {
        position: relative;
      }
      .tooltip-container span {
        position: absolute;
        top: -1.4rem;
        left: -0.6rem;
        background-color: var(--color-bg-transparent);
        color: var(--color-text-reversed);
        padding: 0.2rem 0.3rem;
        border-radius: 0.25rem;
      }

      /* Dark mode */
      @media (prefers-color-scheme: dark) {
        .tile-hover > * {
          color: var(--color-text-default);
        }
        .tooltip-container span {
          color: var(--color-text-default);
        }
      }
    `}</style>
  );
  return (
    <>
      <div className="image-wrapper">
        <div className="tile-image">
          {styles}
          <Image
            alt={title}
            src={coverUrl}
            className={`custom-img ${unfinishedBooks}`}
            layout="fill"
          />
          <div className="tile-hover">
            <h2>{title}</h2>
            <p>{author && author}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="tile-info">
          <div>
            {rating && <Rating rating={rating} />}
            <span
              onMouseEnter={() => setTooltipOpen(true)}
              onMouseLeave={() => setTooltipOpen(false)}
            >
              {tooltipOpen && (
                <div className="tooltip-container">
                  <span>{review ? "Review" : "Note"}</span>
                </div>
              )}
              {(review || notes) && <NoteIcon />}
            </span>
          </div>
          <div className="date">
            <DateFormatter shortDate dateString={date} />
          </div>
        </div>
      </div>
    </>
  );
};
