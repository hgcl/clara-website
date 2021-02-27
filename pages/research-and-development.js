import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import DatePost from "../components/DatePost";
import Link from "../components/link";

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
              <li>Bánh Bao</li>
              <li>Dan Dan noodles</li>
              <li>
                <Link href="https://saltsearsavor.substack.com/p/-its-getting-hot-in-here-so-take">
                  Garlic confit
                </Link>{" "}
                <span className="comment">(via Salt Sear Savor)</span>
              </li>
              <li>Knödel</li>
              <li>Mozzarella</li>
              <li>
                <Link href="https://www.chinasichuanfood.com/how-to-make-tofu-at-home/">
                  Tofu
                </Link>{" "}
                <span className="comment">(via China Sichuan Food)</span>
              </li>
              <li>Ramen</li>
              <li>Ravioli</li>
              <li>Spätzle</li>
              <li>Yogurt</li>
            </ul>
          </section>

          <section className={sectionStyle}>
            <h2>DIY</h2>
            <p>Non-edible stuff I’d like to learn to make.</p>
            <ul>
              <li>Laundry detergent</li>
              <li>Shampoo bar</li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
