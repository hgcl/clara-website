import Link from "next/link";
import { RECIPE_FOLDER, BLOG_FOLDER } from "../lib/constants";

export default function CoverImage({ title, src, slug, type, className }) {
  const folder = type === "isRecipe" ? RECIPE_FOLDER : BLOG_FOLDER;
  const image = (
    <img src={src} alt={`Cover Image for ${title}`} className={className} />
  );
  return (
    <>
      {slug ? (
        <Link as={`/${folder}/${slug}`} href={`/${folder}/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
}
