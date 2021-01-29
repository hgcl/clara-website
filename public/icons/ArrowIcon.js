import React from "react";

function ArrowIcon({ className, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 492.432 492.432"
      className={`${className} fill-current`}
      height={height || "12"}
      focusable="false"
      aria-hidden="true"
    >
      <g>
        <path
          id="XMLID_135_"
          d="M142.238,492.432c-9.79,0-19.588-3.736-27.05-11.209c-14.945-14.934-14.945-39.162,0-54.098l180.9-180.909
		l-180.9-180.91c-14.945-14.935-14.945-39.163,0-54.098c14.926-14.944,39.172-14.944,54.098,0l207.96,207.958
		c14.943,14.935,14.943,39.164,0,54.1l-207.96,207.957C161.824,488.697,152.026,492.432,142.238,492.432z"
        />
      </g>
    </svg>
  );
}

export default ArrowIcon;
