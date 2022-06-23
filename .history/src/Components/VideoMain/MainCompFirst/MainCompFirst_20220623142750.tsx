import React from 'react'
import { MainCompFirstStl } from '../../../style/mainComp1style'
import MainCompFirstChld from './MainCompFirstChld'

function MainCompFirst({titleMain,btnOpen,ArrInfo}:{titleMain:String,btnOpen:boolean,ArrInfo:Array<object>}) {


  return (
    <MainCompFirstStl>
      <h1 className='titleMain'>{titleMain}</h1>
      <div className='MainCompChildren'>
        ArrInfo
      </div>
          
    </MainCompFirstStl>
  )}
        
        
        
export default MainCompFirst