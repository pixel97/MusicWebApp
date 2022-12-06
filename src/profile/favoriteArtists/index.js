import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userFavArtistsArray from "../../data/artistDetails.json";
import FavArtists from "./favArtists";

const Artists = () => {
  //const userProfileArray = useSelector((state) => state.profile);
  console.log("artistssss" + JSON.stringify(userFavArtistsArray));
  return (
    <div className="row">
      {userFavArtistsArray.map((item) => (
        <FavArtists key={item.id} artists={item} />
      ))}
    </div>
  );
};
export default Artists;
