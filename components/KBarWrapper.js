import React from "react";
import KBarActions from "./KBarActions";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
} from "kbar";
import { useRouter } from "next/router";

export default function KBarWrapper({ children }) {
  const router = useRouter();

  const styles = (
    <style jsx>{`
      .kbar-position {
        padding-top: 32vh !important;
      }
      .search-bar {
        font-family: var(--font-family-body);
        padding: 0.5rem 1rem;
        font-size: var(--font-size-p);
        box-sizing: border-box;
        width: 100%;
        outline: none;
        border: none;
        background-color: var(--color-bg-contrast);
        color: var(--color-text-reversed);
        border-radius: 0.25rem;
        margin-bottom: 0.5rem;
      }

      .results {
        max-height: 12rem;
        overflow: auto;
        border-radius: 0.25rem;
      }

      .results .results-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        color: var(--color-text-reversed);
        background: var(--color-bg-transparent);
        cursor: pointer;
      }
      .results-item:hover,
      .results-item:focus {
        background: var(--color-accent-default);
      }
      .results-item > div {
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;
      }
      .results-item .results-kbd {
        font-family: var(--font-family-code);
        font-size: var(--font-size-small) !important;
        color: var(--color-text-default) !important;
        padding: 0.1rem 0.4rem !important;
        background: rgba(0 0 0 / 0.2) !important;
        border-radius: 0.25rem;
      }

      /* Dark mode */
      @media (prefers-color-scheme: dark) {
        .results .results-item {
          color: var(--color-text-default);
        }
      }
    `}</style>
  );
  return (
    <KBarProvider actions={KBarActions(router)}>
      {styles}
      {/* Renders the content outside the root node */}
      <KBarPortal>
        {/* Centers the content */}
        <KBarPositioner className="kbar-position">
          {/* Handles the show/hide and height animations */}
          <KBarAnimator>
            {/* Search input */}
            <KBarSearch
              className="search-bar"
              placeholder="Type a command or search…"
            />
            {/* Results renderer */}
            <KBarResults
              className="results"
              onRender={(action, handlers, state) => (
                <Render action={action} handlers={handlers} state={state} />
              )}
            />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function Render({ action, handlers, state }) {
  const ownRef = React.useRef(null);

  const active = state.index === state.activeIndex;

  React.useEffect(() => {
    if (active) {
      // wait for the KBarAnimator to resize, _then_ scrollIntoView.
      // https://medium.com/@owencm/one-weird-trick-to-performant-touch-response-animations-with-react-9fe4a0838116
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => {
          const element = ownRef.current;
          if (!element) {
            return;
          }
          // @ts-ignore
          element.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
            inline: "start",
          });
        })
      );
    }
  }, [active]);

  return (
    <div ref={ownRef} {...handlers} className="results-item">
      <span>{action.name}</span>
      {action.shortcut?.length ? (
        <div>
          {action.shortcut.map((sc) => (
            <kbd className="results-kbd" key={sc}>
              {sc}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
}
