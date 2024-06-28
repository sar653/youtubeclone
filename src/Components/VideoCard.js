import React from "react";
import { useLocation } from "react-router-dom";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  // console.log(snippet);
  // console.log(statistics, "statistics");
  const { channelTitle, title, thumbnails } = snippet;
  // console.log(channelTitle);
  const location = useLocation();
  const watchsuggestion = location.pathname === "/watch";
  const watch = watchsuggestion ? "watch" : "";
  const thumbnailheight = watchsuggestion ? "thumbnailheight" : "";

  return (
    <div className={`${watch} p-2 m-2 w-6 videocard`}>
      <img
        className={`  rounded-lg    ${thumbnailheight}`}
        alt="thumbnail"
        src={thumbnails.medium.url}
      ></img>
      <div className="flex  gap-2 mt-4">
        
        <>
          {!watchsuggestion && (
            <img
              className="h-8"
              alt="user"
              src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            ></img>
          )}
        </>
        <ul>
          <li className=" video-title font-bold">{title}</li>
          <li className="video-channel">{channelTitle}</li>
          <li className="video-views">{statistics?.viewCount} views </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
