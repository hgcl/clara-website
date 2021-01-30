import { getAllMovies } from "../lib/getAllMovies";
import watchedData from "../data/watchedData.js";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import { getYear } from "date-fns";
import { useState } from "react";
import DropdownButton from "../components/DropdownButton";
import Checkbox from "../components/Checkbox";
import MediaTile from "../components/MediaTile";
import { yearDropdown, ratingDropdown } from "../lib/mediaFilters";
import SettingsIcon from "../public/icons/SettingsIcon";

export default function Movies({ allMovies }) {
  const [openSettings, setSettings] = useState(false);
  const [yearFilter, setYear] = useState(0);
  const [ratingFilter, setRating] = useState(0);
  const [reviewFilter, setReview] = useState(false);
  const toggleReviewFilter = () => setReview((value) => !value);

  const dropdownList = (className) => (
    <>
      <DropdownButton
        className={className}
        title="Year"
        filter={yearFilter}
        setHook={setYear}
        itemsArray={yearDropdown}
      />
      <DropdownButton
        className={className}
        title="Rating"
        filter={ratingFilter}
        setHook={setRating}
        itemsArray={ratingDropdown}
      />
    </>
  );

  return (
    <Layout title={"Movies"}>
      <Container>
        <Header pageDescription={"Get the popcorn ready"} />
        <div className="flex flex-row flex-wrap">
          {dropdownList("hidden xs:block")}
          <div className="flex flex-row justify-start w-full xs:w-auto">
            <button onClick={() => setSettings(!openSettings)}>
              <SettingsIcon className="xs:hidden" />
            </button>
            {/* TODO replace checkbox by toggle */}
            <Checkbox
              className="mt-1 ml-2"
              value={reviewFilter}
              onChange={toggleReviewFilter}
              label="Reviews only"
            />
          </div>
          {/* Open generic settings dropdown: */}
          {openSettings && (
            <div className="xs:hidden my-4">
              <div
                className="z-10 absolute -top-8 left-0 h-full w-screen"
                onClick={() => setSettings(!openSettings)}
              />
              <div className="z-10 relative w-screen">{dropdownList("")}</div>
            </div>
          )}
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
