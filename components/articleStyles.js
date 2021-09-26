export const articleStyles = (
  <style jsx>{`
    .article-container {
      max-width: var(--container-width);
      margin: 0 auto;
    }
    .article-container h3 {
      /* same as h2 margin-bottom */
      margin-top: 2rem;
      /* smaller than p margin-bottom */
      margin-bottom: 1rem;
    }
    .article-container h2 {
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
    .article-container p {
      margin-bottom: 1.5rem;
    }
    .parenthesis {
      font-family: "Source Sans Pro";
      font-style: italic;
    }
    ul,
    ol {
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    }
    li {
      list-style-position: outside;
      padding-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
    ul > li {
      list-style-type: disc;
    }
    ol > li {
      list-style-type: decimal;
    }
    ol > li::marker {
      font-family: var(--font-family-heading);
    }
    kbd {
      font-family: var(--font-family-code);
      font-size: 0.6rem;
      background-color: var(--color-bg-contrast);
      color: var(--color-text-reversed);
      padding: 0.2rem 0.3rem;
      margin: 0 0.1rem;
      border-radius: 0.25rem;
    }
  `}</style>
);

export default articleStyles;
