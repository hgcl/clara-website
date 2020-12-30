export default function Column({ children, size }) {
  return <div className={`flex-${size} mr-5`}>{children}</div>;
}
