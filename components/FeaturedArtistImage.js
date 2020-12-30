import Link from "./link";
import FigCaption from "./FigCaption";
import Figure from "./Figure";

export default function FeaturedArtistImage({
  imageHref,
  imageSrc,
  imageAlt,
  artistName,
}) {
  return (
    <Figure>
      <a href={imageHref}>
        <img src={imageSrc} alt={imageAlt} />
      </a>
      <FigCaption>
        Featured artist: <Link href={imageHref}>{artistName}</Link>
      </FigCaption>
    </Figure>
  );
}
