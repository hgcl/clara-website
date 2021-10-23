import Link from "./link";
import FigCaption from "./FigCaption";
import Figure from "./Figure";
import Image from "next/image";

export default function FeaturedImage({
  artistHref,
  imageSrc,
  imageAlt,
  artistName,
}) {
  const styles = (
    <style jsx>{`
      .figure {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: var(--margin-bottom-small);
      }
      .tile-image {
        width: 100%;
        height: 100%;
      }
      .custom-img {
        object-fit: cover;
        width: 100% !important;
        position: relative !important;
        height: 100% !important;
        border-radius: 0.25rem;
      }
      .tile-image > div:first-of-type {
        position: unset !important;
      }
    `}</style>
  );
  return (
    <Figure>
      {styles}
      <div className="tile-image">
        <Image
          alt={imageAlt}
          src={imageSrc}
          layout="fill"
          className="custom-img"
        />
      </div>
      {artistHref && (
        <FigCaption>
          Featured artist: <Link href={artistHref}>{artistName}</Link>
        </FigCaption>
      )}
    </Figure>
  );
}
