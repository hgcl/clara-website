// Menu from this package https://react-popup.elazizi.com/

import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Link from "./link";

const Menu = () => (
  <Popup
    className="menu"
    modal
    trigger={(open) => <BurgerIcon aria-label="Menu" open={open} />}
  >
    {(close) => (
      <div
        onClick={close}
        className="menu top-0 left-0 w-screen h-screen text-center flex justify-center items-center"
      >
        <ul className="relative text-3xl list-none">
          <li onClick={close}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={close}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={close}>
            <Link href="/now">Now</Link>
          </li>
          <li onClick={close}>
            <Link href="/blog">Writing</Link>
          </li>
          <li onClick={close}>
            <Link href="/books">Reading</Link>
          </li>
          <li onClick={close}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    )}
  </Popup>
);

export default Menu;
