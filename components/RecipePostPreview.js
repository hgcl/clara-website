import * as React from "react";
import { motion } from "framer-motion";
import CoverImage from "./cover-image";
import NextLink from "next/link";
import {
  RECIPE_FOLDER,
  DOT,
  RECIPE_DIFFULTY_ARRAY,
  RECIPE_DURATION_ARRAY,
} from "../lib/constants";

export default function PostPreview({
  type,
  title,
  coverImage,
  date,
  excerpt,
  slug,
  categories,
  difficulty,
  duration,
}) {
  return (
    <div className="mb-4 relative">
      <div>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          type={type}
          className="object-cover w-full h-80 rounded"
        />
      </div>
      <NextLink
        as={`/${RECIPE_FOLDER}/${slug}`}
        href={`/${RECIPE_FOLDER}/${slug}`}
      >
        <a>
          <motion.div
            initial={{ opacity: "0" }}
            x
            whileHover={{ opacity: "0.9" }}
            className="z-10 bg-black absolute w-full h-full left-0 top-0 text-center flex flex-col justify-center p-4"
          >
            <p className="text-base tracking all-small-caps mb-2">
              {categories}
            </p>
            <h3 className="text-3xl leading-tight mb-1">{title}</h3>
            <p className="text-base mb-2">{excerpt}</p>
            <p className="text-base tracking all-small-caps mb-4">
              {RECIPE_DIFFULTY_ARRAY[difficulty]} {DOT}{" "}
              {RECIPE_DURATION_ARRAY[duration]}
            </p>
          </motion.div>
        </a>
      </NextLink>
    </div>
  );
}
