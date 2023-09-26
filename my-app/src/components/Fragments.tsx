import React from 'react'

function Fragments() {
  return (
    // 3) when you an unecessary parent component like an unnecessary div use fragments instead, replace div with React.Fragment or empty brackets
    <>
     {/* <React.Fragment> */}

        {/* 1) 2 children h1 and h3  */}
        <h1> Heading </h1>
        <h3>Subheading</h3>
        
     {/* </React.Fragment> */}
    </>
  )
}

export default Fragments

// fragments allow you to group children components together without adding etra node to DOM  , GOOD FOR COLUMNS IN TABLES 