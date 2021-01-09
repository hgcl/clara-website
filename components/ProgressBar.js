export default function ProgressBar({ progress }) {
  const color = "#ef4f37";
  const barWidth = `${progress}%`;
  const fullFill = `repeating-linear-gradient(-45deg, ${color}, ${color} 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 8px)`;
  const progressFill = `repeating-linear-gradient(45deg, ${color}, ${color} 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 3px)`;
  return (
    // Parent <div> is the full bar
    // Child <div> is the completed part of the bar,
    // The third <div> will show the progress percentage number.
    <div
      className="h-3 w-full rounded mb-12"
      style={{
        "background-image": `${fullFill}`,
      }}
    >
      <div
        className="relative h-full rounded -top-20 mt-16"
        style={{
          width: `${barWidth}`,
          "background-image": `${progressFill}`,
        }}
      >
        <div className="absolute -right-8 -top-10 w-16 font-serif text-center">{`${progress}%`}</div>
      </div>
    </div>
  );
}
