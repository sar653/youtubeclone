import React from "react";
import "./Arrow.css"

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
    
      style={{ ...style, display: "block",}}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}

      style={{ ...style, display: "block"  }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
