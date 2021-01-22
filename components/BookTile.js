import Rating from "./Rating";
import Image from "next/image";
import { STAR } from "../lib/constants";

// TODO Delete BookTile and implement as an arrow function in BookNote directly (see /blog)
export default function BookTile({
  review,
  notes,
  coverUrl,
  title,
  author,
  rating,
}) {
  return (
    <>
      <div className="absolute">
        <div className="relative w-full -top-4 -left-2 text-2xl z-10">
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
    </>
  );
}
