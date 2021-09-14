import { MDXRemote } from "next-mdx-remote";
import AllPostComponents from "./AllPostComponents";
import articleStyles from "../components/articleStyles";

export default function PostBody({ source, children }) {
  const styles = (
    <style jsx>{`
      .e-content {
        max-width: 48rem;
        margin: 0 auto;
      }
    `}</style>
  );
  return (
    <div className="article-container">
      {articleStyles}
      <MDXRemote {...source} components={AllPostComponents} />
      {children}
    </div>
  );
}
