import { useState } from "react";
import ArrowIcon from "../public/icons/ArrowIcon";
import OpenDropdown from "./OpenDropdown";

export default function DropdownButton({
  filter,
  itemsArray,
  marginRight,
  setHook,
  title,
}) {
  const [open, setOpen] = useState(false);
  const closeDropdown = () => setOpen(false);

  return (
    <div className={marginRight}>
      <label>
        <button
          className="relative z-20 flex flex-row items-center w-18 mx-2 mt-1"
          aria-label={title}
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={() => setOpen((o) => !o)}
        >
          <span className="pr-2">{filter === 0 ? title : filter}</span>
          <span className="w-full">
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
