import React, { useState } from "react";
import ConditionalRenderingTest from "./ConditionalRenderingTest";

function ConditionalRendering() {
    // a) isToggles is current state, function setIsToggled updates isToggled and sets to false
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      {/* b) the toggle button */}
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>

      {/* c) if isToggled is true return the test component  */}
      {/* {isToggled && <ConditionalRenderingTest />} */}
      {isToggled ? <ConditionalRenderingTest /> : <p> the value is false!</p>}
    </div>
  );
}

export default ConditionalRendering;
