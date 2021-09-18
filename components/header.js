import Link from "./link";
import { WEBSITE_NAME } from "../lib/constants";

export default function Header({ pageDescription }) {
  const styles = (
    <style jsx>{`
      .website-name {
        margin-top: 3rem;
      }
      .page-description {
        margin-bottom: var(--margin-bottom-default);
      }
    `}</style>
  );
  return (
    <>
      <h2 className="website-name">
        {styles}
        <Link variant="heading" href="/">
          {WEBSITE_NAME}
        </Link>
      </h2>
      <p className="page-description comment">{pageDescription}</p>
    </>
  );
}
