import React from "react";

function FunctionClick() {

// 2) define clickHandler function 
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      {/* 1) we pass a function as a handler rather than a string 
      donot add parenthesis () because it becomes a function call*/}
      <button onClick={clickHandler}>click me</button>{" "}
    </div>
  );
}

export default FunctionClick;

// EVENT HANDLING
// - events are named using camel case rather than lower case
