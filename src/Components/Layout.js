// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Body from "./Body";


const Layout = () => {
  return (
    <div>
      <Head />
      {/* <Body> */}
      <Outlet />
      {/* </Body> */}
      
    </div>
  );
};

export default Layout;
