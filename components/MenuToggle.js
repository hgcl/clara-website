import Logo from "../public/icons/Logo";
import React, { useState, useEffect } from "react";
import { debounce } from "../lib/helpers";

export const MenuToggle = ({ toggle, className }) => {
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
    <button
      aria-label="Menu"
      onClick={toggle}
      className={`fixed right-8 top-8 duration-300 ${position} transform hover:-rotate-90 sm:opacity-80 hover:opacity-100`}
    >
      <Logo className="fill-current text-accent w-8 md:w-12" />
    </button>
  );
};
