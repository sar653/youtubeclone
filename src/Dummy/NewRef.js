import React, { useRef,useEffect } from 'react'

const NewRef = () => {
    const myRef =useRef("hello")
    
   
        console.log(myRef.current.innerText)
   
    
  return (
    <div>


    <div ref={myRef}>hello</div>
    <h1>{myRef.current.innerText}</h1>

    </div>
  )
}

export default NewRef