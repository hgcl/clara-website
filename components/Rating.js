const Rating = ({ rating }) => {
  const dotStyle = "rounded w-2 h-2 border-1 border-gray-regular mr-1";
  const emptyDots = 5 - rating;
  return (
    <div className="flex mt-2">
      {[...Array(rating)].map((_, index) => (
        <span
          key={`dot-full-${index}`}
          className={`${dotStyle} bg-gray-regular`}
        />
      ))}
      {[...Array(emptyDots)].map((_, index) => (
        <span key={`dot-empty-${index}`} className={`${dotStyle}`} />
      ))}
    </div>
  );
};

export default Rating;
