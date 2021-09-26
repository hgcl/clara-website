import Link from "./link";
import { WEBSITE_NAME } from "../lib/constants";

export default function Intro() {
  const styles = (
    <style jsx>{`
      .intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 36rem;
        height: 100vh;
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
      <h1>{WEBSITE_NAME}</h1>
      <p>
        <Link href="/about">Polymath</Link>, currently{" "}
        <Link href="/portfolio">Designer</Link>. See what I am{" "}
        <Link href="/blog">writing</Link>, <Link href="/books">reading</Link> or{" "}
        <Link href="/now">doing now</Link>.
      </p>
    </section>
  );
}
