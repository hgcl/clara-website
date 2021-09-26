import * as React from "react";
import CoverImage from "./cover-image";
import Link from "./link";
import {
  RECIPE_FOLDER,
  DOT,
  RECIPE_DIFFULTY_ARRAY,
  RECIPE_DURATION_ARRAY,
  STAR,
} from "../lib/constants";

export default function PostPreview({
  categories,
  coverImage,
  // date,
  difficulty,
  duration,
  excerpt,
  favorite,
  slug,
  title,
  type,
}) {
  const styles = (
    <style jsx>{`
      .tile h3 {
        text-align: center;
        margin-top: 1rem;
      }
      .tile > div {
        position: relative;
      }
      .tile .star {
        z-index: 10;
        position: absolute;
        top: 1rem;
        left: 1rem;
      }
      /* Appears on hover */
      .tile-hover {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .tile-hover:hover {
        opacity: 1;
        background-color: var(--color-bg-transparent);
        border-radius: 0.2rem;
      }
      .tile-hover > * {
        color: var(--color-text-reversed);
        font-size: var(--font-size-p);
        line-height: var(--line-height-p);
        text-align: center;
        padding: 0.5rem;
      }
      .tile-hover > .p-summary {
        font-family: var(--font-family-body);
        font-variant-caps: normal;
      }

      /* Dark mode */
      @media (prefers-color-scheme: dark) {
        .tile-hover > * {
          color: var(--color-text-default);
        }
      }
    `}</style>
  );
  return (
    <div className="h-entry tile">
      {styles}
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} type={type} />
        <div className="star">{favorite && STAR}</div>
        <Link
          as={`/${RECIPE_FOLDER}/${slug}`}
          href={`/${RECIPE_FOLDER}/${slug}`}
        >
          <div className="tile-hover">
            <p>
              {categories}{" "}
              {difficulty && `${DOT} ${RECIPE_DIFFULTY_ARRAY[difficulty]}`}{" "}
              <br />
              {RECIPE_DURATION_ARRAY[duration]}
            </p>
            <p className="p-summary">{excerpt}</p>
          </div>
        </Link>
      </div>
      <Link
        as={`/${RECIPE_FOLDER}/${slug}`}
        href={`/${RECIPE_FOLDER}/${slug}`}
        variant="heading"
        className="p-name"
      >
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
