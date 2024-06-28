import React from "react";

import { Outlet, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import Hamburge from "../HOC/Hamburg";

const Body = () => {
  // const location = useLocation();
  // const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  // console.log(isMenuOpen);

  // Determine which sidebar to render based on the current path
  // const renderSidebar = () => {
  //   if ( location.pathname === "/" || location.pathname==="/searchresult" ) {
  //     return <Sidebar />;
  //   } else if (location.pathname === "/watch") {
  //     return <Hamburger />;
  //   }
  //   // Default sidebar or no sidebar if needed
  //   return <Sidebar/>;
  // };
  return (
    <div className="flex">
      <Hamburge></Hamburge>

      {/* {renderSidebar()} */}

      <Outlet></Outlet>
    </div>
  );
};

export default Body;
