import { getAllMovies } from "../lib/getAllMovies";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MovieGrid from "../components/MovieGrid";
import watchedData from "../data/watchedData.js";

export default function Movies({ allMovies }) {
  return (
    <Layout title={"Movies"}>
      <Container>
        <Header pageDescription={"Get the popcorn ready"} />
        <MovieGrid movies={allMovies} dateLabel="Watched on" />
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
