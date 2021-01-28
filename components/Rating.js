import { STAR, ARROW } from "../lib/constants";
import RatingIcon from "../public/icons/RatingIcon";

const Rating = ({ rating, pRating }) => {
  // Dot Rating:
  //   const dotStyle = "rounded w-2 h-2 border-1 border-gray-regular mr-1";
  //   const emptyDots = 5 - rating;
  //   return (
  //     <div className={`${pRating && "p-rating"} flex mt-2`} value={rating}>
  //       {[...Array(rating)].map((_, index) => (
  //         <span
  //           key={`dot-full-${index}`}
  //           className={`${dotStyle} bg-gray-regular`}
  //         />
  //       ))}
  //       {[...Array(emptyDots)].map((_, index) => (
  //         <span key={`dot-empty-${index}`} className={`${dotStyle}`} />
  //       ))}
  //     </div>
  //   );
  // };

  // Star Rating:
  return (
    <span
      className={`${pRating && "p-rating"} flex justify-center`}
      value={rating}
    >
      {[...Array(rating)].map((_, index) => (
        <RatingIcon
          key={`dot-full-${index}`}
          className="text-white"
          height="15"
        />
      ))}
    </span>
  );
};

export default Rating;
