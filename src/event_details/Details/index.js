import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ArtistDetails from "./detailsPage";

const Details = () => {
  const detailsArray = useSelector((state) => state.details);
  console.log(detailsArray);
  const dispatch = useDispatch();
  return (
    <div>
      {detailsArray.map((item) => (
        <ArtistDetails key={item.id} details={item} />
      ))}
    </div>
  );
};
export default Details;
