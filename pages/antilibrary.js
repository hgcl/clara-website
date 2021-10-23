import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import MediaGrid from "../components/MediaGrid";
import MediaTile from "../components/MediaTile";

export default function Antilibrary({ toReadList }) {
  console.log(toReadList);
  return (
    <Layout title={"Antilibrary"} color="green">
      <Container>
        <Header
          pageDescription={
            "My secret antilibrary—a.k.a. books I plan to read or wish I had read"
          }
        />
        <MediaGrid>
          {toReadList
            // .sort((a, b) => new Date(b.logged_date) - new Date(a.logged_date))
            .map((data) => {
              const {
                key = data.work.key,
                coverUrl = `https://covers.openlibrary.org/b/olid/${data.work.cover_edition_key}-M.jpg`,
                date = "2021-01-01", // TODO parse and format date
                author = data.work.author_names[0],
                title = data.work.title,
              } = data;
              return (
                <article key={key}>
                  <MediaTile
                    author={author}
                    coverUrl={coverUrl}
                    date={date}
                    dateLabel="Added on"
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
  const res = await fetch(
    "https://openlibrary.org/people/hgcl/books/want-to-read.json"
  );
  const booksRawData = await res.json();
  const toReadList = booksRawData.reading_log_entries;

  return {
    props: {
      toReadList: toReadList,
    },
  };
}

// Example of toReadList JSON
// [
//   {
//     work: {
//       title: 'Parable of the Talents',
//       key: '/works/OL35618W',
//       author_keys: [Array],
//       author_names: [Array],
//       first_publish_year: 1998,
//       lending_edition_s: null,
//       edition_key: [Array],
//       cover_id: null,
//       cover_edition_key: 'OL374094M'
//     },
//     logged_edition: '/books/OL374094M',
//     logged_date: '2021/09/10, 22:09:16'
//   },
//   {
//     work: {
//       title: 'The Road',
//       key: '/works/OL40873W',
//       author_keys: [Array],
//       author_names: [Array],
//       first_publish_year: 2004,
//       lending_edition_s: null,
//       edition_key: [Array],
//       cover_id: null,
//       cover_edition_key: 'OL15610563M'
//     },
//     logged_edition: '/books/OL15610563M',
//     logged_date: '2021/09/10, 21:59:39'
//   }
// ]
