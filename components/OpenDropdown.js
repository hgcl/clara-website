import { motion } from "framer-motion";

export default function OpenDropdown({
  open,
  closeDropdown,
  setHook,
  itemsArray,
}) {
  const itemsMapped = () => (
    <>
      {itemsArray.map((item) => (
        <button
          role="option"
          key={item.name}
          className={`${dropdownOption} last:rounded-b pb-2`}
          onClick={() => {
            setHook(item.value);
            closeDropdown;
          }}
        >
          {item.name}
        </button>
      ))}
    </>
  );

  const dropdownOption =
    "w-full h-12 bg-black bg-opacity-90 px-2 text-left hover:bg-opacity-100 hover:text-accent focus:bg-opacity-100 focus:text-accent";

  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        closeDropdown();
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
          onMouseLeave={closeDropdown}
        >
          <div className="absolute flex flex-col top-0 left-0 rounded-t w-20 h-full bg-black bg-opacity-90 -mt-8 pt-10">
            {itemsMapped()}
          </div>
        </motion.div>
      )}
    </>
  );
}
