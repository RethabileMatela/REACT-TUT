import React from 'react'

function ListRenderingUniqueId() {

    const products = [
    {id: 1, name: "laptop", price: 500},
    {id: 2, name: "phone", price: 200},
    {id: 3, name: "modem", price: 50},
    {id: 4, name: "laptop", price: 900}];

    const productList = products.map((product) => (<h3 key={product.id}>{product.name} : R {product.price}</h3>));

return <div>{productList}</div>}
export default ListRenderingUniqueId