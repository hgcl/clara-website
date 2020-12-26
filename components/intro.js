import Link from "../components/link"
import { WEBSITE_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="h-screen flex flex-col justify-center">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-8">
        { WEBSITE_NAME }
      </h1>
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-accent duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4> */}
      <p className="text-2xl md:text-4xl">
        {/* TODO add portfolio links */}
        <Link href="/posts/example-2/">Designer</Link> by day and polymath all-year long. You will find me writing, reading or travelling.
      </p>
    </section>
  )
}
