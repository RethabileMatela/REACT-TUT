import React, { useState } from "react";

function UseState() {
  //1) initialize count state variable , declare setCount function to update count state variable, intialize count variable to 0
  const [count, setCount] = useState(0);

  // 3) addOne function uses setCount function to increase count variable by one
  const addOne = () => {
    setCount(count + 1);
  };
  return (
    // 2) on button click we run addOne fuction
    <div>
      <button onClick={addOne}> ADD ONE </button>
      {/* 4) we return that value from addOne/setCount  functions / the count variable in the html   */}
      <h4> you have clicked {count} times</h4>
    </div>
  );
}

export default UseState;
