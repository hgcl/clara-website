import DateFormatter from "./date-formatter";

export default function DatePost({ dateString, lastUpdated, dtPublished }) {
  const styles = (
    <style jsx>{`
      .date {
        margin-bottom: var(--margin-bottom-small);
      }
    `}</style>
  );
  return (
    <div className="date comment">
      {styles}
      {lastUpdated ? "Last updated on" : "Published on"}{" "}
      <DateFormatter dateString={dateString} dtPublished />
    </div>
  );
}
