import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";
// import TopicTwoColumns from "../components/TopicTwoColumns";
import DatePost from "../components/DatePost";

export default function Now({}) {
  return (
    <Layout title="Now">
      <Container>
        <Header pageDescription={"What I'm currently doing"} />
        <div
          className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
        >
          <DatePost dateString="2021-01-13 08:47:21" lastUpdated />
          <p>
            Winter in Berlin is not the most exciting period–especially if you
            are in semi-lockdown. I spend most of this indoor time reading,
            learning new things, <Link href="/recipe-book">baking bread</Link>{" "}
            and making half-baked resolutions.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
