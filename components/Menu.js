import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "../components/BurgerIcon";
import Link from "./link";

const overlayStyle = {
  background: '#801336',
  opacity: 0.95,
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
            <Link href="/">Link 1</Link>
          </li>
          <li onClick={close}>
            <Link href="/">Link 2</Link>
          </li>
          <li onClick={close}>
            <Link href="/">Link 3</Link>
          </li>
        </ul>
      </div>
    )}
  </Popup>
);

export default Menu;
