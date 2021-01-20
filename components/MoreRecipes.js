import React, { useState } from "react";

// Code very similar to more-stories.js

import Container from "./container";
import RecipePostPreview from "./RecipePostPreview";

export default function MoreRecipes({ posts }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(14rem, 1fr))",
  };
  const tagStyle = "pt-1 pb-2 px-4 mr-4 all-small-caps border-1 rounded-sm";
  const [filter, setFilter] = useState("");
  return (
    <Container>
      <div className="mb-16">
        <button
          className={`${
            filter ? "border-gray-regular text-gray-regular" : "border-accent"
          } ${tagStyle}`}
          onClick={() => setFilter("")}
        >
          All Recipes
        </button>
        <button
          className={`${
            filter === "winter"
              ? "border-accent"
              : "border-gray-regular text-gray-regular"
          } ${tagStyle}`}
          onClick={() => setFilter("winter")}
        >
          Winter
        </button>
      </div>
      <div className="grid gap-y-8 gap-x-4 md:gap-x-5" style={gridStyle}>
        {posts
          .filter((post) =>
            filter ? post.categories && post.categories.includes(filter) : post
          )
          .map((post) => (
            <RecipePostPreview
              type="isRecipe"
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              categories={post.categories}
            />
          ))}
      </div>
    </Container>
  );
}
