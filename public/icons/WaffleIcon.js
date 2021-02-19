// TO REPLACE WITH OWN ICON
import React from "react";

function WaffleIcon({ className, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`${className} fill-current`}
      focusable="false"
      aria-hidden="true"
      width={height || 20}
      height={height || 20}
    >
      <path d="M15.41,10l4.3-4.29a1,1,0,1,0-1.42-1.42L14,8.59,11.41,6l4.3-4.29A1,1,0,1,0,14.29.29L10,4.59,5.71.29A1,1,0,0,0,4.29,1.71L8.59,6,6,8.59,1.71,4.29A1,1,0,0,0,.29,5.71L4.59,10,.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L6,11.41,8.59,14l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L10,15.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,14,14,11.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM10,12.59,7.41,10,10,7.41,12.59,10Z" />
    </svg>
  );
}

export default WaffleIcon;
