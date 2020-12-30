export default function Comment({ children }) {
  return (
    <p
      className="text-gray-regular tracking-wide"
      style={{ "font-variant-caps": "all-small-caps" }}
    >
      {children}
    </p>
  );
}
