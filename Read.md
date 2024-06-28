Hamburgerimport React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const menuRef = useRef(null);

  const toggleMenuHandler = () => {
    console.log("toggle");
    dispatch(toggleMenu());
    // document
  };
  console.log(isMenuOpen, "ham");

  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     console.log(menuRef.current);
  //     dispatch(toggleMenu());
  //   }
  // };

  useEffect(() => {
    if (isMenuOpen) {
      // document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      // document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      // / document.removeEventListener("mousedown", handleClickOutside);

      document.body.style.overflow = "auto"; // Enable scrolling
    };
  }, [isMenuOpen]);

  //  if (!isMenuOpen) return null;
  //zy

  return (
    //  isMenuOpen&&(
    <div className={`hamburger-container ${isMenuOpen ? "open" : ""}`}>
      <div
        className={`hamburger-box ${isMenuOpen ? "open" : ""}`}
        // ref={menuRef}
      >
        <div className=" content flex p-4 ">
          <img
            className="h-8 cursor-pointer ml-2 mr-1"
            onClick={toggleMenuHandler}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt="hamburger"
          />
          <img
            className="h-8"
            alt="youtube"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </div>
        <div>
          <div>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>Shorts</li>
              <li>Subscription</li>

              <li>Four</li>
            </ul>
            <hr className="my-2 border-t border-gray-300" />
            <div className="w-48 pl-2 mt-4">
              <p className="mt-2 mb-2">YOU </p>
              <ul>
                <li>Your Channel</li>
                <li> History</li>
                <li>playlist</li>
                <li>Your videos</li>
                <li>Your Movies</li>
                <li>Watch Later</li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li>channels</li>

              <li>Shorts</li>
              <li>Subscription</li>

              <li>Four</li>
            </ul>
            <hr className="my-2 border-t border-gray-300" />
            <div className="w-48 pl-2 mt-4">
              <p className="mt-2 mb-2">YOU </p>
              <ul>
                <li>Your Channel</li>
                <li> History</li>
                <li>playlist</li>
                <li>Your videos</li>
                <li>Your Movies</li>
                <li>Watch Later</li>
              </ul>
            </div>
          </div>

          <div>
            <ul>
              <li>Home</li>

              <li>Shorts</li>
              <li>Subscription</li>

              <li>Four</li>
            </ul>
            <hr className="my-2 border-t border-gray-300" />
            <div className="w-48 pl-2 mt-4">
              <p className="mt-2 mb-2">YOU </p>
              <ul>
                <li>Your Channel</li>
                <li> History</li>
                <li>playlist</li>
                <li>Your videos</li>
                <li>Your Movies</li>
                <li>Watch Later</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // );
};

export default Hamburger;
///////////////////////////////// sidebar////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../Utils/appSlice";
import Hamburger from "./Hamburger";

const Sidebar = () => {
  //const subscription = [{ logo: "", Name: "Englis speeches" }];

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // const dispatch=useDispatch()
  // const close=useSelector((store)=>store.app.)
  //if (isMenuOpen) return null;


  console.log( "sidebar",isMenuOpen)
// useEffect(()=>{

// return (()=>dispatch(closeMenu()))
//   },[closeMenu])
  return (
    <>
      <div  >
       { isMenuOpen? (
        
        // <div className=" p-5  w-48 shadow-lg ">
        //   <ul className="w-48 pl-2 mb-4">
        //     <Link to="/">
        //       <li>Home</li>
        //     </Link>
        //     <li>Shorts</li>
        //     <li>subscription</li>
        //   </ul>
        //   <hr className="my-2 border-t border-gray-300" />
        //   <div className="w-48 pl-2 mt-4">
        //     <p className="mt-2 mb-2">YOU </p>
        //     <ul>
        //       <li>Your Channel</li>
        //       <li> History</li>
        //       <li>playlist</li>
        //       <li>Your videos</li>
        //       <li>Your Movies</li>
        //       <li>Watch Later</li>
        //     </ul>
        //   </div>
        // </div>
       <Hamburger ></Hamburger>
        ):
        (

        <div>
          <ul className="second-list  h-screen shadow-lg w-16">
            <li>five</li>
            <li>six</li>
            <li>seven</li>
            <li>eight</li>
          </ul>
        </div>)}
      </div>
    </>
  );
};

export default Sidebar;



