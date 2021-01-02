import { getAllBooks } from "../lib/api";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import BookGrid from "../components/BookGrid";
import antilibraryData from "../lib/antilibraryData.js";

export default function Antilibrary({ allBooks }) {
  return (
    <Layout title={"Antilibrary"}>
      <Container>
        <Header pageDescription={"My secret antilibrary—a.k.a. books I plan to read or wish I had read"} />
        <BookGrid books={allBooks} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allBooks = await getAllBooks(antilibraryData);

  return {
    props: { allBooks },
  };
}
