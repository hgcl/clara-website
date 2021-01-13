import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";
import favoritesData from "../lib/favoritesData.js";

export default function Favorites({ allFavorites }) {
  // const star = ;
  return (
    <Layout title="Favorites">
      <Container>
        <Header pageDescription={"Directory of cool resources"} />
        <div className="hidden lg:block">
          <div className="fixed max-w-sm overflow-y-auto border-2 border-red-500">
            <ul className="list-none">
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
            </ul>
          </div>
        </div>
        <div
          className={`${markdownStyles["markdown"]} relative prose prose-lg lg:prose-xl pl-32 mx-auto max-w-3xl border-2 border-teal-400 `}
        >
          <h2>Digital Garden(ing)</h2>

          {allFavorites.map((favoriteItem) => {
            const { link, title, description, category, best } = favoriteItem;
            return (
              <div className="p-0">
                <Link href={link}>
                  {title}
                  {best && <span>&ensp;✶</span>}
                </Link>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allFavorites = await getFavorites(favoritesData);

  return {
    props: { allFavorites },
  };
}

export async function getFavorites(favoritesJson) {
  const favoritesList = favoritesJson.map((item) => {
    const { link, title, description, category, best } = item;

    return {
      link,
      title,
      description,
      category,
      best,
    };
  });

  return favoritesList;
}
