// import React from 'react'

// function ListRendering() {
//   const products = ["phone", "laptop", "modem"]
//   return (
//     <div>
// {/* in the callback we get access to one product  */}
// {products.map((product)=>(<h3>{product}</h3>))}
//     </div>
//   )
// }

// export default ListRendering

// map allows us to loop through an array

import React from "react";

function ListRendering() {
  const products = ["phone", "laptop", "modem"];
  // the list should have a key attribute, react uses keys for updating elements, create array as objects to access unique key 
  const productList = products.map((product) => <h3 key={product}>{product}</h3>);
  return <div>{productList}</div>;
}

export default ListRendering;
