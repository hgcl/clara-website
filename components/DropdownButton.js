import { useState } from "react";
import ArrowIcon from "../public/icons/ArrowIcon";
import OpenDropdown from "./OpenDropdown";

export default function DropdownButton({ yearFilter, setYear, itemsArray }) {
  const [open, setOpen] = useState(false);
  const closeDropdown = () => setOpen(false);

  return (
    <>
      <label className="relative z-20">
        <button
          className="z-20 flex flex-row items-center w-20 mx-2 mt-1"
          aria-label="Select Year"
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={() => setOpen((o) => !o)}
        >
          <span className="pr-3">{yearFilter === 0 ? "Year" : yearFilter}</span>
          <span className="w-full">
            <ArrowIcon className="transform rotate-90" />
          </span>
        </button>
      </label>
      <OpenDropdown
        open={open}
        closeDropdown={closeDropdown}
        setYear={setYear}
        itemsArray={itemsArray}
      />
    </>
  );
}
