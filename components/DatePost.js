import DateFormatter from "./date-formatter";

export default function DatePost({ dateString, lastUpdated, dtPublished }) {
  return (
    <div className="text-base all-small-caps tracking mb-8">
      {lastUpdated ? "Last updated on" : "Published on"}{" "}
      <DateFormatter dateString={dateString} dtPublished />
    </div>
  );
}
