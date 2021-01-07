import Container from "../components/container";
import MoreStories from "../components/more-stories";
// import HeroPost from '../components/hero-post'
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Hcard from "../components/Hcard";

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0]
  const latestPosts = allPosts.slice(0, 3);
  return (
    <Layout>
      <Head>
        <link
          rel="preload"
          as="font"
          href="/fonts/SourceSansPro-Regular.otf"
          type="opentype"
          crossorigin="anonymous"
        ></link>
        <title>Clara Le</title>
        {/* Webmentions */}
        <link
          rel="webmention"
          href="https://webmention.io/clarale.com/webmention"
        />
        <link rel="pingback" href="https://webmention.io/clarale.com/xmlrpc" />
        {/* Authorization endpoint */}
        <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
        <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
      </Head>
      <Container>
        <Intro />
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
        {allPosts.length > 0 && <MoreStories posts={latestPosts} />}
      </Container>
      <Hcard />
    </Layout>
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
