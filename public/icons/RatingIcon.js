import React from "react";

export function RatingIconFull({ className, width, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      className={`${className} fill-current`}
      focusable="false"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.64,2.39l2.72,5.47,6.08.87a.7.7,0,0,1,.38,1.19l-4.39,4.26,1,6a.7.7,0,0,1-1,.74L12,18.08,6.57,20.92a.7.7,0,0,1-1-.74l1-6L2.2,9.92a.7.7,0,0,1,.38-1.19l6.08-.87,2.72-5.47A.7.7,0,0,1,12.64,2.39Z" />
    </svg>
  );
}

export function RatingIconEmpty({ className, width, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      fillOpacity="0.3"
      className={`${className} fill-current`}
      focusable="false"
      aria-hidden="true"
      {...props}
    >
      <path d="M12,5.62l1.56,3.13.46.94,1,.15,3.45.49L16,12.74l-.76.73.18,1,.59,3.41-3.11-1.62L12,15.83l-.92.48L8,17.93l.59-3.41.18-1L8,12.74,5.5,10.33,9,9.84l1-.15.47-.94L12,5.62M12,2a.7.7,0,0,0-.63.39L8.66,7.86l-6.08.87A.7.7,0,0,0,2.2,9.92l4.4,4.26-1,6a.7.7,0,0,0,.69.82.72.72,0,0,0,.32-.08L12,18.08l5.44,2.84a.79.79,0,0,0,.32.08.7.7,0,0,0,.69-.82l-1-6,4.39-4.26a.7.7,0,0,0-.38-1.19l-6.08-.87L12.64,2.39A.7.7,0,0,0,12,2Z" />
    </svg>
  );
}
