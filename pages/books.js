import { getAllBooks } from "../lib/getAllBooks";
import booksData from "../data/booksData.js";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import Link from "../components/link";
import { getYear } from "date-fns";
import { useState } from "react";
import DropdownButton from "../components/DropdownButton";
import Checkbox from "../components/Checkbox";
import MediaTile from "../components/MediaTile";
import { yearDropdown, ratingDropdown } from "../lib/mediaFilters";

export default function Books({ allBooks }) {
  const [yearFilter, setYear] = useState(0);
  const [ratingFilter, setRating] = useState(0);
  const [reviewFilter, setReview] = useState(false);
  const toggleReviewFilter = () => setReview((value) => !value);

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
          {/* TODO replace checkbox by toggle */}
          <Checkbox
            className="mt-1 ml-4"
            value={reviewFilter}
            onChange={toggleReviewFilter}
            label="Reviews only"
          />
        </div>
        <MediaGrid>
          {allBooks
            // Year filter
            .filter((book) =>
              yearFilter ? getYear(new Date(book.date)) === yearFilter : book
            )
            // Rating filter
            .filter((book) =>
              ratingFilter ? book.rating === ratingFilter : book
            )
            // Review filter
            .filter(
              (book) =>
                reviewFilter
                  ? book.review.length > 2 && book.review // 1. filter exists + has a review => show reviews only
                  : book // 2. not true: show all books
            )
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((book) => {
              const {
                author,
                coverUrl,
                date,
                isbn,
                link,
                notes,
                rating,
                review,
                title,
              } = book;

              return (
                <article key={isbn}>
                  <MediaTile
                    author={author}
                    coverUrl={coverUrl}
                    date={date}
                    dateLabel="Read on"
                    link={link}
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
  const allBooks = await getAllBooks(booksData);

  return {
    props: { allBooks },
  };
}
