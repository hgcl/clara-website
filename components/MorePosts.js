// Code very similar to MoreStories.js

import Header from "./Header";
import Container from "./Container";
import PostPreview from "./PostPreview";

export default function MorePosts({ posts }) {
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            // coverImage={post.coverImage}
            date={post.date}
            // author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </Container>
  );
}
