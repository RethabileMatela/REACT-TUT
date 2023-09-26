// import React from 'react'
// import UseContextChildA from './UseContextChildA'

// function UseContext() {
// // 1) create the context 
// export const UserContext = React.createContext(undefined)   
//   return (
//     <div>
//  {/* 2) provide context with a value and the provider must wrap the children components
//  for the value to be available and provide a value */}
//         <UserContext.Provider value={'Retha'}>
//         <UseContextChildA></UseContextChildA>
//         </UserContext.Provider>
      
//     </div>
//   )
// }

// export default UseContext

// pass data through component tree without prop drilling

import React from 'react'

function UseContext() {
  return (
    <div>UseContext</div>
  )
}

export default UseContext