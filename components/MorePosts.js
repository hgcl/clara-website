import React, { useState } from "react";

// Code very similar to more-stories.js

import Container from "./container";
import PostPreview from "./post-preview";

export default function MorePosts({ posts }) {
  const tagStyle = "pt-1 pb-2 px-4 mr-4 all-small-caps border-1 rounded-sm";
  const inactiveTag = "border-gray-regular text-gray-regular";
  const activeTag = "border-accent";
  const [filter, setFilter] = useState("");
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <section className="mb-16">
          <button
            className={`${filter ? inactiveTag : activeTag} ${tagStyle}`}
            onClick={() => setFilter("")}
          >
            All Posts
          </button>
          <button
            className={`${
              filter === "weekly-review" ? activeTag : inactiveTag
            } ${tagStyle}`}
            onClick={() => setFilter("weekly-review")}
          >
            Reviews
          </button>
        </section>
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
