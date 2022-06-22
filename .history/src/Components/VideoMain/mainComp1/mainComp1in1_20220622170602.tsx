import React from 'react'
import { MainComp1in1Style } from '../../../style/mainComp1style'
import { FiArrowRight } from "react-icons/fi";

function MainComp1in1({title,desc,num,text,btnOpen}:{title:string,desc:string,num?:string,text?:string,btnOpen:boolean}) {
  return (      
    <MainComp1in1Style>

        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
        {!btnOpen ? <>
            <p className='num'>{num}</p>
            <p className='text'>{text }</p>

          </>:

            <button className='Btn'>dsf</button>

        }
    </MainComp1in1Style>
  )
}

export default MainComp1in1