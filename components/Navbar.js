import { useState, useEffect } from "react";
import Link from "./link";
import { MenuToggle } from "./MenuToggle";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        setNavbarOpen(false);
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  const ulStyle =
    "flex-1 font-serif text-xl sm:text-2xl max-w-2xl mx-auto px-8";
  const liStyle = "py-1 sm:py-0";
  const linkStyle = "hover:text-gray-darkest focus:text-gray-darkest";

  const navbarStyles = (
    <style jsx>{`
      nav {
        z-index: 40;
        position: relative;
      }
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--color-accent-subdued);
        color: var(--color-text-reversed);
        text-align: center;
      }
      .navbar > div > ul {
        margin: 0 1.5rem 0 1.5rem;
      }
      .navbar > div > ul > li {
        font-size: var(--font-size-h4);
        list-style-type: none;
        line-height: 1.3;
        margin: 0;
      }
      .navbar > div > ul > li > a:hover,
      .navbar > div > ul > li > a:focus {
        color: var(--color-text-default);
      }
      @media (prefers-color-scheme: dark) {
        .navbar {
          color: var(--color-text-default);
        }
        .navbar > div > ul > li > a:hover,
        .navbar > div > ul > li > a:focus {
          color: var(--color-text-reversed);
        }
      }
      @media screen and (min-width: 640px) {
        .navbar div {
          display: flex;
          text-align: left;
        }
      }
    `}</style>
  );
  return (
    <nav>
      {navbarStyles}
      <MenuToggle toggle={handleToggle} setHook={navbarOpen} />
      {navbarOpen && (
        <div
          onClick={() => setNavbarOpen(false)}
          className="navbar text-gray-lightest"
        >
          <div>
            <ul>
              <li>
                <Link variant="heading" href="/">
                  Home
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link variant="heading" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link variant="heading" href="/about-this-website">
                  About&nbsp;this&nbsp;website
                </Link>
              </li>
              <li>
                <Link variant="heading" href="/antilibrary">
                  Antilibrary
                </Link>
              </li>
              <li>
                <Link variant="heading" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link variant="heading" href="/books">
                  Books
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link variant="heading" href="/favorites">
                  Favorites
                </Link>
              </li>
              <li>
                <Link variant="heading" href="/movies">
                  Movies
                </Link>
              </li>
              <li>
                <Link variant="heading" href="/now">
                  Now
                </Link>
              </li>
              <li>
                <Link variant="heading" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link variant="heading" href="/recipe-book">
                  Recipe&nbsp;Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
