import React from "react";

const BurgerIcon = ({ open, ...props }) => (
  <div
    className={`${
      open ? "burger-menu open" : "burger-menu"
    } z-100 inline-block fixed bottom-lg right-md cursor-pointer w-4xl h-4xl`}
    {...props}
  >
    <div className="bar1 bg-white absolute h-4 w-xl top-md left-12"></div>
    <div className="bar2 bg-white absolute h-4 w-xl top-lg left-12"></div>
    <div className="bar3 bg-white absolute h-4 w-xl top-xl left-12"></div>
  </div>
);

export default BurgerIcon;
