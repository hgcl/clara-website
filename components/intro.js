import Link from "./link";
import { WEBSITE_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="h-screen flex flex-col justify-center max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {WEBSITE_NAME}
      </h1>
      <p className="text-2xl md:text-4xl">
        Polymath, currently{" "}
        <Link href="https://www.behance.net/hgclaralebca2">Designer</Link>. See
        what I am <Link href="/blog">writing</Link>,{" "}
        <Link href="https://clarasbooks.vercel.app/">reading</Link> or currently{" "}
        <Link href="/now">doing</Link>.
      </p>
    </section>
  );
}
