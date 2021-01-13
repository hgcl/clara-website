import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="lg:flex">
      <h2 className="flex-auto mr-16 text-6xl md:text-7xl tracking-tighter leading-tight">
        Here’s What’s New
      </h2>
      <div className="flex-auto max-w-2xl mt-2">
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
    </section>
  );
}
