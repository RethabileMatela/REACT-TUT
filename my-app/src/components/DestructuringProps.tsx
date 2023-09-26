// import React from "react";

// function DestructuringProps(props: { name: string , lastName: string }) {
//   console.log(props);

//   return (
//     <div>
//       <h1>
//         NAME: {props.name}
//         {props.lastName}
//       </h1>
//     </div>
//   );
// }

// export default DestructuringProps;

import React from 'react'

function DestructuringProps(props: any) {

    const{name, lastName} = props;

  return (
    <div><h1>Name :: {name} {lastName}</h1></div>
  )
}

export default DestructuringProps