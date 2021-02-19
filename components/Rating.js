import { RatingIconFull, RatingIconEmpty } from "../public/icons/RatingIcon";

const Rating = ({ rating, pRating, width, color }) => {
  const emptyRating = 5 - rating;
  return (
    <span className={`${pRating && "p-rating"} flex flex-row`} value={rating}>
      {[...Array(rating)].map((_, index) => (
        <RatingIconFull
          key={`rating-full-${index}`}
          className={`${color || "text-white"} mr-2px`}
          width={width || 12}
        />
      ))}
      {[...Array(emptyRating)].map((_, index) => (
        <RatingIconEmpty
          key={`rating-empty-${index}`}
          className="text-gray-regular mr-2px"
          width={width || 14}
        />
      ))}
    </span>
  );
};

export default Rating;
