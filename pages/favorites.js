import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import articleStyles from "../components/articleStyles";
import Link from "../components/link";
import { categories, favoritesData } from "../data/favoritesData.js";
import { getFavorites } from "../lib/getFavorites.js";
import { STAR } from "../lib/constants";

export default function Favorites() {
  const allFavorites = getFavorites(favoritesData);
  const styles = (
    <style jsx>{`
      .directory {
        max-width: 36rem;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
      }
      .directory > li {
        display: inline;
        padding: 0 1rem 0 0;
      }
      .article-container > section > div > p {
        margin-top: 0.5rem;
      }
    `}</style>
  );
  return (
    <Layout title="Favorites">
      <Container>
        <Header pageDescription={"Directory of cool resources"} />
        {styles}
        <ul className="directory">
          {Object.values(categories).map(({ title, anchor }) => (
            <li key={title}>
              <Link href={`#${anchor}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <div className={`article-container`}>
          {articleStyles}
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
                        {best && <span>&ensp;{STAR}</span>}
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
