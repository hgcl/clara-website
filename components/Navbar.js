import React, { useState } from "react";
import NextLink from "next/link";
import { MenuToggle } from "./MenuToggle";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const ulStyle =
    "flex-1 font-serif text-xl sm:text-2xl max-w-2xl mx-auto px-8";
  const liStyle = "py-1 sm:py-0";
  const linkStyle = "hover:text-gray-darkest focus:text-gray-darkest";

  return (
    <nav className="z-40 relative">
      <MenuToggle toggle={handleToggle} setHook={navbarOpen} />
      {navbarOpen && (
        <div
          onClick={() => setNavbarOpen(false)}
          className="flex flex-col items-center justify-center fixed top-0 left-0 h-screen w-screen bg-accent-dark text-center sm:text-left text-gray-lightest"
        >
          <div className="sm:flex">
            <ul className={ulStyle}>
              <li className={liStyle}>
                <NextLink href="/">
                  <a className={linkStyle}>Home</a>
                </NextLink>
              </li>
            </ul>
            <ul className={ulStyle}>
              <li className={liStyle}>
                <NextLink href="/about">
                  <a className={linkStyle}>About</a>
                </NextLink>
              </li>
              <li className={liStyle}>
                <NextLink href="/about-this-website">
                  <a className={linkStyle}>About&nbsp;this&nbsp;website</a>
                </NextLink>
              </li>
              <li className={liStyle}>
                <NextLink href="/antilibrary">
                  <a className={linkStyle}>Antilibrary</a>
                </NextLink>
              </li>
              <li className={liStyle}>
                <NextLink href="/blog">
                  <a className={linkStyle}>Blog</a>
                </NextLink>
              </li>
              <li className={liStyle}>
                <NextLink href="/books">
                  <a className={linkStyle}>Books</a>
                </NextLink>
              </li>
            </ul>
            <ul className={ulStyle}>
              <li className={liStyle}>
                <NextLink href="/favorites">
                  <a className={linkStyle}>Favorites</a>
                </NextLink>
              </li>
              <li className={liStyle}>
                <NextLink href="/movies">
                  <a className={linkStyle}>Movies</a>
                </NextLink>
              </li>
              <li className={liStyle}>
                <NextLink href="/now">
                  <a className={linkStyle}>Now</a>
                </NextLink>
              </li>
              <li className={liStyle}>
                <NextLink href="/portfolio">
                  <a className={linkStyle}>Portfolio</a>
                </NextLink>
              </li>
              <li className={liStyle}>
                <NextLink href="/recipe-book">
                  <a className={linkStyle}>Recipe&nbsp;Book</a>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
