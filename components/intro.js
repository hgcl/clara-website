import Link from "../components/link";
import { WEBSITE_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="h-screen flex flex-col justify-center max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {WEBSITE_NAME}
      </h1>
      <p className="text-2xl md:text-4xl">
        <Link href="https://www.behance.net/hgclaralebca2">Designer</Link> by day and polymath
        all-year long. You will find me{" "}
        <Link href="/blog">writing</Link>,{" "}
        <Link href="https://clarasbooks.vercel.app/">reading</Link> or{" "}
        <Link href="https://www.eaudepoisson.com/">travelling</Link>.
      </p>
    </section>
  );
}
