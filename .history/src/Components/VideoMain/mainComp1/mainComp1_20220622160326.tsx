import React from 'react'
import 

function MainComp1({text,title }:{text:string,title:string }) {
  return (
    <div>
      <h1>{title}</h1>
     <MainComp1in1 />

    </div>
  )
}

export default MainComp1