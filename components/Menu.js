import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "../components/BurgerIcon";
import Link from "./link";

const overlayStyle = {
  // TODO get these inline styles in theme
  background: '#a52722',
  opacity: 0.93,
};

const contentStyle = {
  width: "80%",
  border: "none",
};

const Menu = () => (
  <Popup
    modal
    overlayStyle={overlayStyle}
    contentStyle={contentStyle}
    closeOnDocumentClick={false}
    trigger={(open) => <BurgerIcon open={open} />}
  >
    {(close) => (
      <div className="menu w-full block text-center p-0">
        <ul className="relative text-3xl">
          <li onClick={close}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={close}>
            <Link href="/blog">Writing</Link>
          </li>
          <li onClick={close}>
            <Link href="https://clarasbooks.vercel.app/">Reading</Link>
          </li>
        </ul>
      </div>
    )}
  </Popup>
);

export default Menu;
