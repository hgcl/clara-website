import * as React from "react";
import { motion } from "framer-motion";
import CoverImage from "./cover-image";
import Link from "./link";
import { RECIPE_FOLDER } from "../lib/constants";

export default function PostPreview({
  type,
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="mb-4 relative">
      <div className="">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          type={type}
          className="object-cover w-full h-80"
        />
      </div>
      <motion.div
        initial={{ opacity: "0" }}
        whileHover={{ opacity: "0.9" }}
        className="z-10 bg-black absolute w-full h-full left-0 top-0"
      >
        <h3 className="text-3xl mb-1 leading-snug">
          <Link
            as={`/${RECIPE_FOLDER}/${slug}`}
            href={`/${RECIPE_FOLDER}/${slug}`}
            variant="heading"
          >
            {title}
          </Link>
        </h3>
        <div className="text-base tracking all-small-caps mb-2">something</div>
      </motion.div>
    </div>
  );
}
