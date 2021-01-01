import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";
import TopicTwoColumns from "../components/TopicTwoColumns";
import DatePost from "../components/DatePost";

export default function Now({}) {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          <div
            className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
          >
            <DatePost dateString="2021-01-01 17:04:10" lastUpdated />
            <p>
              Winter in Berlin is not the most exciting period–especially if you
              are in semi-lockdown. I spend most of this indoor time reading,
              learning new things, baking break and making half-baked
              resolutions.
            </p>
            <h2>Current projects</h2>
            <TopicTwoColumns topic="Building my website">
              <p>
                I am currently learning to code this website with{" "}
                <Link href="https://nextjs.org/">Next.js</Link> and{" "}
                <Link href="https://tailwindcss.com/">tailwindcss</Link>. There
                is a lot of experimentation and copy-pasting involved, but I am
                quite excited by the whole process.
              </p>
            </TopicTwoColumns>
            <TopicTwoColumns topic="Thinking better">
              <p>
                I am exploring better ways to learn and think. I started
                systematically taking notes of what I read (with{" "}
                <Link href="https://hypothes.is/">hypothes.is</Link>) and
                nurturing my{" "}
                <Link href="https://hgcl.github.io/digital-garden/">
                  digital garden
                </Link>
                .
              </p>
            </TopicTwoColumns>
            <h2>Reading</h2>
            <p>
              I am currently reading the{" "}
              <Link href="https://datavizhandbook.info/">
                The Data Visualization Handbook
              </Link>{" "}
              by Koponen and Hildén. It is very rich in content, so I am slowly
              going through it from the beginning.
            </p>
            <p className="comment">
              Inspired by the{" "}
              <Link href="https://nownownow.com/about">Now page</Link> concept
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
