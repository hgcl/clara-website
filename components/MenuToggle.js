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
  const menu = (
    <style jsx>{`
      .open-menu,
      .closed-menu {
        z-index: 50;
        cursor: pointer;
        position: fixed;
        color: var(--color-accent);
        background-color: transparent;
      }
      .open-menu {
        top: 2rem;
        right: 2rem;
        width: 3rem;
        font-size: 1.5rem;
        line-height: 0.5;
      }
      .hidden-menu-toggle {
        top: -3rem;
      }
      .closed-menu {
        top: var(--margin-bottom-small);
        right: 1rem;
        width: 2.5rem;
        transform: rotate(0);
        transition-duration: 300ms;
      }
      .closed-menu:focus,
      .open-menu:focus {
        color: var(--color-accent-focus);
      }
      .closed-menu:hover,
      .closed-menu:active {
        color: var(--color-accent-focus);
        transform: rotate(-60deg);
      }

      @media screen and (min-width: 768px) {
        .closed-menu {
          width: 3rem;
          right: var(--padding-sides-default);
        }
      }
    `}</style>
  );
  return (
    <>
      {setHook ? (
        <button aria-label="Close menu" className="open-menu" onClick={toggle}>
          {menu}
          {CLOSE}
        </button>
      ) : (
        <button
          aria-label="Menu"
          className={`closed-menu ${position}`}
          onClick={toggle}
        >
          {menu}
          <Logo />
        </button>
      )}
    </>
  );
};

export default MenuToggle;
