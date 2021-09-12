import React from "react";

// Code very similar to more-stories.js

import Container from "./container";
import PostPreview from "./post-preview";

export default function MorePosts({ posts }) {
  ////// Filtering constants
  // const reviewArray = ["monthly-review", "weekly-review"];
  // const tagStyle = "pt-1 pb-2 px-4 mr-4 all-small-caps border-1 rounded-sm";
  // const inactiveTag = "border-gray-regular text-gray-regular";
  // const activeTag = "border-accent";
  // const [filter, setFilter] = useState("");
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        {/* Filtering buttons */}
        {/* <section className="mb-16">
          <button
            className={`${filter ? inactiveTag : activeTag} ${tagStyle}`}
            onClick={() => setFilter("")}
          >
            All Posts
          </button>
          <button
            className={`${
              reviewArray.some((item) => filter.indexOf(item) >= 0)
                ? activeTag
                : inactiveTag
            } ${tagStyle}`}
            onClick={() => setFilter(reviewArray)}
          >
            Reviews
          </button>
        </section> */}
        {posts
          // .filter((post) =>
          //   filter
          //     ? post.categories &&
          //       // https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
          //       filter.some((item) => post.categories.indexOf(item) >= 0)
          //     : post
          // )
          .map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              categories={post.categories}
            />
          ))}
      </div>
    </Container>
  );
}
