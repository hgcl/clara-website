export default function Flex({ children, earlyBreakpoint, className }) {
  return (
    <div
      className={`flex flex-col ${
        earlyBreakpoint ? "lg:flex-row" : "md:flex-row"
      } ${className}`}
    >
      {children}
    </div>
  );
}
