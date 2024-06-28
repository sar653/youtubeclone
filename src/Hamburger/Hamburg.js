import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { Link, useLocation } from "react-router-dom";
import "./Hamburger.css";
import MenuList from "../Components/MenuList";
const Hamburge = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const menuRef = useRef(null);

  const toggleMenuHandler = () => {
    console.log("toggle");
    dispatch(toggleMenu());
  };
  console.log(isMenuOpen, "ham");

  const location = useLocation();

  // useEffect(() => {
  //   if (isMenuOpen) {

  //     document.body.style.overflow = "hidden";
  //   } else {

  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {

  //     document.body.style.overflow = "auto";
  //   };
  // }, [isMenuOpen]);

  const isHomePage =
    location.pathname === "/" || location.pathname === "/searchresult" ;
  const hamburgerClass = isHomePage
    ? "hamburger-container-home"
    : "hamburger-container-other";
  const hamburgerboxclass = isHomePage ? "hamburger-box-can" : "hamburger-box";
  const hamburg = isHomePage ? "hamburg" : " ";
  return (
    <>
      {!isMenuOpen &&
        (location.pathname === "/" ||
          location.pathname === "/searchresult") && (
          <div className="start">
            <div className="second-lis">
              <ul className="second-list ml-0 pt-7 h-screen  w-16">
                {MenuList.map((menu) => {
                  return (
                    <li key={menu.id} className="list">
                      <div>
                        <img className="w-5" src={menu.logo}></img>{" "}
                      </div>
                      <div className="sideMenu">{menu.name}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

      <div className={`${hamburgerClass} ${isMenuOpen ? "open" : ""}`}>
        <div className={`${hamburg}  ${isMenuOpen ? "open" : ""}`}>
          <div
            className={`${hamburgerboxclass}  ${isMenuOpen ? "open" : ""}`}

            // ref={menuRef}
          >
            <>
              {location.pathname !== "/" &&
                location.pathname !== "/searchresult" && (
                  <div className="content gap-7 flex p-4 ">
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
                )}
            </>
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
      </div>
    </>
  );
  // );
};

export default Hamburge;
