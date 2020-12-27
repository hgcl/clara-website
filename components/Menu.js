import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "../components/BurgerIcon";
import Link from "./link";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none",
};

const Menu = () => (
  <Popup
    modal
    overlayStyle={{ background: "rgba(255,255,255,0.98" }}
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
