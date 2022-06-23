import React from 'react'
import { MainCompFirstStl } from '../../../style/mainComp1style'
import MainCompFirstChld from './MainCompFirstChld'

interface obj {
  title:string,
  desc:string,
  num?:string,
  text?:string

}

function MainCompFirst({titleMain,btnOpen,ArrInfo}:{titleMain:String,btnOpen:boolean,ArrInfo:Array<any>}) {


  return (
    <MainCompFirstStl>
      <h1 className='titleMain'>{titleMain}</h1>
      <div className='MainCompChildren'>
        {
          ArrInfo
          .map((el)=><MainCompFirstChld
                        title={el.title}
                        desc={el.desc}  
          
                  />)
        }
      </div>
          
    </MainCompFirstStl>
  )}
        
        
        
export default MainCompFirst