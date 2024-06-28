import React from 'react'
// import resetErrorBoundary

const Boundary = ({error,resetErrorBoundary}) => {
  return (
    <div><p>  something went wrong:{error.message}</p>
    
    <button onClick={resetErrorBoundary}> try</button></div>
  )
}

export default Boundary