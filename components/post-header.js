// import Avatar from './avatar';
// import DateFormatter from "./date-formatter";
import DatePost from "./DatePost";
// import CoverImage from './cover-image'
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <header className="h-entry">
      <PostTitle>{title}</PostTitle>
      <div className="hidden">
        Published by{" "}
        <a className="p-author h-card" href="https://clarale.com">
          Clara Le
        </a>
      </div>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <div className="max-w-3xl mx-auto">
        {/* <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        <div className="mb-6 text-lg">
          <DatePost dateString={date} />
        </div>
      </div>
    </header>
  );
}
