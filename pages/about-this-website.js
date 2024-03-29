import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import Link from "../components/link";
import DatePost from "../components/DatePost";
import articleStyles from "../components/articleStyles";

export default function AboutWebsite() {
  return (
    <Layout title="About this website" color="red">
      <Container>
        <Header pageDescription={"About this website"} />
        <div className="article-container">
          {articleStyles}
          <DatePost dateString="2021-01-04 08:31:26" lastUpdated />
          <p className="parenthesis">
            Disclaimer: I built this website as a super newbie to everything
            mentioned below. I used a lot of copy-pasting lack the right
            terminology and best practices—so don&apos;t take my word for it.
          </p>
          <h2>The big picture</h2>
          <p>
            I envision this website as my personal corner of the internet—my
            very own playground. I am experimenting on it and have a few things
            planned ahead. Check out the{" "}
            <Link href="https://github.com/hgcl/clara-website/blob/main/README.md">
              Roadmap
            </Link>{" "}
            to know more.
          </p>
          <p>
            Feel free to send me any feedback / improvement ideas on Twitter{" "}
            <Link href="https://twitter.com/clara__le">@clara__le</Link> or
            directly{" "}
            <Link href="https://github.com/hgcl/clara-website/issues">
              File an issue
            </Link>{" "}
            on Github.
          </p>
          <h2>Building Blocks</h2>
          <ul>
            <li>
              <Link href="https://robinmetral.com">Robin</Link> might be the
              most important part of the equation, as I am always pestering him
              with questions—thank you!
            </li>
            <li>
              <Link href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter">
                blog starter example
              </Link>{" "}
              I used as a foundation (it already includes many of the following
              integrations out of the box)
            </li>
            <li>
              Statically generated with{" "}
              <Link href="https://nextjs.org/">Next.js</Link> and deployed with{" "}
              <Link href="https://vercel.com/">Vercel</Link>
            </li>
            <li>
              <Link href="https://github.com/jonschlinkert/gray-matter">
                gray-matter
              </Link>{" "}
              to parse front matter and convert it into an object
            </li>
            <li>
              <Link href="https://github.com/hashicorp/next-mdx-remote">
                next-mdx-remote
              </Link>{" "}
              to enable the use of JSX and components in MDX files
            </li>
            <li>
              <Link href="https://github.com/date-fns/date-fns">dates-fns</Link>{" "}
              to manipulate dates
            </li>
            <li>
              <Link href="https://github.com/fontsource/fontsource">
                Fontsource
              </Link>{" "}
              to easily set up self-hosted font bundles
            </li>
            <li>
              The typefaces I use are <em>Vesper Libre</em> from the Mota Italic
              foundry (check out its{" "}
              <Link href="https://ilovetypography.com/2009/12/15/font-design-vesper-typeface-devanagari/">
                creation process
              </Link>
              ) and <em>Source Sans Pro</em> designed by Paul D. Hunt for Adobe.
            </li>
            <li>
              <Link href="https://openlibrary.org/developers/api">
                Open Library API
              </Link>{" "}
              to get book covers and information for the{" "}
              <Link href="/books">Books</Link> and{" "}
              <Link href="/antilibrary">Antilibrary</Link> pages
            </li>
            <li>
              <Link href="https://www.themoviedb.org/">TMDb API</Link> to get
              movie posters and information for the{" "}
              <Link href="/movies">movies</Link> page
            </li>
          </ul>
          <p>
            I will keep this list as updated as possible, but the source of
            truth lies in the{" "}
            <Link href="https://github.com/hgcl/clara-website/blob/main/package.json">
              package.json
            </Link>
            .
          </p>
          <h2>Tools &#38; Extensions</h2>
          <p>
            This list will be useless for more seasoned coders, but might be
            handy for someone just starting out—<em>past me</em> would have
            appreciated it.
          </p>
          <ul>
            <li>
              <Link href="https://code.visualstudio.com/">
                Visual Studio Code
              </Link>{" "}
              is apparently <em>the</em> code editor
            </li>
            <li>
              <Link href="https://github.com/hgcl/clara-website">GitHub</Link>{" "}
              to host the source code of my website
            </li>
            <li>
              <Link href="https://prettier.io/">Prettier</Link> as a code
              formatter <span className="comment">(VS Code extension)</span>
            </li>
            <li>
              <Link href="https://marketplace.visualstudio.com/items?itemName=silvenon.mdx">
                MDX
              </Link>{" "}
              adds syntax highlighting for MDX files{" "}
              <span className="comment">(VS Code extension)</span>
            </li>
            <li>
              <Link href="https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring">
                Insert Date String
              </Link>{" "}
              just makes it easier to insert the current ISO date with{" "}
              <kbd>Shift</kbd> + <kbd>Cmd</kbd> + <kbd>I</kbd>{" "}
              <span className="comment">(VS Code extension)</span>
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
}
