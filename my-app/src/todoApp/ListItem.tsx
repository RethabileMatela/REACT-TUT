import React from 'react'
//17) function should accept props 
// function ListItem(props: any) {
//  *****can destructure props and directly use name
function ListItem({name}: any) {

  return (
//    18) accept name from the props  and extract item 
    // ***** <div>{props.name}</div>
    <div>{name}</div>

  )
}

export default ListItem