import booksData from "../data/booksData.js";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import Link from "../components/link";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import MediaTile from "../components/MediaTile";

export default function Books() {
  const [statusFilter, setStatus] = useState(false);
  const toggleStatusFilter = () => setStatus((value) => !value);

  return (
    <Layout title={"Books"}>
      <Container>
        <Header
          pageDescription={
            <>
              Here&apos;s what I&apos;ve been reading. Also check out my{" "}
              <Link href="/antilibrary">antilibrary</Link>.
            </>
          }
        />
        <Checkbox
          value={statusFilter}
          onChange={toggleStatusFilter}
          label="Show unfinished"
        />
        <MediaGrid>
          {booksData
            // Reading status filter
            .filter((book) =>
              statusFilter ? book : book.status !== "unfinished"
            )
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
