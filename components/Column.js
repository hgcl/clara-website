export default function Column({ children, size }) {
  return (
    <div className={`flex-${size}`}>
      {children}
    </div>
  );
}
