import { getAllMovies } from "../lib/getAllMovies";
import watchedData from "../data/watchedData.js";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import { getYear } from "date-fns";
import { useState } from "react";
import DropdownButton from "../components/DropdownButton";
import MediaTile from "../components/MediaTile";
import { yearDropdown, ratingDropdown } from "../lib/mediaFilters";

export default function Movies({ allMovies }) {
  const [yearFilter, setYear] = useState(0);
  const [ratingFilter, setRating] = useState(0);

  return (
    <Layout title={"Movies"}>
      <Container>
        <Header pageDescription={"Get the popcorn ready"} />
        <div className="flex flex-row">
          <DropdownButton
            title="Year"
            filter={yearFilter}
            setHook={setYear}
            itemsArray={yearDropdown}
            marginRight="mr-2"
          />
          <DropdownButton
            title="Rating"
            filter={ratingFilter}
            setHook={setRating}
            itemsArray={ratingDropdown}
            suffix=" stars"
          />
        </div>
        <MediaGrid>
          {allMovies
            // Year filter
            .filter((movie) =>
              yearFilter ? getYear(new Date(movie.date)) === yearFilter : movie
            )
            // Rating filter
            .filter((movie) =>
              ratingFilter ? movie.rating === ratingFilter : movie
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
