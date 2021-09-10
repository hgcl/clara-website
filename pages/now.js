import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";
// import TopicTwoColumns from "../components/TopicTwoColumns";
import DatePost from "../components/DatePost";

export default function Now() {
  return (
    <Layout title="Now">
      <Container>
        <Header pageDescription={"What I'm currently doing"} />
        <div
          className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
        >
          <DatePost dateString="2021-08-21 13:57:21" lastUpdated />
          <p>
            Now in Berlin for more than two years with my partner{" "}
            <Link href="https://robinmetral.com">Robin</Link>.
          </p>
          <p>
            Summer here is great: I am bouldering a lot, drinking orange wine on
            sunny terraces, trying not to kill the kids screaming in the
            backyard (not mine—neither the kids nor the backyard),{" "}
            <Link href="/recipe-book">baking bread</Link> and making half-baked
            resolutions.
          </p>
          <p>
            But I spend most of my free time typing and clicking away on my
            laptop, working full-time as a graphic designer.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
