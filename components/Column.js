export default function Column({ children, size }) {
  return (
    <div className={`flex-${size} border-solid border-2 border-white`}>
      {children}
    </div>
  );
}
