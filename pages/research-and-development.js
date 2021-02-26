import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import DatePost from "../components/DatePost";
import Link from "../components/link";
import DateFormatter from "../components/date-formatter";

export default function Research({}) {
  const sectionStyle = "mb-32";
  return (
    <Layout title="Research & Development">
      <Container>
        <Header pageDescription={"Research & Development"} />
        <div
          className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
        >
          <DatePost dateString="2021-02-26 12:20:49" lastUpdated />
          <section className={sectionStyle}>
            <h2>Food</h2>
            <p>Things I’d like to cook, bake, sear, steam and more.</p>
            <ul>
              <li>
                <Link href="https://saltsearsavor.substack.com/p/-its-getting-hot-in-here-so-take">
                  Garlic confit
                </Link>{" "}
                <span className="comment">(via Salt Sear Savor)</span>
              </li>
              <li>Mozzarella</li>
              <li>Ramen</li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
