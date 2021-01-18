import Dot from "../public/icons/Dot";

export const MenuToggle = ({ toggle, className }) => (
  <button aria-label="Menu" onClick={toggle} className={className}>
    <Dot className="fill-current text-accent w-8 md:w-12" />
  </button>
);
