import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2>Here&apos;s What&apos;s New</h2>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
