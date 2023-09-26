import React, { useState } from "react";
import MemosChild from "./MemosChild";

function MemosParent() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const changeParentCount = () => {
    setParentCount(parentCount + 1);
  };

  const changeChildCount = () => {
    setChildCount(childCount + 1);
  };

  return (
    <div>
      MemosParent
      <h1> this is parent count {parentCount}</h1>
      <MemosChild count={childCount}></MemosChild>
      <button onClick={changeParentCount}>increment parent count</button>
      <button onClick={changeChildCount}>increment child count</button>
    </div>
  );
}

export default MemosParent;
