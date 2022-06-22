import React from 'react'

function MainComp1in1({title,desc,num,text}:{title:string,desc:string,num:string,text:string}) {
  return (
    <div>
      

      
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{num}</p>
        <p>{text }</p>
    </div>
  )
}

export default MainComp1in1