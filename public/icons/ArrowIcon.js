// TO REPLACE WITH OWN ICON
import React from "react";

function ArrowIcon({ className, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 492.4 492.4"
      className={`${className} fill-current`}
      height={height || "12"}
      focusable="false"
      aria-hidden="true"
    >
      <g>
        <path d="M0,142.2c0-9.8,3.7-19.6,11.2-27.1c14.9-14.9,39.2-14.9,54.1,0l180.9,180.9l180.9-180.9c14.9-14.9,39.2-14.9,54.1,0c14.9,14.9,14.9,39.2,0,54.1l-208,208c-14.9,14.9-39.2,14.9-54.1,0l-208-208C3.7,161.8,0,152,0,142.2z" />
      </g>
    </svg>
  );
}

export default ArrowIcon;
