// MVP imports
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
// import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";

// MDX related imports
import markdownStyles from "../../components/markdown-styles.module.css";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import AllPostComponents from "../../components/AllPostComponents";

// framer-motion imports, https://www.framer.com/api/motion/examples/
import ScrollIndicator from "../../components/ScrollIndicator";

const components = AllPostComponents;

export default function RecipePost({ source, post, preview }) {
  const contentmdx = hydrate(source, { components });
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <ScrollIndicator className="fixed hidden md:block bottom-6 left-5 w-8 h-8 text-accent" />
              <Head>
                <title>Clara Le</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              {/* <PostBody content={post.content} /> */}
              <div
                className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
              >
                {contentmdx}
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  const source = post.content;
  const mdxSource = await renderToString(source, { components });

  return {
    props: {
      source: mdxSource,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const isRecipe = true;
  const posts = getAllPosts(["slug"], isRecipe);

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