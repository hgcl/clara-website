import Container from "../components/container";
// import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
// import { getAllPosts } from "../lib/getAllPosts";

export default function Index() {
  // const latestPosts = allPosts.slice(0, 3);
  return (
    <Layout noHentry noBottomMargin>
      <Container>
        <Intro />
        {/* {allPosts.length > 0 && <MoreStories posts={latestPosts} />} */}
      </Container>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     "title",
//     "date",
//     "slug",
//     "excerpt",
//   ]);

//   return {
//     props: { allPosts },
//   };
// }
