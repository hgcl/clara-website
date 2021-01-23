import * as React from "react";
import { motion } from "framer-motion";
import CoverImage from "./cover-image";
import NextLink from "next/link";
import Link from "./link";
import {
  RECIPE_FOLDER,
  DOT,
  RECIPE_DIFFULTY_ARRAY,
  RECIPE_DURATION_ARRAY,
  WAFFLE,
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
  favorite,
}) {
  return (
    <div className="h-entry flex flex-col text-center">
      <div className="mb-4 relative transition duration-200 transform hover:scale-101 hover:shadow-xl hover:-translate-y-1">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          type={type}
          className="object-cover w-full h-72 rounded"
        />
        <div className="absolute left-3 top-0 text-3xl">
          {favorite && WAFFLE}
        </div>
        <NextLink
          as={`/${RECIPE_FOLDER}/${slug}`}
          href={`/${RECIPE_FOLDER}/${slug}`}
        >
          <motion.div
            initial={{ opacity: "0" }}
            whileHover={{ opacity: "0.9" }}
            className="z-10 cursor-pointer bg-black absolute w-full h-full left-0 top-0 flex flex-col justify-center px-8 pb-8"
          >
            <p className="text-lg comment mb-8">
              {categories} {DOT} {RECIPE_DIFFULTY_ARRAY[difficulty]} <br />
              {RECIPE_DURATION_ARRAY[duration]}
            </p>
            <p className="p-summary text-xl">{excerpt}</p>
          </motion.div>
        </NextLink>
      </div>
      <Link
        as={`/${RECIPE_FOLDER}/${slug}`}
        href={`/${RECIPE_FOLDER}/${slug}`}
        variant="heading"
        className="p-name"
      >
        <h3 className="flex-1 text-3xl leading-tight mt-2 mb-4">{title}</h3>
      </Link>
    </div>
  );
}
