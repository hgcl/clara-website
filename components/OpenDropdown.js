import { motion } from "framer-motion";
import ArrowIcon from "../public/icons/ArrowIcon";

export default function OpenDropdown({
  open,
  setHook,
  itemsArray,
  widthModal,
  title,
  setOpen,
}) {
  const commonStyle = "bg-white text-gray-dark";
  const dropdownRow = "w-full h-12 text-left px-2 pb-2 -my-2px";

  const itemsMapped = () => (
    <>
      {itemsArray.map((item) => (
        <button
          role="option"
          key={item.name}
          className={`${dropdownRow} ${commonStyle} pt-2 hover:text-accent focus:text-accent active:text-accent text-gray-dark`}
          onClick={() => {
            setHook(item.value);
            setOpen(!open);
          }}
        >
          {item.name}
        </button>
      ))}
    </>
  );

  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        setOpen(false);
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return (
    <>
      {open && (
        <motion.div
          className="relative z-10"
          exit={{ opacity: 0 }}
          onMouseLeave={() => setOpen(false)}
        >
          <div
            className={`${
              widthModal || "w-24"
            } ${commonStyle} absolute flex flex-col top-1 left-0 rounded-t h-full -mt-8 pt-2`}
          >
            <button
              role="button"
              className={`${dropdownRow} ${commonStyle} pb-2 all-small-caps flex flex-row items-center`}
              onClick={() => setOpen(!open)}
            >
              <span className="pr-2">{title}</span>
              <span>
                <ArrowIcon />
              </span>
            </button>
            {itemsMapped()}
            <div
              className={`${commonStyle} w-full h-full rounded-b pb-2`}
            ></div>
          </div>
        </motion.div>
      )}
    </>
  );
}
