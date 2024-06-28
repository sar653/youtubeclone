// import React from 'react'
// import Button from './Button'

// const Buttonlist = () => {

//   return (
//     <div className='flex'>
//          <Button  name="All"></Button>
//     <Button name="game"></Button>

//     <Button name="soccer"></Button>
//     <Button name="react"></Button></div>)

// }

// export default Buttonlist
import React from "react";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import WatchPage from "./WatchPage";

const buttonNames = [
  "All",
  "game",
  "soccer",
  "react",
  "coding",
  "sports",
  "cricket",
  "wwe",
  "javascript",
];

const ButtonList = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const buttonlist = isHome ? "buttonlist" : "";

  const settings = {
    // dots: true, // Show pagination dots
    arrow:true,
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 5, // Number of slides to scroll at a time
    initialSlide: 0, // Index of initial slide
    vertical:false
   
    // responsive: [
    //   {
    //     breakpoint: 1024, // Responsive breakpoint
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
 if (!isHome){
  return (
    <div className={` bg-gray-600 w-3/6 pl-4 pt-0`}>
      <Slider {...settings}>
        {buttonNames.map((name, index) => (
          <div key={index}>
            <Button name={name} />
          </div>
        ))}
      </Slider>
    </div>
  );
} else{ 
  return (
    <div className={`flex ${buttonlist} bg-white pl-4 pt-0`}>

        {buttonNames.map((name, index) => (
         
            <Button  key={index} name={name} />
          
        ))}
     
    </div>
  );
}
}

export default ButtonList;
