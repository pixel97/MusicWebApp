import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./profileCard";
import userProfileArray from "../../data/profileInfo.json";

const Profile = () => {
  //const userProfileArray = useSelector((state) => state.profile);
  console.log("json" + JSON.stringify(userProfileArray));
  return (
    <div>
      {userProfileArray.map((item) => (
        <ProfileCard key={item.id} user={item} />
      ))}
    </div>
  );
};
export default Profile;
