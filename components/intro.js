import Link from "./link";
import { WEBSITE_NAME } from "../lib/constants";

export default function Intro() {
  const styles = (
    <style jsx>{`
      .intro {
        position: absolute;
        top: 45%;
        max-width: 36rem;
      }
      .intro > h1 {
        font-size: var(--font-size-h1);
      }
      .intro > p {
        font-size: var(--font-size-h4);
        line-height: var(--line-height-h2);
      }
      @media screen and (min-width: 640px) {
        .intro > h1 {
          font-size: var(--font-size-h0);
        }
        .intro > p {
          font-size: var(--font-size-h2);
          line-height: var(--line-height-h2);
        }
      }
    `}</style>
  );
  return (
    <section className="intro">
      {styles}
      <p>
        <Link href="/about">Polymath</Link>, currently{" "}
        <Link href="/portfolio">Designer</Link>. See what I am{" "}
        <Link href="/blog">writing</Link>, <Link href="/books">reading</Link> or{" "}
        <Link href="/now">doing now</Link>.
      </p>
    </section>
  );
}
