import { getAllMovies } from "../lib/getAllMovies";
import watchedData from "../data/watchedData.js";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import MediaTile from "../components/MediaTile";

export default function Movies({ allMovies }) {
  const [reviewFilter, setReview] = useState(false);
  const toggleReviewFilter = () => setReview((value) => !value);

  return (
    <Layout title={"Movies"} color="green">
      <Container>
        <Header pageDescription={"Get the popcorn ready"} />
        {/* TODO replace checkbox by toggle */}
        <Checkbox
          value={reviewFilter}
          onChange={toggleReviewFilter}
          label="Reviews only"
        />
        <MediaGrid>
          {allMovies
            // Review filter
            .filter(
              (movie) =>
                reviewFilter
                  ? movie.review.length > 2 && movie.review // 1. filter exists + has a review => show reviews only
                  : movie // 2. not true: show all movies
            )
            .sort(
              (a, b) =>
                new Date(b.date || b.release_date) -
                new Date(a.date || a.release_date)
            )
            .map((movie) => {
              const {
                coverUrl,
                date,
                notes,
                rating,
                release_date,
                review,
                title,
                tmdb_id,
              } = movie;
              return (
                <article key={tmdb_id}>
                  <MediaTile
                    // link={link}
                    coverUrl={coverUrl}
                    date={date || release_date}
                    dateLabel="Watched on"
                    notes={notes}
                    rating={rating}
                    review={review}
                    title={title}
                  />
                </article>
              );
            })}
        </MediaGrid>
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
