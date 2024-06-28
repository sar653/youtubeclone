import React, { useState, useMemo } from "react";
import Demo2 from "./Demo2";
import Ref from "./Ref";

const Demo = () => {
  const [text, setText] = useState(0);

  const [isdarkTheme, setDarkTheme] = useState(true);

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  function findNthPrime(n) {
    if (n < 1) return undefined;

    let count = 0;
    let candidate = 1;

    while (count < n) {
      candidate++;
      if (isPrime(candidate)) {
        count++;
      }
    }

    return candidate;
  }

  const prime = useMemo(() =>{console.log("prim") ;return findNthPrime(text) }, [text]);
  console.log("rendering");
  const changeColor = () => {
    setDarkTheme(!isdarkTheme);
  };
  return (
    <>
      <div
        className={
          "m-4  p-2  w-96  h-96 text-white border border-black " +
          (isdarkTheme && "bg-gray-900")
        }
      >
        <div>
          <button className="bg-red-900" onClick={changeColor}>

            button
          </button>
        </div>
        <div>
          <input
            className="border border-black  text-black h-10"
            type="number"
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></input>
        </div>

        <div>
          <h4 className="text-white"> prime:{prime}</h4>
        </div>
      </div>
      {/* <Demo2></Demo2>
    <Ref></Ref>  */}
    </>
  );
};

export default Demo;
