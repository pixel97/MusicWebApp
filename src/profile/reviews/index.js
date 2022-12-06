import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userReviewsArray from "../../data/userReviews.json";
import UserReviews from "./reviews";

const Reviews = () => {
  //const userReviewsArray = useSelector((state) => state.profile);
  console.log("reviews" + JSON.stringify(userReviewsArray));
  return (
    <div>
      {userReviewsArray.map((item) => (
        <UserReviews key={item.id} user={item} />
      ))}
    </div>
  );
};
export default Reviews;
