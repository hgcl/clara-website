import { RatingIconFull, RatingIconEmpty } from "../public/icons/RatingIcon";

const Rating = ({ rating, pRating, width, color }) => {
  const emptyRating = 5 - rating;
  const styles = (
    <style jsx>{`
      span {
        display: flex;
      }
    `}</style>
  );
  return (
    <span className={`rating ${pRating && "p-rating"}`} value={rating}>
      {styles}
      {[...Array(rating)].map((_, index) => (
        <RatingIconFull
          key={`rating-full-${index}`}
          className={`${color || "text-white"}`}
          width={width || 14}
          height={width || 14}
        />
      ))}
      {[...Array(emptyRating)].map((_, index) => (
        <RatingIconEmpty
          key={`rating-empty-${index}`}
          className="text-gray-regular"
          width={width || 16}
          height={width || 16}
        />
      ))}
    </span>
  );
};

export default Rating;
