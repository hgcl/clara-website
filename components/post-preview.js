import DateFormatter from "./date-formatter";
import Link from "./link";
import { BLOG_FOLDER } from "../lib/constants";

export default function PostPreview({
  // type,
  title,
  date,
  excerpt,
  slug,
}) {
  const styles = (
    <style jsx>{`
      .h-entry {
        margin-bottom: var(--margin-bottom-small);
      }
      .h-entry > h3 {
        margin-bottom: 0.6rem;
      }
      .h-entry > div {
        margin-bottom: 0.3rem;
      }
    `}</style>
  );
  return (
    <div className="h-entry">
      {styles}
      <h3>
        <Link
          as={`/${BLOG_FOLDER}/${slug}`}
          href={`/${BLOG_FOLDER}/${slug}`}
          variant="heading"
          className="p-name"
        >
          {title}
        </Link>
      </h3>
      <div className="comment">
        <DateFormatter dateString={date} />
      </div>
      <p className="p-summary">{excerpt}</p>
    </div>
  );
}
