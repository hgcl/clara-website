import React from "react";

const BurgerIcon = ({ open, ...props }) => (
  <div
    className={`${
      open ? "burger-menu open" : "burger-menu"
    } z-50 block fixed bg-transparent bottom-20 right-32 cursor-pointer w-4xl h-4xl`}
    {...props}
  >
    <div className="bg-transparent absolute h-6 w-10 top-6 left-12"></div>
    <div className="bar1 bg-white absolute h-1 w-10 top-6 left-12"></div>
    <div className="bar2 bg-white absolute h-1 w-10 top-8 left-12"></div>
    <div className="bar3 bg-white absolute h-1 w-10 top-10 left-12"></div>
  </div>
);

// TODO add menu animation https://codingislove.com/hamburger-navigation-bar/

export default BurgerIcon;
