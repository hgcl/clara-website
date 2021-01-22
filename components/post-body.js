import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div
      className={`e-content ${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
    >
      {content}
    </div>
  );
}
