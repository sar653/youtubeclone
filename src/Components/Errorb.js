import React, { useState } from 'react'


const Errorb = () => {

    const [count,setCount]=useState(0)
// try{
//     if(count===3){


//         throw new Error("Danger zone")
//     }} catch(err){
//  console.log(err)
//     }

if(count===3){


            throw new Error("Danger zone")
        }
  return (
    <div>Errorb:{count}
    
    <button onClick={()=> setCount(count+1)}>i</button>
    </div>
  )
}

export default Errorb