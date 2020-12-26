// import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
// import CoverImage from './cover-image'
import Link from '../components/link'

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
      <Link as={`/posts/${slug}`} href="/posts/[slug]" className="no-underline">
        <h3 className="text-3xl mb-2 leading-snug">
          {title}
        </h3>
      </Link>
      <div className="text-xs tracking-widest uppercase mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-normal">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  )
}
