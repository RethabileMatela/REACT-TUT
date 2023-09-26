import React from 'react'

function ListRenderingWithoutId() {
    const products = [
        {name: "laptop", price: 500},
        {name: "phone", price: 200},
        {name: "modem", price: 50},
        {name: "laptop", price: 900}];
    
        const productList = products.map((product,index) => (<h3 key={index}>{product.name}</h3>
        ));
    
    return <div>{productList}</div>}
export default ListRenderingWithoutId

// if no id use indexOf 

// index as key anti-pattern - when you insert value at the top it appears as though was inserted at the bottom and values are messed up ,
//also a problem when sorting the list

// WHEN TO USE INDEX AS KEY 
// 1) items donot have a unique id 
// 2) the list is static and will not change 
// 3) the list will not be reordered or filtered 