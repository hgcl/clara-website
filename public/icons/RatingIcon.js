import React from "react";

export function RatingIconFull({ className, width, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.05 19"
      width={width}
      className={`${className} fill-current`}
      focusable="false"
      aria-hidden="true"
      {...props}
    >
      <path d="M10.65.39l2.72,5.47,6.08.87a.7.7,0,0,1,.39,1.19l-4.4,4.26,1,6a.7.7,0,0,1-1,.74L10,16.08,4.59,18.92a.7.7,0,0,1-1-.74l1-6L.21,7.92A.69.69,0,0,1,.6,6.74l6.08-.88L9.4.39A.7.7,0,0,1,10.65.39Z" />
    </svg>
  );
}

export function RatingIconEmpty({ className, width, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.05 19"
      width={width}
      fillOpacity="0.3"
      className={`${className} fill-current`}
      focusable="false"
      aria-hidden="true"
      {...props}
    >
      <path d="M10,3.62l1.55,3.13.47.94,1,.15,3.45.49-2.49,2.41-.76.74.18,1,.59,3.41L11,14.31,10,13.83l-.93.48L6,15.93l.59-3.41.18-1L6,10.74,3.52,8.33,7,7.84l1-.15.47-.94L10,3.62M10,0A.7.7,0,0,0,9.4.39L6.68,5.86.6,6.74A.69.69,0,0,0,.21,7.92l4.4,4.26-1,6a.71.71,0,0,0,.69.82.67.67,0,0,0,.33-.08L10,16.08l5.44,2.84a.61.61,0,0,0,.32.08.7.7,0,0,0,.69-.82l-1-6,4.4-4.26a.7.7,0,0,0-.39-1.19l-6.08-.87L10.65.39A.67.67,0,0,0,10,0Z" />
    </svg>
  );
}
