import Link from "./link";
import { STAR, WAFFLE } from "../lib/constants";

// icons
import IconTwitter from "../public/icons/IconTwitter";
import IconEtsy from "../public/icons/IconEtsy";
import IconRss from "../public/icons/IconRss";
import IconGithub from "../public/icons/IconGithub";

// add fade in animation
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

export default function Footer() {
  const iconStyle = "mx-2";
  const svgStyle =
    "h-4 fill-current text-gray-regular transition duration-500 hover:text-accent";
  return (
    <footer className="z-0 h-64 sticky bottom-0">
      <div className="bg-black flex flex-col items-center text-gray-regular h-full justify-end pb-24 px-8">
        <div className="flex flex-row items-center mb-8 mx-4">
          <span className={iconStyle}>
            <Link href="https://twitter.com/clara__le" aria-label="Twitter">
              <IconTwitter svgClassName={svgStyle} />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="https://lifeundercontrol.etsy.com" aria-label="Etsy">
              <IconEtsy svgClassName={svgStyle} />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="https://github.com/hgcl/" aria-label="GitHub">
              <IconGithub svgClassName={svgStyle} />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="/rss.xml">
              <IconRss svgClassName={svgStyle} aria-label="RSS" />
            </Link>
          </span>
        </div>
        <p className="text-center">
          Notice something wrong?{" "}
          <Link href="https://github.com/hgcl/clara-website/issues">
            File an issue!
          </Link>{" "}
          —{" "}
          <Link
            className="text-xl"
            href="/favorites"
            aria-label="favorites page"
          >
            {STAR}
          </Link>{" "}
          <Link
            className="text-xl"
            href="/recipe-book"
            aria-label="Recipe page"
          >
            {WAFFLE}
          </Link>
        </p>
      </div>
    </footer>
  );
}
