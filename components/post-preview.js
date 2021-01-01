// import Avatar from './avatar'
import DateFormatter from "./date-formatter";
// import CoverImage from './cover-image'
import Link from "./link";

export default function PostPreview({
  title,
  // coverImage,
  date,
  excerpt,
  // author,
  slug,
}) {
  return (
    <div className="mb-12">
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <h3 className="text-3xl mb-1 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]" variant="heading">
          {title}
        </Link>
      </h3>
      <div className="text-xs tracking-widest uppercase mb-2">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-normal">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
