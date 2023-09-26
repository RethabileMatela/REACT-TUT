import React from 'react'

function PropsVsState() {
  return (
    <div>PropsVsState</div>
  )
}

export default PropsVsState

// props are objects that hold information to control the behavior of a component ,
// problem is that props are 
// state is also an object that can hold some information but that information may change over the lifetime of that component

// PROPS                                             STATE
// - passed to the componet                          - contained inside the component
// - props are immutable                             - state can be changed
// - can be accessed as props, this.props            - useState hook , this.state
// - like parameters passed to a function            - like variables declared in the function body 