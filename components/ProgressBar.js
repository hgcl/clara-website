export default function ProgressBar({ title, progress, widthClass, color }) {
  const fullWidth = widthClass ? widthClass : "w-full"; // default is width 100%
  const barColor = color ? color : "#ef4f37"; // default is current accent color
  const progressWidth = `${progress}%`;
  const fullFill = `repeating-linear-gradient(-45deg, ${barColor}, ${barColor} 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 8px)`;
  const progressFill = `repeating-linear-gradient(45deg, ${barColor}, ${barColor} 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 3px)`;
  return (
    <div className="pt-2 mt-12 mb-16">
      <div
        className={`entire-empty-bar ${fullWidth} h-3 rounded mb-12`}
        style={{
          backgroundImage: `${fullFill}`,
        }}
      >
        <div
          className="completed-full-part relative h-full rounded -top-20"
          style={{
            width: `${progressWidth}`,
            backgroundImage: `${progressFill}`,
          }}
        >
          <div className="percentage-number absolute -right-8 -top-10 w-16 font-serif text-center">{`${progress}%`}</div>
        </div>
        <p className="comment m-0">{title && title}</p>
      </div>
    </div>
  );
}
