import React, { useState ,useRef } from "react";


const Demo2 = () => {
  let x = 10;

  const [Y,setY]=useState(0)
  const ref=useRef(0)
  console.log(ref)
  console.log("x",x);
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      
      <button
        onClick={() => {
          x = x + 1;
          console.log("x",x);
        }}
      >
        increase
      </button>
      <h1>let x={x}</h1>

      <div><button className="bg-red-900"
        onClick={() => {
         setY(Y + 1);
          console.log(Y,"y");
        }}
      >
        increase
      </button>
      <h1>state Y={Y}</h1></div> 
     
      <div>  <button className="bg-red-900"
        onClick={() => {
          ref.current=ref.current+1;
          console.log("ref",ref.current)
        }}
      >
        increaseRef
      </button>
      <h1 >ref z={ref.current}</h1></div>

    </div>
  );
};

export default Demo2;
