import Alert from "./alert";
import Meta from "./meta";
import Hentry from "./Hentry";
import Hcard from "./Hcard";
import Navbar from "./Navbar";

export default function Layout({
  children,
  title,
  noHentry,
  showAlert,
  noBottomMargin,
  color,
}) {
  const styles = (
    <style jsx>{`
      .page-bottom {
        margin-bottom: calc(var(--margin-bottom-default) * 1.5);
      }
      .no-bottom-margin {
        margin-bottom: 0;
      }
      :root {
        --color-text-default: var(--color-grey-darkest);
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --color-text-default: var(--color-white);
        }
      }
    `}</style>
  );
  return (
    <>
      <Meta title={title} />
      <div className={`page-bottom ${noBottomMargin && "no-bottom-margin"}`}>
        {getColor(color)}
        {styles}
        <Alert showAlert={showAlert} />
        <Navbar />
        <Hentry>
          <Hcard />
          {!noHentry && <main>{children}</main>}
        </Hentry>
        {noHentry && <main>{children}</main>}
      </div>
    </>
  );
}

function getColor(color) {
  const redStyles = (
    <style jsx>{`
      :root {
        --color-bg-default: var(--color-red-lightest);
        --color-bg-alternative: var(--color-red-subdued);
        --color-accent-focus: var(--color-red-bright);
        --color-accent: var(--color-red-accent);
        --color-accent-subdued: var(--color-red-subdued);
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --color-bg-default: var(--color-red-darkest);
          --color-accent: var(--color-red-bright);
          --color-accent-focus: var(--color-red-accent);
        }
      }
    `}</style>
  );
  const blueStyles = (
    <style jsx>{`
      :root {
        --color-bg-default: var(--color-blue-lightest);
        --color-bg-alternative: var(--color-blue-subdued);
        --color-accent-focus: var(--color-blue-bright);
        --color-accent: var(--color-blue-accent);
        --color-accent-subdued: var(--color-blue-subdued);
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --color-bg-default: var(--color-blue-darkest);
          --color-accent: var(--color-blue-bright);
          --color-accent-focus: var(--color-blue-accent);
        }
      }
    `}</style>
  );
  const greenStyles = (
    <style jsx>{`
      :root {
        --color-bg-default: var(--color-green-lightest);
        --color-bg-alternative: var(--color-green-subdued);
        --color-accent-focus: var(--color-green-bright);
        --color-accent: var(--color-green-accent);
        --color-accent-subdued: var(--color-green-subdued);
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --color-bg-default: var(--color-green-darkest);
          --color-accent: var(--color-green-bright);
          --color-accent-focus: var(--color-green-accent);
        }
      }
    `}</style>
  );
  if (color === "green") {
    return greenStyles;
  }
  if (color === "red") {
    return redStyles;
  }
  return blueStyles;
}
