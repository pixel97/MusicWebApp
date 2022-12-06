import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userFollowerrsArray from "../../data/followers.json";
import UserFollowers from "./followers.js";

const Followers = () => {
  //const userProfileArray = useSelector((state) => state.profile);
  console.log("followers" + JSON.stringify(userFollowerrsArray));
  return (
    <div>
      {userFollowerrsArray.map((item) => (
        <UserFollowers key={item.user_id} user={item} />
      ))}
    </div>
  );
};
export default Followers;
