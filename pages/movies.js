import { getAllMovies } from "../lib/getAllMovies";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import Link from "../components/link";
import watchedData from "../data/watchedData.js";

export default function Movies({ allMovies }) {
  return (
    <Layout title={"Movies"}>
      <Container>
        <Header pageDescription={"Get the popcorn ready"} />
        <div>
          {allMovies.title} {allMovies.release_date}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allMovies = await getAllMovies(watchedData);

  return {
    props: { allMovies },
  };
}
