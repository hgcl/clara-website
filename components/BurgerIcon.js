import React from "react";

const styleBar = "bg-white absolute h-1 w-10 left-1 top-1";

const BurgerIcon = ({ open, ...props }) => (
  <button
    className={`${
      open ? "burger-menu open" : "burger-menu"
    } z-50 bg-transparent fixed h-8 w-12 top-6 md:top-8 right-4 md:right-10`}
    {...props}
  >
    <div className={`${styleBar}`}></div>
    <div className={`${styleBar} top-3`}></div>
    <div className={`${styleBar} top-5`}></div>
  </button>
);

// TODO add menu animation https://codingislove.com/hamburger-navigation-bar/

export default BurgerIcon;
