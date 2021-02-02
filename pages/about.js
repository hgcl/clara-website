import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";
import WaffleIcon from "../public/icons/WaffleIcon";

export default function About({}) {
  return (
    <Layout title="About">
      <Container>
        <Header pageDescription={"You asked to know more about me, so ..."} />
        <div
          className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
        >
          <h2>2 words</h2>
          <p>ebullient polymath</p>
          <h2>20 seconds</h2>
          <p>
            I suffer from the polymath syndrome, meaning I have many interests
            and not one vocation. I get very enthusiastic about new projects and
            tend to try optimizing everything I do.{" "}
          </p>
          <p>
            I have travelled and{" "}
            <Link href="https://www.eaudepoisson.com/">
              blogged a year in South-East Asia
            </Link>
            , launched my side-business{" "}
            <Link href="https://www.etsy.com/shop/LifeUnderControl">
              Life Under Control
            </Link>
            , published a Street Art Guide and try to live as
            environmentally-friendly as I can.
          </p>
          <p>
            Originally from Switzerland, I <Link href="/now">now</Link> live in
            Berlin with my partner{" "}
            <Link href="https://www.robinmetral.com/">Robin</Link>.
          </p>
          <h2>20 random facts</h2>
          <ol>
            <li>I love cheese.</li>
            <li>Both my parents are Vietnamese.</li>
            <li>I try to slow travel and eat regional / seasonal food.</li>
            <li>Bouldering is the first sport I ever got addicted to.</li>
            <li>In 2018, I lived one year without a phone.</li>
            <li>
              I did a two-week tandem cycling trip in the Chianti region in
              Italy.
            </li>
            <li>I am a self-taught designer.</li>
            <li>
              Before a city trip, the first thing I search for are speciality
              coffee shops.
            </li>
            <li>
              My great-great grandfather—or was it my
              great-great-great-grandfather(?)—had four wives and more than
              twenty children.
            </li>
            <li>
              My favorite book is <cite>Stories of Your Life and Others</cite>{" "}
              by Ted Chiang.
            </li>
            <li>I studied business and information systems at university.</li>
            <li>I speak French, English, Vietnamese and broken German.</li>
            <li>I learned to play the ukulele while backpacking.</li>
            <li>
              Joining the improvisational theatre club at school was
              life-changing.
            </li>
            <li>
              I made my first sourdough starter in Berlin—his name is Heimlich.
            </li>
            <li>One day, I will certainly move out to the countryside.</li>
            <li>I am very bad with maps.</li>
            <li>I studied a year in Seoul, South-Korea.</li>
            <li>I have a bad case of impostor syndrome.</li>
            <li>
              I <em>love</em> cheese.
            </li>
          </ol>
          <WaffleIcon className="mx-auto my-16" />
          <p>
            Oh, so you didn’t really care about all this stuff but just wanted
            to know more{" "}
            <Link href="/about-this-website">about this website</Link>? Okay
            sure, no hard feelings. No really.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
