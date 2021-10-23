import fs from "fs";
import { getAllPosts } from "../lib/getAllPosts";
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
      <title>Clara Le | Blog</title>
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
  return (
    <Layout title="Blog">
      <Container>
        <Header pageDescription={"Tea or coffee?"} />
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
    "excerpt",
    "categories",
  ]);
  const rss = generateRss(allPosts);

  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: { allPosts },
  };
}
