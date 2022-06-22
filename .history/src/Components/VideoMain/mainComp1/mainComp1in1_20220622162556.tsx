import React from 'react'
import { MainComp1in1Style } from '../../../style/mainComp1style'

function MainComp1in1({title,desc,num,text}:{title:string,desc:string,num:string,text:string}) {
  return (
    <div>
      
    <MainComp1in1Style>

        <h3>{title}</h3>
        <p>{desc}</p>
      
        <p>{num}</p>
        <p>{text }</p>
    </div>
    </MainComp1in1Style>
  )
}

export default MainComp1in1