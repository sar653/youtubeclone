import React, { useEffect, useState, useRef } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link, useLocation } from "react-router-dom";

const VideoContainer = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const loader = useRef(null);

  useEffect(() => {
    if (totalItems < 10) {
      fetchData(page);
    }
  }, [page]);

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `${YOUTUBE_POPULAR_VIDEOS_API}&page=${page}`
      );
      const json = await response.json();
      console.log("video info", json);

      if (json.items && Array.isArray(json.items)) {
        const newData = json.items.slice(0, 10 - totalItems); // Limit to 10 items
        setData((prevData) => [...prevData, ...newData]);
        setTotalItems((prevTotal) => prevTotal + newData.length);
      } else {
        console.error("No items found in response:", json);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && totalItems < 10) {
        setPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [totalItems]);
  const location=useLocation()
  const watchsuggestion=location.pathname==="/watch"
const watchcolumn=watchsuggestion? "watchcolumn":""
 const watchsuggest=location.pathname!=="/watch"
  return (
    <div className={`flex videocontainer  flex-wrap  ${watchcolumn} ${watchsuggest}? "flex-wrap" :""`}>
      {data.map((dat) => (
        <Link key={dat.id} to={`/watch?v=${dat.id}`} state={{video:dat}}>
          <VideoCard info={dat} />
        </Link>
      ))}
      {totalItems < 10 && (
        <div ref={loader} className="loading">
          Loading more videos...
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
