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
          {allMovies
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((allMovies) => {
              const { tmdb_id, title, release_date, poster_path } = allMovies;
              return (
                <article key={tmdb_id}>
                  {title}
                  {poster_path}
                </article>
              );
            })}
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
