export default function Column({ children, size }) {
  return <div className={`flex-${size} min-w-128`}>{children}</div>;
}
