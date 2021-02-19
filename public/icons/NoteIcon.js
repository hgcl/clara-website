import React from "react";

function NoteIcon({ className, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${className} fill-current`}
      width={width || "14"}
      focusable="false"
      aria-hidden="true"
    >
      <g>
        <path d="M19,3H5A3,3,0,0,0,2,6V16a3,3,0,0,0,3,3H8.71l2.8,2.79a.68.68,0,0,0,1,0L15.29,19H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,13a1,1,0,0,1-1,1H14.46l-.58.58L12,19.45l-1.88-1.87L9.54,17H5a1,1,0,0,1-1-1V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1Z" />
        <path d="M17,8H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
        <path d="M15,12H7a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
      </g>
    </svg>
  );
}

export default NoteIcon;
