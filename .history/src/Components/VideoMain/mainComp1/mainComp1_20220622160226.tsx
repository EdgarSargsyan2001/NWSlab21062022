import React from 'react'

function mainComp1({text,title }:{text:string,title:string }) {
  return (
    <div>
      <h1>{title}</h1>
     <mainComp1in1 />

    </div>
  )
}

export default mainComp1