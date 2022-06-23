import React from 'react'
import { MainCompFirstStl } from '../../../style/mainComp1style'
import MainCompFirstChld from './MainCompFirstChld'

interface obj

function MainCompFirst({titleMain,btnOpen,ArrInfo}:{titleMain:String,btnOpen:boolean,ArrInfo:Array<any>}) {


  return (
    <MainCompFirstStl>
      <h1 className='titleMain'>{titleMain}</h1>
      <div className='MainCompChildren'>
        {
          ArrInfo
          .map((el)=><MainCompFirstChld
                        title={el.title}  
          
                  />)
        }
      </div>
          
    </MainCompFirstStl>
  )}
        
        
        
export default MainCompFirst