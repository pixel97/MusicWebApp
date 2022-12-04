import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewsComponent from "./reviewsPage";

const Reviews = () => {
  const reviewsArray = useSelector((state) => state.review);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Top Reviews</h2>
      {reviewsArray.map((item) => (
        <ReviewsComponent key={item.id} review={item} />
      ))}
    </div>
  );
};
export default Reviews;
