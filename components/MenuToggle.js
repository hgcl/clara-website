import React, { useState, useEffect } from "react";
import { debounce } from "../lib/helpers";
import Logo from "../public/icons/Logo";
import { CLOSE } from "../lib/constants";

export const MenuToggle = ({ toggle, setHook }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const position = !visible && "hidden-menu-toggle";

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const menuIsOpen = (
    <style jsx>{`
      .menu {
        z-index: 50;
        cursor: pointer;
        position: fixed;
        top: 2rem;
        right: 2rem;
        width: 3rem;
        font-size: 1.5rem;
        line-height: 0.5;
        color: var(--color-text-reversed);
        background-color: transparent;
      }
      @media (prefers-color-scheme: dark) {
        .menu {
          color: var(--color-text-default);
        }
      }
      .menu:hover,
      .menu:focus {
        color: var(--color-text-default);
        transition-duration: 300ms;
      }
      @media (prefers-color-scheme: dark) {
        .menu:hover,
        .menu:focus {
          color: var(--color-text-reversed);
        }
      }
    `}</style>
  );
  const menuIsClosed = (
    <style jsx>{`
      .menu {
        z-index: 50;
        cursor: pointer;
        position: fixed;
        top: var(--margin-bottom-small);
        right: 1rem;
        width: 2.5rem;
        background-color: transparent;
        color: var(--color-accent-default);
        transform: rotate(0);
        transition-duration: 300ms;
      }
      .menu:hover {
        color: var(--color-accent-focus);
        transform: rotate(-60deg);
      }
      .hidden-menu-toggle {
        top: -3rem;
      }

      @media screen and (min-width: 768px) {
        .menu {
          width: 3rem;
          right: var(--padding-sides-default);
        }
      }
    `}</style>
  );
  return (
    <>
      {setHook ? (
        <button aria-label="Close menu" className="menu" onClick={toggle}>
          {menuIsOpen}
          {CLOSE}
        </button>
      ) : (
        <button
          aria-label="Menu"
          className={`menu ${position}`}
          onClick={toggle}
        >
          {menuIsClosed}
          <Logo />
        </button>
      )}
    </>
  );
};

export default MenuToggle;
