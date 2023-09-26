import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  // 1) call useEffect hook
  // in useEffect pass a parameter which is a function which gets executed after every render of the component
  useEffect(() => {
    // 2) pass in an arrow function that updates the document title
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> click {count} times </button>
    </div>
  );
}

export default UseEffectHook;

// lets you perform side effects in functional components
// a close replacement for componentDidMount , componentDidUpdate and componentDidUnmount
