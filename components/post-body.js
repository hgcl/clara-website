import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        // The following is now in [slug].js
        className={`${markdownStyles["markdown"]} e-content`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
