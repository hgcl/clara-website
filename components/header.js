import Link from "next/link";
import { WEBSITE_NAME } from "../lib/constants";

export default function Header({ pageDescription }) {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-medium tracking-tight md:tracking-tighter leading-tight mt-8">
        <Link href="/">
          <a>{WEBSITE_NAME}</a>
        </Link>
      </h2>
      <p className="comment mb-20 ml-1 tracking-wide">{pageDescription}</p>
    </>
  );
}
