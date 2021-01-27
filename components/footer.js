import NextLink from "next/link";

export default function Footer() {
  const ulStyle = "font-serif text-lg sm:text-2xl";
  const liStyle = "sm:inline-block";
  const pageSeparator = <span className="hidden sm:inline">&nbsp;— </span>;
  return (
    <footer className="z-0 h-96 sm:h-72 sticky right-0 bottom-0 bg-black text-gray-regular text-right">
      <div className="flex flex-row flex-wrap max-w-5xl my-auto ml-auto px-8 pt-8">
        <div className="flex-1 pb-8">
          <h2 className="comment pb-4">Social</h2>
          <ul className={`${ulStyle} list-none`}>
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
          <ul className={`${ulStyle} list-none`}>
            <li className={liStyle}>
              <NextLink href="/about">
                <a>About</a>
              </NextLink>
            </li>
            <li className={liStyle}>
              {pageSeparator}
              <NextLink href="/about-this-website">
                <a>About&nbsp;this&nbsp;website</a>
              </NextLink>
            </li>
            <li className={liStyle}>
              {pageSeparator}
              <NextLink href="/antilibrary">
                <a>Antilibrary</a>
              </NextLink>
            </li>
            {pageSeparator}
            <li className={liStyle}>
              <NextLink href="/blog">
                <a>Blog</a>
              </NextLink>
            </li>
            <li className={liStyle}>
              {pageSeparator}
              <NextLink href="/books">
                <a>Books</a>
              </NextLink>
            </li>
            <li className={liStyle}>
              {pageSeparator}
              <NextLink href="/favorites">
                <a>Favorites</a>
              </NextLink>
            </li>
            <li className={liStyle}>
              {pageSeparator}
              <NextLink href="/movies">
                <a>Movies</a>
              </NextLink>
            </li>
            <li className={liStyle}>
              {pageSeparator}
              <NextLink href="/now">
                <a>Now</a>
              </NextLink>
            </li>
            <li className={liStyle}>
              {pageSeparator}
              <NextLink href="/portfolio">
                <a>Portfolio</a>
              </NextLink>
              {pageSeparator}
            </li>
            <li className={liStyle}>
              <NextLink href="/recipe-book">
                <a>Recipe&nbsp;Book</a>
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
