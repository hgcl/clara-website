import NextLink from "next/link";
import { CLOSE } from "../lib/constants";
import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A modal is an overlay that focuses the customer's attention on a single task or set of controls.
 * It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it.
 * Users must interact with the modal window before they can return to the parent application.
 */
const Menu = ({ open, hideCloseButton, setOpen }) => {
  const ulStyle =
    "flex-1 font-serif text-lg sm:text-2xl max-w-3xl mx-auto px-8";
  const liStyle = "pl-2";
  const linkStyle = "hover:text-gray-darkest focus:text-gray-darkest";

  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        setOpen(false);
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div key="modal" exit={{ opacity: 0 }}>
          {/* Modal container / overlay */}
          <div
            className="z-50 fixed w-screen h-screen"
            onClick={() => setOpen(false)}
          >
            {/* Modal pop-up */}
            <div
              className="fixed top-0 left-0 flex flex-col h-screen w-screen m-auto bg-accent-dark text-gray-lightest  justify-center items-center"
              onClick={() => setOpen(false)}
            >
              {!hideCloseButton && (
                <div className="absolute top-4 right-8 text-4xl">
                  <button onClick={() => setOpen(false)}>{CLOSE}</button>
                </div>
              )}
              <nav className="sm:flex text-center sm:text-left">
                <ul className={ulStyle}>
                  <li className={liStyle}>
                    <NextLink href="/">
                      <a className={linkStyle}>Home</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                </ul>
                <ul className={ulStyle}>
                  <li className={liStyle}>
                    <NextLink href="/about">
                      <a className={linkStyle}>About</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                  <li className={liStyle}>
                    <NextLink href="/about-this-website">
                      <a className={linkStyle}>About&nbsp;this&nbsp;website</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                  <li className={liStyle}>
                    <NextLink href="/antilibrary">
                      <a className={linkStyle}>Antilibrary</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                  <li className={liStyle}>
                    <NextLink href="/blog">
                      <a className={linkStyle}>Blog</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                  <li className={liStyle}>
                    <NextLink href="/books">
                      <a className={linkStyle}>Books</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                </ul>
                <ul className={ulStyle}>
                  <li className={liStyle}>
                    <NextLink href="/favorites">
                      <a className={linkStyle}>Favorites</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                  <li className={liStyle}>
                    <NextLink href="/movies">
                      <a className={linkStyle}>Movies</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                  <li className={liStyle}>
                    <NextLink href="/now">
                      <a className={linkStyle}>Now</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                  <li className={liStyle}>
                    <NextLink href="/portfolio">
                      <a className={linkStyle}>Portfolio</a>
                    </NextLink>
                    {/* {pageSeparator} */}
                  </li>
                  <li className={liStyle}>
                    <NextLink href="/recipe-book">
                      <a className={linkStyle}>Recipe&nbsp;Book</a>
                    </NextLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Menu.displayName = "Modal";

Menu.propTypes = {
  /** is modal open */
  open: PropTypes.bool,
  /** modal container by default document.body */
  container: PropTypes.bool,
  /** called on click close modal */
  onClose: PropTypes.bool,
  /** flag removes close button if enabled */
  hideCloseButton: PropTypes.bool,
};

export default Menu;
