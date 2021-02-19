import React from "react";

function NoteIcon({ className, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 19"
      className={`${className} fill-current`}
      width={width || "12"}
      focusable="false"
      aria-hidden="true"
    >
      <g>
        <path d="M17,0H3A3,3,0,0,0,0,3V13a3,3,0,0,0,3,3H6.71l2.8,2.79a.68.68,0,0,0,1,0L13.29,16H17a3,3,0,0,0,3-3V3A3,3,0,0,0,17,0Zm1,13a1,1,0,0,1-1,1H12.46l-.58.58L10,16.46,8.12,14.58,7.54,14H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H17a1,1,0,0,1,1,1Z" />
        <path d="M15,5H5A1,1,0,0,0,5,7H15a1,1,0,0,0,0-2Z" />
        <path d="M13,9H5a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
      </g>
    </svg>
  );
}

export default NoteIcon;
