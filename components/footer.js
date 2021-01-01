import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "./link";

// icons
import IconTwitter from "../public/icons/IconTwitter";
import IconEtsy from "../public/icons/IconEtsy";

export default function Footer() {
  return (
    <footer className="bg-gray-dark h-40">
      <div className="flex flex-col items-center text-gray-regular h-full justify-end mb-16">
        <div className="flex flex-row items-center mb-8">
          <span className="mx-2">
            <Link href="https://twitter.com/clara__le">
              <IconTwitter />
            </Link>
          </span>
          <span className="mx-2">
            <Link href="https://lifeundercontrol.etsy.com">
              <IconEtsy />
            </Link>
          </span>
        </div>
        <p className="text-center">
          I built this website with{" "}
          <Link href="https://nextjs.org/">Next.js</Link> and{" "}
          <Link href="https://tailwindcss.com/">tailwindcss</Link>.
        </p>
      </div>
    </footer>
  );
}
