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
        font-size: 1.5rem;
        line-height: 0;
        color: var(--color-text-reversed);
        background-color: transparent;
      }
      .menu:hover {
        color: var(--color-text);
        transition-duration: 300ms;
      }
    `}</style>
  );
  const menuIsClosed = (
    <style jsx>{`
      .menu {
        z-index: 50;
        cursor: pointer;
        position: fixed;
        top: 1.25rem;
        right: 2.25rem;
        background-color: transparent;
        color: var(--color-accent-default);
        width: 2rem;
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
