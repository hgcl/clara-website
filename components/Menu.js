import Link from "./link";
import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A modal is an overlay that focuses the customer's attention on a single task or set of controls.
 * It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it.
 * Users must interact with the modal window before they can return to the parent application.
 */
const Menu = React.forwardRef(
  ({ open, container, hideCloseButton, onClose, ...props }, ref) => (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          exit={{ opacity: 0 }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
        >
          {/* Modal container / overlay */}
          <div
            {...props}
            className="border-2 border-red-500 fixed w-screen h-screen"
            ref={ref}
            onClick={onClose}
          >
            {/* Modal pop-up */}
            <div
              className="border-2 border-green-500 fixed top-0 left-0 flex flex-col h-screen w-screen m-auto bg-accent2 bg-opacity-90 text-center justify-center items-center"
              onClick={onClose}
              style={
                {
                  // opacity: open ? 1.0 : 0,
                  // animation: open
                  //   ? "none"
                  //   : `0% { top: 131px; }
                  // 30% { top: 125px; } 0.4s`,
                  // transition: "all ease 0.2s",
                  // transitionDelay: "0.2s",
                }
              }
            >
              {!hideCloseButton && (
                <div className="absolute top-0 right-0 py-0 px-4 text-3xl">
                  <button onClick={onClose}>&times;</button>
                </div>
              )}
              <ul className="relative text-3xl list-none">
                <li onClick={onClose}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={onClose}>
                  <Link href="/about">About</Link>
                </li>
                <li onClick={onClose}>
                  <Link href="/now">Now</Link>
                </li>
                <li onClick={onClose}>
                  <Link href="/blog">Writing</Link>
                </li>
                <li onClick={onClose}>
                  <Link href="/books">Reading</Link>
                </li>
                <li onClick={onClose}>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
);

Menu.displayName = "Modal";

// Menu.defaultProps = {
//   container: document.body,
// };

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
