import React from 'react'
import { MainCompFirstChldStl } from '../../../style/MainCompFirstStyle'
import { FiArrowRight } from "react-icons/fi";

function MainCompFirstChld({title,desc,num,text,btnOpen}:{title:string,desc:string,num?:string,text?:string,btnOpen:boolean}) {
  return (      
    <MainCompFirstChldStl>

        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
        {!btnOpen ? <>
            <p className='num'>{num}</p>
            <p className='text'>{text }</p>

          </>:

            <button className='Btn'><FiArrowRight/></button>

        }
    </MainCompFirstChldStl>
  )
}

export default MainCompFirstChld