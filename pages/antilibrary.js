// import { getAllBooks } from "../lib/getAllBooks";
import antilibraryData from "../data/antilibraryData.js";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import { getYear } from "date-fns";
import { useState } from "react";
import DropdownButton from "../components/DropdownButton";
import MediaTile from "../components/MediaTile";

export default function Antilibrary({ allBooks }) {
  // Year media dropdown:
  const [yearFilter, setYear] = useState(0);
  const yearDropdown = [
    { name: "All", value: 0 },
    { name: "2021", value: 2021 },
    { name: "2020", value: 2020 },
  ];
  return (
    <Layout title={"Antilibrary"}>
      <Container>
        <Header
          pageDescription={
            "My secret antilibrary—a.k.a. books I plan to read or wish I had read"
          }
        />
        <div className="flex flex-col sm:flex-row flex-wrap">
          <DropdownButton
            title="Year"
            filter={yearFilter}
            setHook={setYear}
            itemsArray={yearDropdown}
            marginRight="mr-2"
          />
        </div>
        <MediaGrid>
          {antilibraryData
            // Year filter
            .filter((book) =>
              yearFilter ? getYear(new Date(book.date)) === yearFilter : book
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
                title,
              } = book;

              return (
                <article key={isbn}>
                  <MediaTile
                    author={author}
                    coverUrl={coverUrl}
                    date={date}
                    dateLabel="Added on"
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

// VERSION 1: Using Open Library API
// export async function getStaticProps() {
//   const allBooks = await getAllBooks(antilibraryData);

//   return {
//     props: { allBooks },
//   };
// }
