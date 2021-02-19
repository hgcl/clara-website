import React from "react";

function ArrowIcon({ className, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${className} fill-current`}
      height={height || "16"}
      focusable="false"
      aria-hidden="true"
    >
      <g>
        <path d="M12,16.92a1.23,1.23,0,0,1-.85-.35L4.29,9.71A1,1,0,0,1,5.71,8.29L12,14.58l6.29-6.29a1,1,0,0,1,1.42,1.42l-6.86,6.86A1.23,1.23,0,0,1,12,16.92Z" />
      </g>
    </svg>
  );
}

export default ArrowIcon;
