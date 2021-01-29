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
  widthButton,
  widthModal,
}) {
  const [open, setOpen] = useState(false);
  const closeDropdown = () => setOpen(false);

  return (
    <div className={marginRight}>
      <label>
        <button
          className={`${
            widthButton || "w-20"
          } relative z-20 flex flex-row items-center mx-2 mt-1`}
          aria-label={title}
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={() => setOpen((o) => !o)}
        >
          <span className="pr-2 text-left">
            {filter === 0
              ? title
              : filter === itemsArray[1].value
              ? itemsArray[1].name
              : filter === itemsArray[2].value
              ? itemsArray[2].name
              : filter === itemsArray[3].value
              ? itemsArray[3].name
              : filter === itemsArray[4].value
              ? itemsArray[4].name
              : filter === itemsArray[5].value
              ? itemsArray[5].name
              : itemsArray[6].name}
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
        widthModal={widthModal}
      />
    </div>
  );
}
