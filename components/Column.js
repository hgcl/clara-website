export default function Column({ children, double }) {
  return (
    <div className={`${double ? "flex-2" : "flex-1"} md:mr-5`}>{children}</div>
  );
}
