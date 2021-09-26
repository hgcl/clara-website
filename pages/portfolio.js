import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import articleStyles from "../components/articleStyles";
import DatePost from "../components/DatePost";
import Link from "../components/link";
import Flex from "../components/Flex";
import Image from "next/image";

export default function Portfolio() {
  const imageWidth = "700rem";
  const imageHeight = "450rem";
  const imageFit = "cover";

  const imageRowStyles = (
    <style jsx>{`
      .flex {
        margin-left: -10rem;
        margin-right: -10rem;
      }
      .flex img {
        border-radius: 0.25rem;
      }
    `}</style>
  );
  const sectionStyles = (
    <style jsx>{`
      .article-container section {
        margin-bottom: var(--margin-bottom-default);
      }
      .article-container section:last-child {
        margin-bottom: 0;
      }
    `}</style>
  );
  return (
    <Layout title="Portfolio">
      <Container>
        <Header pageDescription={"Portfolio"} />
        <div className="article-container">
          {articleStyles}
          {sectionStyles}
          <DatePost dateString="2021-01-04 15:08:20" lastUpdated />
          <section>
            <h2>Life Under Control: My Planner Shop</h2>
            <p>
              End of 2018, I launched my planner shop{" "}
              <Link href="https://www.etsy.com/shop/LifeUnderControl/">
                Life Under Control
              </Link>{" "}
              while backpacking in South-East Asia. As of January 2021, the shop
              had +90k visits, +1,700 orders and a rating of 5/5 stars on
              average.
            </p>
            <Flex>
              {imageRowStyles}
              <Image
                alt="Homepage of Life Under Control on Etsy"
                src="/assets/portfolio/Screenshot_2021-01-04_LifeUnderControl-1.jpg"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
                objectPosition="top left"
                loading="eager"
              />
              <Image
                alt="Listings of Life Under Control on Etsy"
                src="/assets/portfolio/Screenshot_2021-01-04_LifeUnderControl-2.jpg"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
                objectPosition="top"
              />
            </Flex>
          </section>
          <section>
            <h2>The Berlin Walls: Street Art Walks in Berlin</h2>
            <p>
              When arriving in Berlin in 2018, Robin and I were amazed by how
              street art covered everything—walls, bridges and cars. From the
              big murals to the small stickers, we explored our first
              neighborhood through the urban art lens. A 50-page street art
              walking guide was born of it.
            </p>
            <Flex>
              <Image
                alt="The Berlin Walls: Street Art Walks in Berlin"
                src="/assets/portfolio/berlinwalls.jpg"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
              />
              <Image
                alt="The Berlin Walls: Street Art Walks in Berlin"
                src="/assets/portfolio/berlinwalls2.jpg"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
                objectPosition="left"
              />
              <Image
                alt="The Berlin Walls: Street Art Walks in Berlin"
                src="/assets/portfolio/berlinwalls3.jpg"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
                objectPosition="20% 0%"
              />
            </Flex>
          </section>
          <section>
            <h2>Dynamic Landing Page</h2>
            <p>
              Here is a complete rework of the home and service pages of an SEO
              company website. They are both one-pagers that are optimized for
              client conversion—first presenting the problem, the solution and
              its benefits, before diving more into the features. Bonus: the
              animated illustrations also bring additional dynamism and clarity.
            </p>
            <Flex>
              <Image
                alt="Homepage of Handmade SEO"
                src="/assets/portfolio/lp-seo1.jpg"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
              />
              <Image
                alt="Homepage of Handmade SEO"
                src="/assets/portfolio/lp-seo2.jpg"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
                objectPosition="top"
              />
            </Flex>
          </section>
          <section>
            <h2>Digital Illustrations</h2>
            <p>
              On the spectrum of digital illustration, I like experimenting with
              different tools and techniques. Here are some examples of
              illustrations made with Blender, Illustrator and Photoshop
              respectively.
            </p>
            <Flex>
              <Image
                alt="Realistic donut created with Blender"
                src="/assets/portfolio/illustration-3ddonut.jpg"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
              />
              <Image
                alt="Autoportrait made with Illustrator"
                src="/assets/portfolio/illustration-crayoneffect.png"
                height={imageHeight}
                width={imageWidth}
                objectFit={imageFit}
              />
              <Image
                alt="Illustration of 10 Objects I Used Backpacking In South-East Asia"
                src="/assets/portfolio/illustration-10objects.jpg"
                height={imageHeight}
                width="400rem"
                objectFit={imageFit}
                objectPosition="top right"
              />
            </Flex>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
