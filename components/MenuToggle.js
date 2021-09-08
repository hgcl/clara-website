import React, { useState, useEffect } from "react";
import { debounce } from "../lib/helpers";
import Logo from "../public/icons/Logo";
import { CLOSE } from "../lib/constants";

export const MenuToggle = ({ toggle, setHook }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const position = visible ? "top-0" : "-top-20";

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

  return (
    <>
      {setHook ? (
        <button
          aria-label="Close menu"
          className="z-50 fixed top-5 right-9 text-4xl text-gray-lightest hover:text-gray-darkest transition duration-300"
          onClick={toggle}
        >
          {CLOSE}
        </button>
      ) : (
        <button
          aria-label="Menu"
          className={`z-50 cursor-pointer fixed right-8 top-8 duration-300 ${position} transform hover:-rotate-90`}
          onClick={toggle}
        >
          <Logo className="fill-current  duration-300 text-accent hover:text-accent-light w-8 md:w-12" />
        </button>
      )}
    </>
  );
};

export default MenuToggle;
