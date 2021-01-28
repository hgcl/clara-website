import { STAR, ARROW } from "../lib/constants";
import { RatingIconFull, RatingIconEmpty } from "../public/icons/RatingIcon";

const Rating = ({ rating, pRating }) => {
  const emptyRating = 5 - rating;
  return (
    <span className={`${pRating && "p-rating"} flex flex-row`} value={rating}>
      {[...Array(rating)].map((_, index) => (
        <RatingIconFull
          key={`rating-full-${index}`}
          className="text-white"
          height="15"
        />
      ))}
      {[...Array(emptyRating)].map((_, index) => (
        <RatingIconEmpty
          key={`rating-empty-${index}`}
          className="text-gray-regular"
          height="15"
        />
      ))}
    </span>
  );
};

export default Rating;
