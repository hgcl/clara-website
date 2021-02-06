import { RatingIconFull, RatingIconEmpty } from "../public/icons/RatingIcon";

const Rating = ({ rating, pRating, height, color }) => {
  const emptyRating = 5 - rating;
  return (
    <span className={`${pRating && "p-rating"} flex flex-row`} value={rating}>
      {[...Array(rating)].map((_, index) => (
        <RatingIconFull
          key={`rating-full-${index}`}
          className={`fill-current ${color || "text-white"}`}
          height={height || 14}
        />
      ))}
      {[...Array(emptyRating)].map((_, index) => (
        <RatingIconEmpty
          key={`rating-empty-${index}`}
          className="stroke-current text-gray-regular stroke-6"
          height={height || 14}
        />
      ))}
    </span>
  );
};

export default Rating;
