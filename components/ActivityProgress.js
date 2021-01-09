export default function ActivityProgress({ completed }) {
  const barWidth = `${completed}%`;
  return (
    // Parent <div> is is the whole bar
    // Child <div> is the completed part of the bar, <span> will show the completed percentage number.
    <div className="h-2px w-full bg-gray-regular rounded my-16">
      <div
        className="h-2 bg-accent text-right rounded"
        style={{ width: `${barWidth}` }}
      >
        <span className="p-2 font-serif">{`${completed}%`}</span>
      </div>
    </div>
  );
}
