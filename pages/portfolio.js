import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import DatePost from "../components/DatePost";
import Link from "../components/link";
import Flex from "../components/Flex";
import Column from "../components/Column";
import Image from "next/image";

export default function Portfolio({}) {
  const imageWidth = "700rem";
  const imageHeight = "450rem";
  const imageFit = "cover";
  const sectionStyle = "mb-32";
  const customColumnStyle = "md:mr-5";
  return (
    <Layout title="Portfolio">
      <Container>
        <Header pageDescription={"Portfolio"} />
        <div
          className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
        >
          <DatePost dateString="2021-01-04 15:08:20" lastUpdated />
          <section className={sectionStyle}>
            <h2>Life Under Control: My Planner Shop</h2>
            <p>
              End of 2018, I launched my planner shop{" "}
              <Link href="https://www.etsy.com/shop/LifeUnderControl">
                Life Under Control
              </Link>{" "}
              while backpacking in South-East Asia. As of January 2021, the shop
              had +90k visits, +1,700 orders and a rating of 5/5 stars on
              average.
            </p>
            <Flex className="lg:-mx-40">
              <Column>
                <Image
                  alt="Homepage of Life Under Control on Etsy"
                  src="/assets/portfolio/Screenshot_2021-01-04_LifeUnderControl-1.jpg"
                  height={imageHeight}
                  width={imageWidth}
                  objectFit={imageFit}
                  objectPosition="top left"
                />
              </Column>
              <Column>
                <Image
                  alt="Listings of Life Under Control on Etsy"
                  src="/assets/portfolio/Screenshot_2021-01-04_LifeUnderControl-2.jpg"
                  height={imageHeight}
                  width={imageWidth}
                  objectFit={imageFit}
                  objectPosition="top"
                />
              </Column>
            </Flex>
          </section>

          <section className={sectionStyle}>
            <h2>Dynamic Landing Page</h2>
            <p>
              Here is a complete rework of the home and service pages of an SEO
              company website. They are both one-pagers that are optimized for
              client conversion—first presenting the problem, the solution and
              its benefits, before diving more into the features. Bonus: the
              animated illustrations also bring additional dynamism and clarity.
            </p>
            <Flex className="lg:-mx-40">
              <Column>
                <Image
                  alt="Homepage of Handmade SEO"
                  src="/assets/portfolio/lp-seo1.jpg"
                  height={imageHeight}
                  width={imageWidth}
                  objectFit={imageFit}
                />
              </Column>
              <Column>
                <Image
                  alt="Homepage of Handmade SEO"
                  src="/assets/portfolio/lp-seo2.jpg"
                  height={imageHeight}
                  width={imageWidth}
                  objectFit={imageFit}
                  objectPosition="top"
                />
              </Column>
            </Flex>
          </section>

          <section className={sectionStyle}>
            <h2>Digital Illustrations</h2>
            <p>
              On the spectrum of digital illustration, I like experimenting with
              different tools and techniques. Here are some examples of
              illustrations made with Blender, Illustrator and Photoshop
              respectively.
            </p>
            <Flex className="lg:-mx-40">
              <div className={customColumnStyle}>
                <Image
                  alt="Realistic donut created with Blender"
                  src="/assets/portfolio/illustration-3ddonut.jpg"
                  height={imageHeight}
                  width={imageWidth}
                  objectFit={imageFit}
                />
              </div>
              <div className={customColumnStyle}>
                <Image
                  alt="Autoportrait made with Illustrator"
                  src="/assets/portfolio/illustration-crayoneffect.png"
                  height={imageHeight}
                  width={imageWidth}
                  objectFit={imageFit}
                />
              </div>
              <div className={customColumnStyle}>
                <Image
                  alt="Illustration of 10 Objects I Used Backpacking In South-East Asia"
                  src="/assets/portfolio/illustration-10objects.jpg"
                  height={imageHeight}
                  width="400rem"
                  objectFit={imageFit}
                  objectPosition="top right"
                />
              </div>
            </Flex>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
