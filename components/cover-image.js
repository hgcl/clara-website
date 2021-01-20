import cn from "classnames";
import Link from "next/link";
import { RECIPE_FOLDER, BLOG_FOLDER } from "../lib/constants";

export default function CoverImage({ title, src, slug, type }) {
  console.log(type);
  const folder = type === "isRecipe" ? RECIPE_FOLDER : BLOG_FOLDER;
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${folder}/${slug}`} href={`/${folder}/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
