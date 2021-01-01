import { getAllBooks } from "../lib/api";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";

export default function Books({ allBooks }) {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          <div className="container">
            {allBooks.map((book) => {
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
                <>
                  <img src={coverUrl} />
                  <ul className="book">
                    <li>{date}</li>
                    <li>{title}</li>
                    <li>{author}</li>
                    <li>{rating}</li>
                    <li>{publish_date}</li>
                    <li>{isbn}</li>
                    <li>{review}</li>
                  </ul>
                </>
              );
            })}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allBooks = await getAllBooks();

  return {
    props: { allBooks },
  };
}
