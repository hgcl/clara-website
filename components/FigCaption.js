export default function FigCaption({ children }) {
  return (
    <figcaption
      className="text-gray-regular mt-2 tracking-wide"
      style={{ "font-variant-caps": "all-small-caps" }}
    >
      {children}
    </figcaption>
  );
}
