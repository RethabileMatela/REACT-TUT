import React from "react";
//1 ) change input types by making a prop called inputtype in  UseStateReusableComponents function
//2) set type of input bar to input type prop
//6) pass the state as prop to make it mutable by declaring  inputvalue and setinputvalue props
//7) in input you can add events
const UseStateReusableComponents = ({
  inputType,
  inputValue,
  setinputvalue,
}: any) => (
  <input type={inputType} onChange={(e) => setinputvalue(e.target.value)} />
);
export default UseStateReusableComponents;
