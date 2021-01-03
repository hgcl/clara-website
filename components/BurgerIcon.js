import React from "react";

const styleBar = "bg-white absolute h-1 left-12 w-10"

const BurgerIcon = ({ open, ...props }) => (
  <div
    className={`${
      open ? "burger-menu open" : "burger-menu"
    } z-50 block fixed bg-transparent cursor-pointer w-3xl w-4xl h-4xl top-1 md:top-2 right-28 md:right-32`}
    {...props}
  >
    <div className="bg-transparent absolute h-6 w-10 top-6 left-12"></div>
    <div className={`${styleBar} top-6`}></div>
    <div className={`${styleBar} top-8`}></div>
    <div className={`${styleBar} top-10`}></div>
  </div>
);

// TODO add menu animation https://codingislove.com/hamburger-navigation-bar/

export default BurgerIcon;
