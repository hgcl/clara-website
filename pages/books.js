import { getAllBooks } from "../lib/api";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import Rating from "../components/Rating";

export default function Books({ allBooks }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(150px, 1fr))",
  };
  return (
    <Layout title={"Books"}>
      <Container>
        <Header
          pageDescription={
            "My library of books, starting with the most recent reads"
          }
        />
        <section className="grid gap-x-6 gap-y-8" style={gridStyle}>
          {/* TODO sort books by date */}
          {allBooks
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((book) => {
              const {
                date,
                title,
                author,
                rating,
                publish_date,
                coverUrl,
                isbn,
                review,
              } = book;

              return (
                <article key={isbn}>
                  <img
                    src={coverUrl}
                    className="object-cover h-64 shadow-2xl"
                  />
                  <ul>
                    <h2 className="mt-4 capitalize text-xl tracking-tight leading-snug">
                      {title}
                    </h2>
                    <p className="mt-1 text-gray-regular leading-snug">
                      {author}
                    </p>
                    <p className="text-gray-regular">
                      <Rating rating={rating} />
                    </p>
                  </ul>
                </article>
              );
            })}
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allBooks = await getAllBooks();

  return {
    props: { allBooks },
  };
}
