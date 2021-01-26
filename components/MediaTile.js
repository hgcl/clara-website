import Rating from "./Rating";
import Image from "next/image";
import { STAR } from "../lib/constants";
import Logo from "../public/icons/Logo";

export default function MediaTile({
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
        <div className="z-10 relative w-full -top-1 -left-1 text-2xl transform rotate-45">
          {(review || notes) && (
            <Logo className="fill-current text-white w-3 opacity-60" />
          )}
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
        <p className="mt-1 text-gray-regular leading-snug">
          {author && author}
        </p>
        {rating && (
          <p className="text-gray-regular">
            <Rating rating={rating} />
          </p>
        )}
      </ul>
    </>
  );
}
