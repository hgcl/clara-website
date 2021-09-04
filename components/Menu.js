import Link from "./link";
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
            className="fixed w-screen h-screen"
            onClick={() => setOpen(false)}
          >
            {/* Modal pop-up */}
            <div
              className="fixed top-0 left-0 flex flex-col h-screen w-screen m-auto bg-accent-dark text-gray-lightest text-center justify-center items-center"
              onClick={() => setOpen(false)}
            >
              {!hideCloseButton && (
                <div className="absolute top-4 right-8 text-4xl">
                  <button onClick={() => setOpen(false)}>{CLOSE}</button>
                </div>
              )}
              <ul className="relative text-3xl list-none">
                <li onClick={() => setOpen(false)}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="/about">About</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="/now">Now</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="/blog">Writing</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="/books">Reading</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
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
