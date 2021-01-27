import { getAllBooks } from "../lib/getAllBooks";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import Link from "../components/link";
import booksData from "../data/booksData.js";

export default function Books({ allBooks }) {
  return (
    <Layout title={"Books"}>
      <Container>
        <Header
          pageDescription={
            <>
              Here's what I've been reading. Also check out my{" "}
              <Link href="/antilibrary">antilibrary</Link>.
            </>
          }
        />
        <MediaGrid type="isBook" items={allBooks} dateLabel="Read on" />
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
