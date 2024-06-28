import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULT_API, API_kEY } from "../Utils/Constants";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState(null);
 const [loading,setLoading]=useState(true)
  const searchQuery = useSelector((state) => state.Query.queryData);
  console.log(searchQuery);

  const getSearch = async () => {
    if(!searchQuery)return
    try {
      const data = await fetch(
        `${YOUTUBE_SEARCH_RESULT_API}${searchQuery}&key=${API_kEY}`
      );
      const json = await data.json();
      console.log("json", json);
      setSearchResults(json.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
          setLoading(false)
    }
  };

  useEffect(() => {
    // if(searchQuery)
    getSearch();
  }, [searchQuery]);
  console.log(searchResults ,"f")


  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  if (!searchResults || !Array.isArray(searchResults)) {
    return <div>No results found.</div>;
  }
  return (
  <div>
   
   
      {searchResults.length === 0 ? (
        <div>No results found.</div>
      ) : (searchResults.map((searchresult,index)=>(
        <div className="flex pl-12  searchvideo 0 m-4 "  key={searchresult.id.videoId}>
          <img
            className="rounded-2xl w-3/6 h-auto thumb "
            src={searchresult?.snippet?.thumbnails?.high?.url}
            alt="Thumbnail"
          />
          <div  className="ml-4">

          <p>{ searchresult?.snippet?.description}</p>


          <small> {searchresult?.snippet?.publishedAt &&
                `${searchresult.snippet.publishedAt.split('T')[0]} ${searchresult.snippet.publishedAt.split('T')[1].replace('Z', '')}`}</small>
        </div> 
        </div>
      ))
      )}
    </div>
  
    )}



export default SearchResult;
