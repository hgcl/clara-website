import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";

export default function Portfolio({}) {
  return (
    <Layout title="Portfolio">
      <Container>
        <Header pageDescription={"Portfolio"} />
        <div
          className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
        >
        </div>
      </Container>
    </Layout>
  );
}
