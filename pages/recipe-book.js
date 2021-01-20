// import CoverImage from './cover-image'
import { getAllPosts } from "../lib/api";
import MoreRecipes from "../components/MoreRecipes";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";

export default function Recipe({ allPosts }) {
  const heroPost = allPosts[0];
  return (
    <Layout title="Recipe">
      <Container>
        <Header pageDescription={"Nom nom nom"} />
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
        {allPosts.length > 0 && <MoreRecipes posts={allPosts} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const isRecipe = true;
  const allPosts = getAllPosts(
    [
      "title",
      "date",
      "slug",
      // 'author',
      // 'coverImage',
      "excerpt",
      "categories",
    ],
    isRecipe
  );
  return {
    props: { allPosts },
  };
}
