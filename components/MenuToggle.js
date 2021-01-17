import * as React from "react";
import Dot from "../public/icons/Dot";

export const MenuToggle = ({ toggle, className }) => (
  <button aria-label="Menu" onClick={toggle} className={`${className}`}>
    <Dot width="w-8 md:w-12" fill="fill-current text-accent" opacity="0.7" />
  </button>
);
