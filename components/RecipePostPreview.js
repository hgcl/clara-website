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
  STAR,
} from "../lib/constants";

export default function PostPreview({
  categories,
  coverImage,
  date,
  difficulty,
  duration,
  excerpt,
  favorite,
  slug,
  title,
  toBeTested,
  type,
}) {
  const opacityTile = toBeTested ? "0.2" : "1";
  return (
    <div className="h-entry flex flex-col text-center">
      <div className="mb-4 relative transition duration-200 transform hover:scale-101 hover:shadow-xl hover:-translate-y-1">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          type={type}
          className="object-cover w-full h-72 rounded"
          style={{
            opacity: `${opacityTile}`,
          }}
        />
        {/* Top upper left corner: */}
        <div className="z-20 absolute left-3 top-0 text-3xl">
          {favorite && STAR}
          <p className="text-lg all-small-caps pt-2">
            {toBeTested && "To Be Tested"}
          </p>
        </div>
        {/* Overlay when hover: */}
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
              {categories}{" "}
              {difficulty && `${DOT} ${RECIPE_DIFFULTY_ARRAY[difficulty]}`}{" "}
              <br />
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
