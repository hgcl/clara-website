// import Avatar from '../components/avatar'
// import CoverImage from './cover-image'
import { getAllPosts } from "../lib/api";
import MorePosts from "../components/MorePosts";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Container>
          <Header />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              // coverImage={heroPost.coverImage}
              date={heroPost.date}
              // author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {allPosts.length > 0 && <MorePosts posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    // 'author',
    // 'coverImage',
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
