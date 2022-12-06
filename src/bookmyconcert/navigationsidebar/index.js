import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import {HouseDoorFill, PersonFill, BellFill, BoxArrowInRight, ThreeDotsVertical} from 'react-bootstrap-icons';

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return (
   <div className="list-group">
     <Link to="/main/home" className={`list-group-item ${active === 'home'?'active':''}`}>
     <HouseDoorFill color="black" col-xxl-2 col-xl-2/>
      &nbsp;Home
     </Link>
     <NavLink to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>
     <BoxArrowInRight color="black" col-xxl-2 col-xl-2/>
     &nbsp;Login
     </NavLink>
     <Link to="/bookmyconcert/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
     <PersonFill color="black" col-xxl-2 col-xl-2/>
     &nbsp;Profile
     </Link>
     <Link to="/bookmyconcert/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
     <BellFill color="black" col-xxl-2 col-xl-2/>
     &nbsp;Notifications
     </Link>

     <Link to="/bookmyconcert/more" className={`list-group-item ${active === 'more'?'active':''}`}>
     <ThreeDotsVertical color="black" col-xxl-2 col-xl-2/>
       More
     </Link>
     
   </div>
 );
};
export default NavigationSidebar;

