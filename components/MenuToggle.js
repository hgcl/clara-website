import Logo from "../public/icons/Logo";

export const MenuToggle = ({ toggle, className }) => (
  <button aria-label="Menu" onClick={toggle} className={className}>
    <Logo className="fill-current text-accent w-8 md:w-12" />
  </button>
);
