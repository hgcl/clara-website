// hRecipe microformats (ingredient list)

export default function Ingredient({ v, t, i, notList }) {
  return (
    <>
      {notList ? (
        <span className="ingredient">
          <span className="value">{v && v}</span>{" "}
          <span className="type">{t && t}</span> {i}
        </span>
      ) : (
        <li className="ingredient">
          <span className="value">{v && v}</span>{" "}
          <span className="type">{t && t}</span> {i}
        </li>
      )}
    </>
  );
}
