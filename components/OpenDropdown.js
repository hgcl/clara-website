import { motion } from "framer-motion";

export default function OpenDropdown({ open, closeDropdown, setYear }) {
  const dropdownOption =
    "w-full h-12 bg-black bg-opacity-90 px-2 text-left hover:bg-opacity-100 hover:text-accent focus:bg-opacity-100 focus:text-accent";
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        closeDropdown;
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
          className="relative"
          exit={{ opacity: 0 }}
          onMouseLeave={() => closeDropdown}
        >
          <div className="z-10 absolute flex flex-col top-0 left-0 rounded-t w-24 h-full bg-black bg-opacity-90 -mt-8 pt-10">
            <button
              role="option"
              id="year_all"
              className={`${dropdownOption} active`}
              aria-selected="true"
              onClick={() => {
                setYear(0);
                closeDropdown;
              }}
            >
              All
            </button>
            <button
              role="option"
              id="year_2021"
              className={`${dropdownOption}`}
              aria-selected="false"
              onClick={() => {
                setYear(2021);
                closeDropdown;
              }}
            >
              2021
            </button>
            <button
              role="option"
              id="year_2020"
              className={`${dropdownOption} rounded-b pb-2`}
              aria-selected="false"
              onClick={() => {
                setYear(2020);
                closeDropdown;
              }}
            >
              2020
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
