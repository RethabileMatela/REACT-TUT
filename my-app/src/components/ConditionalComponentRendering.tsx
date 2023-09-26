// import React, { useState } from "react";

// function ConditionalComponentRendering() {
//   const [display, setDisplay] = useState(false);
//   if (display) {
//     return (
//       <div>
//         {/* can also render other components here */}
//         <h3> This is a conditional component </h3>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3> Nothing to see here </h3>
//       </div>
//     );
//   }


// }

// export default ConditionalComponentRendering;


//can use ternary and element variable 

import React, { useState } from "react";

function ConditionalComponentRendering() {
  const [display, setDisplay] = useState(true);
let variableElement;

  if (display) {
    return (
    variableElement =
        <h3> This is a conditional component </h3>

    );
  } else {
variableElement =
        <h3> Nothing to see here </h3>
  }
return(
  <div>{variableElement}</div>
)

}

export default ConditionalComponentRendering;