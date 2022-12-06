import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userFollowingArray from "../../data/following.json";
import UserFollowing from "./following.js";

const Following = () => {
  //const userProfileArray = useSelector((state) => state.profile);
  //console.log("followers" + JSON.stringify(userFollowerrsArray));
  return (
    <div>
      {userFollowingArray.map((item) => (
        <UserFollowing key={item.user_id} user={item} />
      ))}
    </div>
  );
};
export default Following;
