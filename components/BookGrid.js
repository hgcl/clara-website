import Rating from "../components/Rating";
import Image from "next/image";
import BookNote from "../components/BookNote";

export default function BookGrid({ books }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(150px, 1fr))",
  };
  return (
    <section className="grid gap-y-8 gap-x-4 md:gap-x-6" style={gridStyle}>
      {books
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((book) => {
          const {
            // date,
            title,
            author,
            rating,
            // publish_date,
            coverUrl,
            isbn,
            notes,
          } = book;

          return (
            <article key={isbn}>
              <BookNote
                trigger={
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
                      <p className="mt-1 text-gray-regular leading-snug">
                        {author}
                      </p>
                      {rating && (
                        <p className="text-gray-regular">
                          <Rating rating={rating} />
                        </p>
                      )}
                    </ul>
                  </button>
                }
              >
                <p className="comment">Notes</p>
                <h2>
                  {title} by {author}
                </h2>
                <p>{notes}</p>
              </BookNote>
            </article>
          );
        })}
    </section>
  );
}
