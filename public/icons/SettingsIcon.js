import React from "react";

function SettingsIcon({ className, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${className} fill-current`}
      width={width || "18"}
      focusable="false"
      aria-hidden="true"
    >
      <g>
        <path d="M21,14H11.82a3,3,0,0,0-5.64,0H3a1,1,0,0,0,0,2H6.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM9,16a1,1,0,1,1,1-1A1,1,0,0,1,9,16Z" />
        <path d="M3,10h9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2H17.82a3,3,0,0,0-5.64,0H3a1,1,0,0,0,0,2ZM15,8a1,1,0,1,1-1,1A1,1,0,0,1,15,8Z" />
      </g>
    </svg>
  );
}

export default SettingsIcon;
