import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userBookmarksArray from "../../data/userBookmarks.json";
import UserBookmarks from "./bookmarks";

const Bookmarks = () => {
  //const userReviewsArray = useSelector((state) => state.profile);
  //console.log("reviews" + JSON.stringify(userReviewsArray));
  return (
    <div>
      {userBookmarksArray.map((item) => (
        <UserBookmarks key={item.id} user={item} />
      ))}
    </div>
  );
};
export default Bookmarks;
