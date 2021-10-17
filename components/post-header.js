import DatePost from "./DatePost";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { RECIPE_FOLDER, BLOG_FOLDER } from "../lib/constants";
import articleStyles from "./articleStyles";

export default function PostHeader({
  coverImage,
  date,
  excerpt,
  slug,
  title,
  type,
}) {
  const folder = type === "isRecipe" ? RECIPE_FOLDER : BLOG_FOLDER;
  const styles = (
    <style jsx>{`
      .post-info {
        display: none;
      }
      .post-date {
        text-align: center;
      }
      @media screen and (min-width: 768px) {
        .post-date {
          text-align: left;
        }
      }
    `}</style>
  );
  return (
    <header>
      {articleStyles}
      <PostTitle className="p-name fn">{title}</PostTitle>
      {styles}
      <div className="post-info">
        <p className="p-summary summary">{excerpt}</p>
        <a className="u-url" href={`/${folder}/${slug}`}>
          Post URL
        </a>
      </div>
      <div className="post-date">
        <DatePost dateString={date} dtPublished />
        {coverImage && <CoverImage title={title} src={coverImage} />}
      </div>
    </header>
  );
}
