import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "./link";

// icons
import IconTwitter from "../public/icons/IconTwitter";
import IconEtsy from "../public/icons/IconEtsy";
import IconRss from "../public/icons/IconRss";
import IconGithub from "../public/icons/IconGithub";

export default function Footer() {
  const iconStyle = `mx-2 fill-current`;
  return (
    <footer className="bg-gray-dark h-40">
      <div className="flex flex-col items-center text-gray-regular h-full justify-end mb-16">
        <div className="flex flex-row items-center mb-8">
          <span className={iconStyle}>
            <Link href="https://twitter.com/clara__le">
              <IconTwitter height="h-4" />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="https://lifeundercontrol.etsy.com">
              <IconEtsy height="h-4" />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="https://github.com/hgcl/">
              <IconGithub height="h-4" />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="/rss.xml">
              <IconRss height="h-4" />
            </Link>
          </span>
        </div>
        <p className="text-center">
          Want to know{" "}
          <Link href="/about-this-website">how this website is built</Link>?
        </p>
      </div>
    </footer>
  );
}
