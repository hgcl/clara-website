import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";
import { categories, favoritesData } from "../data/favoritesData.js";
import { getFavorites } from "../lib/getFavorites.js";

export default function Favorites() {
  const allFavorites = getFavorites(favoritesData);
  return (
    <Layout title="Favorites">
      <Container>
        <Header pageDescription={"Directory of cool resources"} />
        <div className="relative lg:fixed max-w-sm lg:top-56 bottom-0 overflow-y-auto w-48 text-lg text-gray-regular">
          <ul className="list-none">
            {Object.values(categories).map(({ title, anchor }) => (
              <li key={title}>
                <Link href={`#${anchor}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${markdownStyles["markdown"]} relative prose prose-lg lg:prose-xl lg:pl-32 mx-auto max-w-3xl`}
        >
          {Object.values(categories).map(({ title, anchor }) => (
            <section key={anchor}>
              <h2 id={anchor}>{title}</h2>
              {allFavorites
                .filter((favoriteItem) =>
                  favoriteItem.category.includes(anchor)
                )
                .map((favoriteItem) => {
                  const { link, title, description, best } = favoriteItem;
                  return (
                    <div key={link}>
                      <Link href={link}>
                        {title}
                        {best && <span>&ensp;✶</span>}
                      </Link>
                      <p>{description}</p>
                    </div>
                  );
                })}
            </section>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
