import React from 'react'

function MemosChild({count}:any) {
    console.log("child component being rerendered");
    
    // avoid rerendering of child component by enclosing it in React.Memo()

  return (
    <div>child count is {count}</div>
  )
}

export default React.memo(MemosChild)