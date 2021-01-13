import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";
import { categories, favoritesData } from "../lib/favoritesData.js";

export default function Favorites({ allFavorites }) {
  const digitalGarden = "Digital Garden(ing)";
  const cooking = "cooking";
  return (
    <Layout title="Favorites">
      <Container>
        <Header pageDescription={"Directory of cool resources"} />
        <div className="hidden lg:block">
          <div className="fixed max-w-sm top-80 bottom-0 overflow-y-auto text-lg text-gray-regular">
            <ul className="list-none">
              <li>
                <Link href="#cooking">{cooking}</Link>
              </li>
              <li>
                <Link href="#digital-garden">{digitalGarden}</Link>
              </li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>this is an example</li>
              <li>LAST EXAMPLE HERE</li>
            </ul>
          </div>
        </div>
        <div
          className={`${markdownStyles["markdown"]} relative prose prose-lg lg:prose-xl lg:pl-32 mx-auto max-w-3xl`}
        >
          {Object.entries(categories).map(([key, value]) => (
            <>
              <h2 id={key}>{value}</h2>
              {allFavorites
                .filter((favoriteItem) => favoriteItem.category.includes(value))
                .map((favoriteItem) => {
                  const { link, title, description, best } = favoriteItem;
                  return (
                    <div>
                      <Link href={link}>
                        {title}
                        {best && <span>&ensp;✶</span>}
                      </Link>
                      <p>{description}</p>
                    </div>
                  );
                })}
            </>
          ))}
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
