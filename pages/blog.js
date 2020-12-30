// import Avatar from '../components/Avatar';
// import CoverImage from './CoverImage';
import { getAllPosts } from "../lib/api";
import MorePosts from "../components/MorePosts";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Container from "../components/Container";

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
