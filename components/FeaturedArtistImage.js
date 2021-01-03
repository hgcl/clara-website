import Link from "./link";
import FigCaption from "./FigCaption";
import Figure from "./Figure";

export default function FeaturedArtistImage({
  artistHref,
  imageSrc,
  imageAlt,
  artistName,
}) {
  return (
    <Figure>
      <img src={imageSrc} alt={imageAlt}/>
      <FigCaption>
        Featured artist: <Link href={artistHref}>{artistName}</Link>
      </FigCaption>
    </Figure>
  );
}
