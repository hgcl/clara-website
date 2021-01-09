export default function ProgressBar({ progress, widthClass, color }) {
  const fullWidth = widthClass ? widthClass : "w-full"; // default is width 100%
  const barColor = color ? color : "#ef4f37"; // default is current accent color
  const progressWidth = `${progress}%`;
  const fullFill = `repeating-linear-gradient(-45deg, ${barColor}, ${barColor} 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 8px)`;
  const progressFill = `repeating-linear-gradient(45deg, ${barColor}, ${barColor} 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 3px)`;
  return (
    // Parent <div> is the full bar
    // Child <div> is the completed part of the bar,
    // The third <div> will show the progress percentage number.
    <div
      className={`${fullWidth} h-3 rounded mb-12`}
      style={{
        "background-image": `${fullFill}`,
      }}
    >
      <div
        className="relative h-full rounded -top-20 mt-16"
        style={{
          width: `${progressWidth}`,
          "background-image": `${progressFill}`,
        }}
      >
        <div className="absolute -right-8 -top-10 w-16 font-serif text-center">{`${progress}%`}</div>
      </div>
    </div>
  );
}
