
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 import { NextArrow,PrevArrow } from "./Arrow";
import Button from "./Button";
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

const Slide = () => {



  const settings = {
    // dots: true, // Show pagination dots
    // infinite: true, // Infinite loop
dots:false,
    arrows:true,
    prevArrow:<PrevArrow></PrevArrow>,
    nextArrow:<NextArrow></NextArrow>,
    
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    initialSlide: 0, // Index of initial slide
//  vertical:false
   
    responsive: [
      {
        breakpoint: 1024, // Responsive breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return ( 
    <div className="bg-yellow-100  ">
    <div className={` bg-orange-400  w-2/6 pl-4 pt-0`}>
     
     <div><Slider {...settings}>
        {buttonNames.map((name, index) => (
          <div key={index}>
            <Button name={name} />
          </div>
        ))}
      </Slider></div> 
    </div>
    </div>
  );
}


export default Slide;
