import Link from "./link";
import { WEBSITE_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="h-screen flex flex-col justify-center max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {WEBSITE_NAME}
      </h1>
      <p className="text-2xl md:text-4xl">
        <Link href="/about">Polymath</Link>, currently{" "}
        <Link href="/portfolio">Designer</Link>. See what I am{" "}
        <Link href="/blog">writing</Link>, <Link href="/books">reading</Link> or{" "}
        <Link href="/now">doing now</Link>.
      </p>
    </section>
  );
}
