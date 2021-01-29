import { useState } from "react";
import ArrowIcon from "../public/icons/ArrowIcon";
import OpenDropdown from "./OpenDropdown";

export default function DropdownButton({
  filter,
  itemsArray,
  marginRight,
  prefix,
  setHook,
  suffix,
  title,
  hideDefaultName,
}) {
  const [open, setOpen] = useState(false);
  const closeDropdown = () => setOpen(false);

  return (
    <div className={marginRight}>
      <label>
        <button
          className="relative z-20 flex flex-row items-center w-20 mx-2 mt-1"
          aria-label={title}
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={() => setOpen((o) => !o)}
        >
          <span className="pr-2 text-left">
            {hideDefaultName
              ? filter === 0
                ? title
                : prefix || null
              : filter === 0
              ? title
              : (prefix || null) + filter + (suffix || null)}
          </span>
          <span>
            <ArrowIcon className="transform rotate-90" />
          </span>
        </button>
      </label>
      <OpenDropdown
        open={open}
        closeDropdown={closeDropdown}
        setHook={setHook}
        itemsArray={itemsArray}
      />
    </div>
  );
}
