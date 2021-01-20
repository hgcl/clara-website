import React, { useState } from "react";

// Code very similar to more-stories.js

import Container from "./container";
import PostPreview from "./post-preview";

export default function MoreRecipes({ posts }) {
  const tagStyle = "pt-1 pb-2 px-4 mr-4 all-small-caps border-1 rounded-sm";
  const [filter, setFilter] = useState("");
  return (
    <Container>
      <div className="mx-auto">
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
        {posts
          .filter((post) =>
            filter ? post.categories && post.categories.includes(filter) : post
          )
          .map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              // coverImage={post.coverImage}
              date={post.date}
              // author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              categories={post.categories}
            />
          ))}
      </div>
    </Container>
  );
}
