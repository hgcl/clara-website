import { MDXRemote } from "next-mdx-remote";
import AllPostComponents from "./AllPostComponents";

import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ source, children }) {
  return (
    <div
      className={`e-content ${markdownStyles["markdown"]} prose prose-lg lg:prose-xl max-w-3xl mx-auto`}
    >
      <MDXRemote {...source} components={AllPostComponents} />
      {children}
    </div>
  );
}
