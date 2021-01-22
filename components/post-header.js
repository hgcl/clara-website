// import Avatar from './avatar';
import DatePost from "./DatePost";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { RECIPE_FOLDER, BLOG_FOLDER } from "../lib/constants";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  excerpt,
  slug,
}) {
  const folder = BLOG_FOLDER; // TODO add microformats to recipe posts as well
  return (
    <header>
      <PostTitle className="p-name">{title}</PostTitle>
      <div className="hidden">
        <p className="p-summary">{excerpt}</p>
        <a className="u-url" href={`/${folder}/${slug}`}>
          Post URL
        </a>
      </div>
      <div className="max-w-3xl mx-auto">
        {/* <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        <div className="mb-6 text-lg text-center md:text-left">
          <DatePost dateString={date} dtPublished />
          {coverImage && (
            <CoverImage
              title={title}
              src={coverImage}
              className="object-cover w-full max-h-192 mb-8 md:mb-16 sm:mx-0"
            />
          )}
        </div>
      </div>
    </header>
  );
}
