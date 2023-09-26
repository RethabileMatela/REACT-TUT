// import { log } from 'console'
import React, { ReactNode } from 'react'

function PropsInFunctionalComponents(props: {
    children: ReactNode; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; 
}) {
    console.log(props);
    
  return (
    <div>hello {props.name} {props.children}</div>
  )
}

export default PropsInFunctionalComponents

// PROPS - optional input that your component can accept 
// - allows the component to be dynamic 
// we specify props as attributes
// props values are immutable/ value can not be changed 

// DESTRUCTURING PROPS 
// - an ES6 feature that makes it possible to unpack values from arrays or properties from objects 
// into distinct variables 
// - improves code readability 

// can destructure in the function body or parameter 


