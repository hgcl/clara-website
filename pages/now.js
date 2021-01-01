import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";

export default function Now({}) {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          <div
            className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
          >
            {/* TODO add date  */}
            <p>
              Winter time in Berlin is not the most exciting time–especially if
              you are in semi-lockdown. I spend most of this indoor time
              reading, learning new things and making half-baked resolutions.
            </p>
            <h2>Projects</h2>
            <p>
              I am currently learning to code this website with{" "}
              <Link href="https://nextjs.org/">Next.js</Link> and{" "}
              <Link href="https://tailwindcss.com/">Tailwindcss</Link>. There is
              a lot of experimentation and copy-pasting involved, but I am quite
              proud of the result!
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
