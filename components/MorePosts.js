// Code very similar to more-stories.js

import Header from "./header";
import Container from "./container";
import PostPreview from "./post-preview";

export default function MorePosts({ posts }) {
  const query = "review";
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        {posts
          .filter((post) => post.categories && post.categories.includes(query))
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
