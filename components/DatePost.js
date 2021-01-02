import DateFormatter from "./date-formatter";

export default function DatePost({ dateString, lastUpdated }) {
  return (
    <div className="text-sm tracking-wider uppercase mb-8">
      {lastUpdated ? "Last updated on" : "Published on"}{" "}
      <DateFormatter dateString={dateString} />
    </div>
  );
}
