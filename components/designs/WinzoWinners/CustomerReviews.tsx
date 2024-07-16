import React from "react";
import { Star, StarHalf } from "lucide-react";
import { FaRegStar } from "react-icons/fa";

const Stars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="text-yellow-400 fill-yellow-400" />;
        } else if (i === fullStars && hasHalfStar) {
          return (
            <StarHalf key={i} className="text-yellow-400 fill-yellow-400" />
          );
        } else {
          return <FaRegStar size={22} key={i} className="text-yellow-400" />;
        }
      })}
    </div>
  );
};

const RatingBar = ({
  stars,
  percentage,
}: {
  stars: number;
  percentage: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3">{stars}</span>
      <Stars rating={stars} />
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="w-8 text-right">{percentage}%</span>
    </div>
  );
};

const CustomerReviews = () => {
  const overallRating = 4.7;
  const ratings = [
    { stars: 5, percentage: 35 },
    { stars: 4, percentage: 40 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 12 },
    { stars: 1, percentage: 5 },
  ];

  return (
    <div className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto  p-6 rounded-lg ">
      <h2 className="text-2xl text-center font-bold text-purple-800 mb-4">
        CUSTOMER REVIEWS
      </h2>

      <div className="flex flex-col lg:flex-row gap-x-4">
        <div className="flex items-center mb-6">
          <div className="text-7xl font-bold text-purple-600 mr-4">
            {overallRating}
          </div>

          <div>
            <Stars rating={overallRating} />
            <p className="text-sm text-gray-600 mt-1">out of 5</p>
          </div>
        </div>

        <div className="space-y-2">
          {ratings.map((rating) => (
            <RatingBar
              key={rating.stars}
              stars={rating.stars}
              percentage={rating.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
