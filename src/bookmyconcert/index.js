import React from "react";
import NavigationSidebar from "./navigationsidebar"
import WhoToFollowList from "./whotofollowlist"
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import LoginComponent from "./login";

function Concert() {
 return (
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="home"/>
     </div>
     <div className="col-7 col-md-10 col-lg-7 col-xl-6"
          style={{"position": "relative"}}>
         {/* <Routes>
            <Route index    element={<HomeComponent/>}/>
            <Route path="/home" element={<HomeComponent/>}/>
       </Routes>  */}
       <HomeComponent/>
     </div>
     <div className="col-4 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       <WhoToFollowList/>
     </div>
   </div>
 );
}

export default Concert;