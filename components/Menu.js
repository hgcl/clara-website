import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "../components/BurgerIcon";

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
          <li className="cursor-pointer hover:text-black" onClick={close}>
            Home
          </li>
          <li onClick={close}>Getting Started</li>
          <li onClick={close}>Component API</li>
          <li onClick={close}>Use Case - Tooltip</li>
          <li onClick={close}>Use Case - Modal</li>
          <li onClick={close}>Use Case - Menu</li>
          <li onClick={close}>Contributing</li>
        </ul>
      </div>
    )}
  </Popup>
);

export default Menu;
