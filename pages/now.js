import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import articleStyles from "../components/articleStyles";
import Link from "../components/link";
import DatePost from "../components/DatePost";

export default function Now() {
  return (
    <Layout title="Now" color="red">
      <Container>
        <Header pageDescription={"What I'm currently doing"} />
        <div className="article-container">
          {articleStyles}
          <DatePost dateString="2021-10-24" lastUpdated />
          <p>
            Now in Berlin for more than two years with my partner{" "}
            <Link href="https://robinmetral.com">Robin</Link>.
          </p>
          <p>
            I am actively working on not being blown away by the wind and rain,
            and getting used to waking up in the dark. I boulder two or three
            times a week with friends—usually at 7am before going for pastries
            together.
          </p>
          <p>
            I am currently nurturing my very new{" "}
            <Link href="https://garden.clarale.com/">digital garden</Link>. For
            once, I am trying to{" "}
            <Link href="/blog/gardening">not over-complicate the process</Link>{" "}
            to make the habit easier to build.
          </p>
          <p>
            As usual, I am reading sci-fi books. I finally started the{" "}
            <Link href="https://openlibrary.org/works/OL893415W/Dune">
              Dune series
            </Link>{" "}
            after watching the recent movie by Villeneuve.{" "}
            <em>I needed to know what happened next!</em>
          </p>
          <p>
            I planted an avocado seed a few months back and finally gave it a
            name (Sigmund). It is now 55&nbsp;cm tall and not dying—yet.
          </p>
          <p>
            Otherwise, I spend most of my free time typing and clicking away on
            my laptop, working full-time as a graphic designer.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
