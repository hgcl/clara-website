// import Avatar from './avatar'
import DateFormatter from "./date-formatter";
// import CoverImage from "./cover-image";
import Link from "./link";
import { BLOG_FOLDER } from "../lib/constants";

export default function PostPreview({
  type,
  title,
  coverImage,
  date,
  excerpt,
  // author,
  slug,
}) {
  return (
    <div className="h-entry mb-12">
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} type={type} />
      </div> */}
      <h3 className="text-3xl mb-1 leading-snug">
        <Link
          as={`/${BLOG_FOLDER}/${slug}`}
          href={`/${BLOG_FOLDER}/${slug}`}
          variant="heading"
          className="p-name"
        >
          {title}
        </Link>
      </h3>
      <div className="text-base tracking all-small-caps mb-2">
        <DateFormatter dateString={date} />
      </div>
      <p className="p-summary text-lg leading-normal">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
