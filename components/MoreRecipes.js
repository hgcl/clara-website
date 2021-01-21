import React, { useState } from "react";

import Container from "./container";
import RecipePostPreview from "./RecipePostPreview";

export default function MoreRecipes({ posts }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    "grid-template-columns": "repeat(auto-fill, minmax(14rem, 1fr))",
  };
  const [filter, setFilter] = useState("");
  return (
    <Container>
      <div className="grid gap-y-6 gap-x-8" style={gridStyle}>
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
              tags={post.tags}
              difficulty={post.difficulty}
              duration={post.duration}
            />
          ))}
      </div>
    </Container>
  );
}
