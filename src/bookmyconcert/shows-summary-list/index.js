import React from "react";
import postsArray from './shows.json'
import ShowSummaryItem from "./show-summary"

const ShowSummaryList = () => {
    
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <ShowSummaryItem
                    key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default ShowSummaryList;

