import Link from "./link";

// icons
import IconTwitter from "../public/icons/IconTwitter";
import IconEtsy from "../public/icons/IconEtsy";
import IconRss from "../public/icons/IconRss";
import IconGithub from "../public/icons/IconGithub";

export default function Footer() {
  const iconStyle = "mx-2";
  const iconHeight = "h-4";
  const iconFill = "fill-current text-gray-regular";
  return (
    <footer className="bg-gray-dark h-40 mb-16">
      <div className="flex flex-col items-center text-gray-regular h-full justify-end mb-16">
        <div className="flex flex-row items-center mb-8">
          <span className={iconStyle}>
            <Link href="https://twitter.com/clara__le">
              <IconTwitter height={iconHeight} fill={iconFill} />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="https://lifeundercontrol.etsy.com">
              <IconEtsy height={iconHeight} fill={iconFill} />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="https://github.com/hgcl/">
              <IconGithub height={iconHeight} fill={iconFill} />
            </Link>
          </span>
          <span className={iconStyle}>
            <Link href="/rss.xml">
              <IconRss height={iconHeight} fill={iconFill} />
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
