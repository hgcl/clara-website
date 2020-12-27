import React from "react";

const BurgerIcon = ({ open, ...props }) => (
  <div
    className={`${
      open ? "burger-menu open" : "burger-menu"
    } z-100 inline-block fixed bottom-10 right-5 cursor-pointer bg-white`}
    {...props}
  >
    <div className="bar1 w-12 h-3 bg-black mt-2" key="b1" />
    <div className="bar2 w-12 h-3 bg-black mt-2" key="b2" />
    <div className="bar3 w-12 h-3 bg-black mt-2" key="b3" />
  </div>
);

export default BurgerIcon;
