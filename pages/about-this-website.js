import Layout from "../components/layout";
import Header from "../components/header";
import Container from "../components/container";
import markdownStyles from "../components/markdown-styles.module.css";
import Link from "../components/link";
import DatePost from "../components/DatePost";

export default function About({}) {
  return (
    <Layout title="About">
      <Container>
        <Header pageDescription={"About this website"} />
        <div
          className={`${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
        >
          <DatePost dateString="2021-01-04 08:31:26" lastUpdated />
          <p className="comment">
            Disclaimer: I built this website as a super newbie to everything
            mentioned below. I used a lot of copy-pasting, lack the right
            terminology and best practices—so don't take my word for it.
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
            <Link href="https://twitter.com/clara__le">@clara__le</Link>
          </p>

          <h2>Building Blocks</h2>
          <ul>
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
              <Link href="https://tailwindcss.com/">Tailwind CSS</Link> for
              general styling and{" "}
              <Link href="https://github.com/tailwindlabs/tailwindcss-typography">
                Tailwind Typography
              </Link>{" "}
              to generate responsive text styling
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
              <Link href="https://github.com/yjose/reactjs-popup">
                reactjs-popup
              </Link>{" "}
              to create modals (e.g. my menu overlay)
            </li>
            <li>
              <Link href="https://github.com/date-fns/date-fns">dates-fns</Link>{" "}
              to manipulate dates
            </li>
            <li>
              <Link href="https://openlibrary.org/developers/api">
                Open Library API
              </Link>{" "}
              to get book covers and information for the{" "}
              <Link href="/books">Books</Link> and{" "}
              <Link href="/antilibrary">Antilibrary</Link> pages
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
          <h2>Tools & Extensions</h2>
          <p>
            This list will be useless for more seasoned coders, but might be
            handy for someone just starting out—past me would have appreciated
            it.
          </p>
          <ul>
            <li>
              <Link href="https://code.visualstudio.com/">
                Visual Studio Code
              </Link>{" "}
              (a.k.a. VS Code) is apparently <em>the</em> code editor
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
              <Link href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
                Tailwind CSS IntelliSense
              </Link>{" "}
              adds autocomplete and syntax-highlighting for Tailwind CSS{" "}
              <span className="comment">(VS Code extension)</span>
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
