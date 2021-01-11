import React, { useState } from "react";

// Code very similar to more-stories.js

import Header from "./header";
import Container from "./container";
import PostPreview from "./post-preview";

export default function MorePosts({ posts }) {
  const tagStyle = "pt-1/2 pb-1 px-3 mr-2 all-small-caps border-1 rounded-sm";
  const [filter, setFilter] = useState("");
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <button
            className={`${
              filter ? "border-gray-regular text-gray-regular" : "border-accent"
            } ${tagStyle}`}
            onClick={() => setFilter("")}
          >
            All Posts
          </button>
          <button
            className={`${
              filter === "review"
                ? "border-accent"
                : "border-gray-regular text-gray-regular"
            } ${tagStyle}`}
            onClick={() => setFilter("review")}
          >
            Reviews
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
