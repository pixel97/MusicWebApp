import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userConcertsArray from "../../data/concerts.json";
import ConcertsAttended from "./concerts.js";

const Concerts = () => {
  //const userProfileArray = useSelector((state) => state.profile);
  //console.log("followers" + JSON.stringify(userFollowerrsArray));
  return (
    <div className="row">
      {userConcertsArray.map((item) => (
        <ConcertsAttended key={item.concert} concert={item} />
      ))}
    </div>
  );
};
export default Concerts;
