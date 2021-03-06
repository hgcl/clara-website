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
import SettingsIcon from "../public/icons/SettingsIcon";

export default function Books() {
  const [statusFilter, setStatus] = useState(false);
  const toggleStatusFilter = () => setStatus((value) => !value);
  const [openSettings, setSettings] = useState(false);
  const [yearFilter, setYear] = useState(0);
  const [ratingFilter, setRating] = useState(0);
  // TODO Fix following filter
  // const [reviewFilter, setReview] = useState(false);
  // const toggleReviewFilter = () => setReview((value) => !value);

  const dropdownList = (className) => (
    <>
      <DropdownButton
        className={className}
        title="Year"
        filter={yearFilter}
        setHook={setYear}
        itemsArray={yearDropdown}
        marginRight="mr-2"
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
        <div className="flex flex-row flex-wrap">
          {dropdownList("hidden xs:block")}
          <div className="flex flex-row justify-start w-full xs:w-auto">
            <button
              onClick={() => setSettings(!openSettings)}
              className="xs:hidden"
            >
              <SettingsIcon />
            </button>
            <div className="xs:hidden w-full" />
            {/* TODO replace checkbox by toggle */}
            {/* <Checkbox
              className="mt-1 mr-4 whitespace-no-wrap"
              value={reviewFilter}
              onChange={toggleReviewFilter}
              label="Reviews only"
            /> */}
            <Checkbox
              className="mt-1 whitespace-no-wrap"
              value={statusFilter}
              onChange={toggleStatusFilter}
              label="Show unfinished"
            />
          </div>
          {/* Open generic settings dropdown: */}
          {openSettings && (
            <div className="xs:hidden my-4">
              <div
                className="z-10 absolute -top-8 left-0 h-full w-full"
                onClick={() => setSettings(!openSettings)}
              />
              <div className="z-10 relative w-full">{dropdownList("")}</div>
            </div>
          )}
        </div>
        <MediaGrid>
          {booksData
            // Status filter
            .filter((book) =>
              statusFilter ? book : book.status !== "unfinished"
            )
            // Year filter
            .filter((book) =>
              yearFilter ? getYear(new Date(book.date)) === yearFilter : book
            )
            // Rating filter
            .filter((book) =>
              ratingFilter ? book.rating === ratingFilter : book
            )
            // TODO Fix following filter
            // // Review filter
            // .filter(
            //   (book) =>
            //     reviewFilter
            //       ? book.review.length > 2 && book.review // 1. filter exists + has a review => show reviews only
            //       : book // 2. not true: show all books
            // )
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((book) => {
              const {
                author,
                coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`,
                date,
                isbn,
                link,
                notes,
                rating,
                review,
                status,
                title,
              } = book;

              return (
                <article key={isbn}>
                  <MediaTile
                    author={author}
                    coverUrl={coverUrl}
                    date={date}
                    dateLabel={
                      status === "unfinished" ? "Stopped on" : "Read on"
                    }
                    link={link}
                    notes={notes}
                    rating={rating}
                    review={review}
                    status={status}
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
