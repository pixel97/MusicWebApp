import React from "react";
import ShowSummaryList from "../shows-summary-list";
import "./index.css"
const HomeComponent = () => {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative">
        <h2 className="wd-color"> WELCOME TO BOOKMYCONCERT </h2>
        <h4 className="wd-color2"> Book Tickets To Upcoming Concerts Performed By Your Favorite Artists </h4>
         
         <input placeholder="Search BookMyConcert"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
       <ShowSummaryList/>
     </div>
     
   </>
 );
};
export default HomeComponent;

