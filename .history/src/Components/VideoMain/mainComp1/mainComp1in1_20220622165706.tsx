import React from 'react'
import { MainComp1in1Style } from '../../../style/mainComp1style'

function MainComp1in1({title,desc,num,text,btnOpen}:{title:string,desc:string,num?:string,text?:string,btnOpen:boolean}) {
  return (      
    <MainComp1in1Style>

        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
        {btnOpen

        }
        <p className='num'>{num}</p>
        <p className='text'>{text }</p>
    </MainComp1in1Style>
  )
}

export default MainComp1in1