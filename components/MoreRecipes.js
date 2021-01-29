import React, { useState } from "react";

import Container from "./container";
import RecipePostPreview from "./RecipePostPreview";

export default function MoreRecipes({ posts }) {
  // Unable to customize tailwindcss grid style with auto-fill. Adding it here instead:
  const gridStyle = {
    gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
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
              categories={post.categories}
              coverImage={post.coverImage}
              date={post.date}
              difficulty={post.difficulty}
              duration={post.duration}
              excerpt={post.excerpt}
              favorite={post.favorite}
              key={post.slug}
              slug={post.slug}
              tags={post.tags}
              title={post.title}
              toBeTested={post.toBeTested}
            />
          ))}
      </div>
    </Container>
  );
}
