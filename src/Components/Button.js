import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" px-4 py-0 m-3 h-6  bg-gray-200 rounded-lg w-auto flex items-center text-sm justify-center  text-black font-light">
        {name}
      </button>
    </div>
  );
};

export default Button;
