import React from "react";

function WaffleIcon({ className, height }) {
  const styles = (
    <style jsx>{`
      .waffle {
        margin: var(--margin-bottom-small) auto;
      }
    `}</style>
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="waffle"
      focusable="false"
      aria-hidden="true"
      width={height || 24}
      height={height || 24}
    >
      {styles}
      <path d="M17.35,12l4.3-4.29a1,1,0,0,0-1.42-1.42l-4.29,4.29L13.35,8l4.3-4.29a1,1,0,0,0-1.42-1.42L11.94,6.58,7.65,2.29A1,1,0,0,0,6.23,3.71L10.52,8,7.94,10.58,3.65,6.29A1,1,0,0,0,2.23,7.71L6.52,12,2.23,16.29a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.29-4.3L10.52,16,6.23,20.29a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.29-4.3,4.29,4.3a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L13.35,16l2.59-2.59,4.29,4.3a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Zm-5.41,2.58L9.35,12l2.59-2.59L14.52,12Z" />
    </svg>
  );
}

export default WaffleIcon;
