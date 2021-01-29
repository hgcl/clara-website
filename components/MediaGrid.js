import MediaTile from "./MediaTile";
import { getYear } from "date-fns";

export default function MediaGrid({ children }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    gridTemplateColumns: "repeat(auto-fill, minmax(8rem, 1fr))",
  };

  return (
    <>
      <section
        className="grid gap-x-1 xs:gap-x-4 gap-y-8 mt-6"
        style={gridStyle}
      >
        {children}
      </section>
    </>
  );
}
