import React from "react";

// Code very similar to more-stories.js

import Container from "./container";
import PostPreview from "./post-preview";

export default function MorePosts({ posts }) {
  return (
    <Container>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
          categories={post.categories}
        />
      ))}
    </Container>
  );
}
