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
          className={`${dropdownRow} ${commonStyle} hover:text-accent focus:text-accent active:text-accent text-gray-dark`}
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
        <>
          <div
            className="z-10 absolute -top-8 left-0 h-full w-full"
            onClick={() => setOpen(!open)}
          />
          <motion.div
            className="relative z-20"
            exit={{ opacity: 0 }}
            onMouseLeave={() => setOpen(false)}
          >
            <div
              className={`${
                widthModal || "w-24"
              } ${commonStyle} absolute flex flex-col top-0 left-0 rounded-t rounded-b min-h-full -mt-12 pt-2 pb-2`}
            >
              <button
                role="button"
                className={`${dropdownRow} ${commonStyle} all-small-caps flex flex-row items-center`}
                onClick={() => setOpen(!open)}
              >
                <span className="pr-2">{title}</span>
                <span>
                  <ArrowIcon />
                </span>
              </button>
              {itemsMapped()}
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
