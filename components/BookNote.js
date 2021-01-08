import Rating from "../components/Rating";
import Image from "next/image";
import Popup from "reactjs-popup";

export default function BookNote({ coverUrl, title, author, rating, notes }) {
  const trigger = (
    <button className="text-left">
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
  );
  return (
    <Popup className="book" modal trigger={trigger}>
      {notes ? (
        <div className="p-8">
          <div className="text-xl relative">
            <div className="text-center md:text-left mb-8">
              <div className="comment mb-4 md:fixed md:top-6">Notes</div>
              <h2 className="text-3xl leading-snug mb-1">{title}</h2>
              <p>by {author}</p>
            </div>
            <p>{notes}</p>
          </div>
        </div>
      ) : (
        <p className="comment text-xl">There isn’t any notes for this book.</p>
      )}
    </Popup>
  );
}
