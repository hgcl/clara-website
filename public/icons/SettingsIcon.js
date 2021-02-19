import React from "react";

function SettingsIcon({ className, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 12"
      className={`${className} fill-current`}
      width={width || "18"}
      focusable="false"
      aria-hidden="true"
    >
      <g>
        <path d="M19,8H9.82A3,3,0,0,0,4.18,8H1a1,1,0,0,0,0,2H4.18a3,3,0,0,0,5.64,0H19a1,1,0,0,0,0-2ZM7,10A1,1,0,1,1,8,9,1,1,0,0,1,7,10Z" />
        <path d="M1,4h9.18a3,3,0,0,0,5.64,0H19a1,1,0,0,0,0-2H15.82a3,3,0,0,0-5.64,0H1A1,1,0,0,0,1,4ZM13,2a1,1,0,1,1-1,1A1,1,0,0,1,13,2Z" />
      </g>
    </svg>
  );
}

export default SettingsIcon;
