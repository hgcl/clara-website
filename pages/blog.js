// Set up RSS feed based on https://dev.to/emilioschepis/adding-a-statically-generated-rss-feed-to-a-next-js-9-3-blog-58id
import fs from "fs";

// import Avatar from '../components/avatar'
// import CoverImage from './cover-image'
import { getAllPosts } from "../lib/api";
import MorePosts from "../components/MorePosts";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";

const generateRssItem = (post) => `
  <item>
    <guid>https://clarale.com/blog/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://clarale.com/blog/${post.slug}</link>
    <description>${post.excerpt}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = (posts) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Clara Le</title>
      <link>https://clarale.com/blog</link>
      <description>[...]</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://clarale.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <Layout title="Blog">
      <Container>
        <Header pageDescription={"Welcome to my mind, good luck."} />
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
  const rss = generateRss(allPosts);

  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: { allPosts },
  };
}
