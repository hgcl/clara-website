import { getAllMovies } from "../lib/getAllMovies";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import watchedData from "../data/watchedData.js";

export default function Movies({ allMovies }) {
  return (
    <Layout title={"Movies"}>
      <Container>
        <Header pageDescription={"Get the popcorn ready"} />
        <MediaGrid type="isMovie" items={allMovies} dateLabel="Watched on" />
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
