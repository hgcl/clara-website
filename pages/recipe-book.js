// import CoverImage from './cover-image'
import { getAllPosts } from "../lib/api";
import MoreRecipes from "../components/MoreRecipes";
import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";

export default function Recipe({ allPosts }) {
  return (
    <Layout title="Recipe">
      <Container>
        <Header pageDescription={"Nom nom nom"} />
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
      "coverImage",
      "excerpt",
      "categories",
      "tags",
      "difficulty",
      "duration",
    ],
    isRecipe
  );
  return {
    props: { allPosts },
  };
}
