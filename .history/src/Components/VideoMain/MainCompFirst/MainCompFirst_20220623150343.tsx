import React from 'react'
import { MainTitleStl } from '../../../style/AllStyle'
import { MainCompFirstStl } from '../../../style/mainComp1style'
import MainCompFirstChld from './MainCompFirstChld'

interface obj {
  title:string,
  desc:string,
  num?:string,
  text?:string

}

function MainCompFirst({titleMain,btnOpen,ArrInfo}:{titleMain:String,btnOpen:boolean,ArrInfo:Array<obj>}) {


  return (
    <MainCompFirstStl>
      <MainTitleStl>{titleMain}</MainTitleStl>
      <div className='MainCompChildren'>
        {
          ArrInfo
          .map((el,i)=><MainCompFirstChld 
                        key={i}
                        btnOpen={btnOpen}
                        title={el.title}
                        desc={el.desc}  
                        num={el.num}
                        text={el.text}
          
                  />)
        }
      </div>
          
    </MainCompFirstStl>
  )}
        
        
        
export default MainCompFirst