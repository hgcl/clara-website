import Link from "next/link";
import { WEBSITE_NAME } from "../lib/constants";

export default function Header({ pageDescription }) {
  return (
    <>
      <h2 className="text-2xl md:text-4xl tracking-tight md:tracking-tighter leading-tight pt-2 md:pt-4 mt-8">
        <Link href="/">
          <a>{WEBSITE_NAME}</a>
        </Link>
      </h2>
      <p className="comment tracking mb-20 ml-1">{pageDescription}</p>
    </>
  );
}
