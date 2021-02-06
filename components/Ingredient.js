// hRecipe microformats (ingredient list)

import Link from "./link";

export default function Ingredient({ v, t, i, link, notList, optional }) {
  const details = (
    <>
      <span className="value">{v && v}</span>{" "}
      <span className="type">{t && t}</span>{" "}
      {link ? <Link href={link}>{i}</Link> : i}
      <span className="comment">&emsp;{optional && "optional"}</span>
    </>
  );
  return (
    <>
      {notList ? (
        <span className="ingredient">{details}</span>
      ) : (
        <li className="ingredient">{details}</li>
      )}
    </>
  );
}
