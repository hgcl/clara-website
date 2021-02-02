import React from "react";

function WaffleIcon({ className, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 479.3 479.3"
      strokeWidth="45"
      className={`${className} stroke-current`}
      focusable="false"
      aria-hidden="true"
      width={height || 24}
      height={height || 24}
    >
      <g>
        <line class="st0" x1="19.7" y1="109.6" x2="369.7" y2="459.6" />
        <line class="st0" x1="109.7" y1="19.6" x2="459.7" y2="369.6" />
        <line class="st0" x1="459.6" y1="109.6" x2="109.6" y2="459.6" />
        <line class="st0" x1="369.6" y1="19.6" x2="19.6" y2="369.6" />
      </g>
    </svg>
  );
}

export default WaffleIcon;
