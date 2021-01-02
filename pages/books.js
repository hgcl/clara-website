import { getAllBooks } from "../lib/api";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import BookGrid from "../components/BookGrid";
import booksData from "../lib/booksData.js";

export default function Books({ allBooks }) {
  return (
    <Layout title={"Books"}>
      <Container>
        <Header
          pageDescription={
            "My library of books, starting with the most recent reads"
          }
        />
        <BookGrid books={allBooks} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allBooks = await getAllBooks(booksData);

  return {
    props: { allBooks },
  };
}
