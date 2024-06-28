import React, { useState, useRef,useEffect} from 'react'
 

const Ref = () => {
    const[input ,setInput]=useState("")
    const inputRef=useRef()
    const initialRef=useRef()
    const display=()=>{
        console.log(inputRef.current.value)


    }

    const Focusing=()=>{
        initialRef.current.value="hello"

    }
    const myRef = useRef(null);
 //   console.log(myRef.current.value)
    console.log("rendered")
    
    useEffect(()=>{
 console.log(myRef)
    },[])
    console.log(inputRef)
  return (
    <div className='w-96 h-96 border border-black '>
       <div className='m-16'><input  className='bg-brown-800'
        type="text" 
    
      ref={inputRef} >
        </input> <button onClick={display}>click</button> </div>
        
        <div><p>my name is{inputRef?.current?.value}</p></div>
        
        


  <div ref={myRef}>hello</div> 
<div>
    <input type="text" ref={initialRef}></input><button onClick={Focusing}> click</button>
</div>
</div>

  )
}

export default Ref