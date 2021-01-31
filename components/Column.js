export default function Column({ children, double, lastColumn, className }) {
  return (
    <div
      className={`${className} ${double ? "flex-2" : "flex-1"} ${
        !lastColumn && "md:mr-8"
      }`}
    >
      {children}
    </div>
  );
}
