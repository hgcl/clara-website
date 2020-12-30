export default function Column({ children, double }) {
  return <div className={`${double ? "flex-2" : "flex-1"} mr-5`}>{children}</div>;
}
