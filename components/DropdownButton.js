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

  return (
    <div className={marginRight}>
      <label>
        <button
          className={`${
            widthButton || "w-20"
          } relative flex flex-row items-center mx-2 mt-1 all-small-caps`}
          aria-label={title}
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setOpen(!open)}
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
            <ArrowIcon />
          </span>
        </button>
      </label>
      <OpenDropdown
        title={title}
        open={open}
        setOpen={setOpen}
        setHook={setHook}
        itemsArray={itemsArray}
        widthModal={widthModal}
      />
    </div>
  );
}
