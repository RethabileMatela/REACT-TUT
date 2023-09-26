import React, { useEffect, useRef, useState } from "react";

function Refs() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    // useRef uses .current property to mutate values
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="tutorial">
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
export function Demo2(DemoProps: any) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="tutorial">
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}

export default Refs;

// used whenever you want to reference a value that is not needed for rendering
// lets you read updates without waiting for a rerender unlike useState
// if used in return function it will not return the updated value
