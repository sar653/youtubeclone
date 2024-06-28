import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../Utils/Constants";
import { QueryResults } from "../Utils/QuerySlice";
import { Link, useNavigate } from "react-router-dom";
import { cacheResults } from "../Utils/SearchSlice";
import ButtonList from "./Buttonlist";






const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const suggestionBoxRef = useRef(null);
  const navigate = useNavigate();

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)

  
  const toggleMenuHandler = () => {
      
       
     dispatch(toggleMenu());
  };

  console.log("head",isMenuOpen)
  const searchCache=useSelector((store)=>store.search)
  

  const getSearchSuggestion = async () => {
    console.log(searchQuery);
    const data = await fetch(`${YOUTUBE_SEARCH_SUGGESTION_API}${searchQuery}`);
    const json = await data.json();
    
   
    setSuggestion(json[1])
    
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() =>{
      if (searchCache[searchQuery])
       { setSuggestion(searchCache[searchQuery]) 
        } else
    getSearchSuggestion()}, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const suggestionClick = (s) => {
    setSearchQuery(s);
    dispatch(QueryResults(s));
    setShowSuggestion(false);
    navigate("/searchresult")
  };

  const clickHandler = () => {
    dispatch(QueryResults(searchQuery));
    setSearchQuery(searchQuery);
    navigate("/searchresult")
  };
  const handleBlur = (e) => {
    if (
      suggestionBoxRef.current &&
      !suggestionBoxRef.current.contains(e.relatedTarget)
    ) {
      setShowSuggestion(false);
    }
  };

  return (
    <div className=" sticky top-0">
    <div className="grid grid-flow-col p-2 m-2 mb-0 bg-white ">
       <div className="flex gap-5 col-span-1">
        <img
          className="h-8 cursor-pointer ml-2  mr-1"
          onClick={toggleMenuHandler}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="hamburger"
        ></img>
        <img
          className="h-8"
          alt="youtube"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        ></img>
      </div>

      <div className="col-span-10 flex justify-center">
        <div className="but">
         <div className="w-full bg-slate-400 rounded-full h-8 "> <input
            className=" w-full rounded-full h-8  p-4 m-0"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={handleBlur}
          ></input></div>
       
          <div>
          <div className="relative  image-head w-5">
<img  className="w-5 absolute image bg-gray-200"  onClick={clickHandler} src="https://cdn-icons-png.freepik.com/256/54/54481.png?ga=GA1.1.1135962845.1719385372&semt=ais_hybrid"></img> </div>
        </div> </div>
        {showSuggestion && searchQuery.length !== 0 && (
          <div
            ref={suggestionBoxRef}
            className="bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg absolute top-10"
          >
            <ul>
              {showSuggestion &&
                suggestion.map((s) => (
                  // <Link to="/searchresult">  
                   <li
                    tabIndex={1}
                    className="cursor-pointer"
                    key={s}
                    onClick={() => suggestionClick(s)}
                  >
                    {s}
                  </li>
                

                ))}
            </ul>
          </div>
        )}
      </div>

     <Link to ="/SignUp"> <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        ></img>
      </div>  </Link>

    </div>
   {/* <ButtonList></ButtonList> */}
   </div>
  );
};

export default Head;
//lru
