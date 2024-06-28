import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../Utils/appSlice";

import { useLocation, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import MainContainer from "./MainContainer";

const WatchPage = () => {
  const [params] = useSearchParams();
  console.log(params.get("v"));
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  const videoDetails = location.state?.video;

  console.log("videodetail", videoDetails);

  const { snippet, statistics } = videoDetails;
  console.log(snippet, "snippet");
  console.log(statistics, "statistics");
  const { channelTitle, title, thumbnails } = snippet;
  console.log(channelTitle, "channel title");
  console.log(title, "title");

  useEffect(() => {
    // if (isMenuOpen) {
    console.log("log");
    //dispatch(closeMenu());}
    return () => {
      dispatch(closeMenu());
      console.log("k");
    };
  }, [dispatch]);

  return (
    <div className="flex overflow-hidden">
    <div className="ml-24 w-2/3">
      <div>
        <iframe
          className="  rounded-2xl h"
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="MongoDB Tutorial in 40 Min(2024)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-6">
        <h1 className="font-semibold tracking-wider text-lg">{title}</h1>
      </div>
      <div className="flex">
      
        <img
          className="h-8"
          alt="user"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        ></img>
        <div>
          <p>{channelTitle}</p> <small>37k subscribers</small>
        </div>
      </div>
      <div className="pt-20">
        <CommentsContainer></CommentsContainer>
      </div>
    </div> <MainContainer className="w-1/3 "></MainContainer> </div>
  );
};

export default WatchPage;
