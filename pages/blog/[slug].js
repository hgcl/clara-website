// MVP imports
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import smartypants from "@silvenon/remark-smartypants";
import { serialize } from "next-mdx-remote/serialize";
import Container from "../../components/container";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/getAllPosts";
import PostTitle from "../../components/post-title";
import PostBody from "../../components/post-body";
import ScrollIndicator from "../../components/ScrollIndicator";

export default function Post({ source, post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <ScrollIndicator />
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
              <PostBody source={source} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "author",
    "content",
    "coverImage",
    "date",
    "excerpt",
    "ogImage",
    "slug",
    "title",
  ]);
  const source = post.content;
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [smartypants],
      rehypePlugins: [],
    },
  });

  return {
    props: {
      source: mdxSource,
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
