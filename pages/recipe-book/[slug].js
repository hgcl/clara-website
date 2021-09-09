// MVP imports
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/getAllPosts";
import PostTitle from "../../components/post-title";
import Link from "../../components/link";
import { ARROW } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import ScrollIndicator from "../../components/ScrollIndicator";

// MDX related imports
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import AllPostComponents from "../../components/AllPostComponents";

const components = AllPostComponents;

export default function RecipePost({ source, post, preview }) {
  const contentmdx = hydrate(source, { components });
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
            {/* Added hRecipe microformats http://microformats.org/wiki/hrecipe */}
            <article className="h-recipe mb-32">
              <PostHeader
                author={post.author}
                coverImage={post.coverImage}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                title={post.title}
                type="isRecipe"
              />
              <PostBody content={contentmdx}>
                {post.url && (
                  <p className="comment pt-8">
                    <Link href={post.url}>
                      Link to original recipe&ensp;{ARROW}
                    </Link>
                  </p>
                )}
              </PostBody>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const isRecipe = true;
  const post = getPostBySlug(
    params.slug,
    [
      "author",
      "content",
      "coverImage",
      "date",
      "excerpt",
      "ogImage",
      "slug",
      "title",
      "url",
    ],
    isRecipe
  );
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
