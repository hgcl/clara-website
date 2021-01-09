export default function ActivityProgress({ completed }) {
  const barWidth = `${completed}%`;
  const backgroundImage = `repeating-linear-gradient(to right, #ef4f37, #ef4f37 1px, #000 1px, #000 2px)`;
  return (
    // Parent <div> is is the whole bar
    // Child <div> is the completed part of the bar, <span> will show the completed percentage number.
    <div className="h-2px w-full bg-gray-regular rounded my-16">
      <div
        className="h-2 text-right rounded"
        style={{
          width: `${barWidth}`,
          "background-image": `${backgroundImage}`,
        }}
      >
        <span className="p-2 font-serif">{`${completed}%`}</span>
      </div>
    </div>
  );
}
