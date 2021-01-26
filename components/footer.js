import NextLink from "next/link";

export default function Footer() {
  const styleList = "font-serif text-lg sm:text-2xl";
  return (
    <footer className="z-0 h-72 sticky right-0 bottom-0 bg-black text-gray-regular text-right">
      <div className="flex flex-row flex-wrap max-w-5xl my-auto ml-auto px-8 pt-8">
        <div className="flex-1 pb-8">
          <h2 className="comment pb-4">Social</h2>
          <ul className={`${styleList} list-none`}>
            <li>
              <NextLink href="https://twitter.com/clara__le">
                <a>Twitter</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="https://lifeundercontrol.etsy.com">
                <a>Etsy</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="https://github.com/hgcl/">
                <a>GitHub</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/rss.xml">
                <a>RSS</a>
              </NextLink>
            </li>
          </ul>
        </div>
        <div className="flex-2 pl-16 sm:pl-24 max-w-screen-sm">
          <h2 className="comment pb-4">Sitemap</h2>
          <p className={`${styleList}`}>
            <NextLink href="/about">
              <a>About</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/about-this-website">
              <a>About&nbsp;this&nbsp;website</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/antilibrary">
              <a>Antilibrary</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/blog">
              <a>Blog</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/books">
              <a>Books</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/favorites">
              <a>Favorites</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/movies">
              <a>Movies</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/now">
              <a>Now</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/portfolio">
              <a>Portfolio</a>
            </NextLink>
            &nbsp;—{" "}
            <NextLink href="/recipe-book">
              <a>Recipe&nbsp;Book</a>
            </NextLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
