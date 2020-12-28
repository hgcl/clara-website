// import Avatar from '../components/avatar'
import DateFormatter from "../components/date-formatter";
// import CoverImage from './cover-image'
import LinkTitle from "../components/LinkTitle";

export default function PostPreview({
  title,
  // coverImage,
  date,
  excerpt,
  // author,
  slug,
}) {
  return (
    <div className="mb-8">
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <h3 className="text-3xl mb-2 leading-snug">
        <LinkTitle as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </LinkTitle>
      </h3>
      <div className="text-xs tracking-widest uppercase mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-normal">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
