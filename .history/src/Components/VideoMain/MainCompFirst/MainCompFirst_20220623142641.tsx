import React from 'react'
import { MainCompFirstStl } from '../../../style/mainComp1style'
import MainCompFirstChld from './MainCompFirstChld'

function MainCompFirst({titleMain,btnOpen,ArrInfo}:{titleMain:Str}) {


  return (
    <MainCompFirstStl>
      <h1 className='titleMain'>{titleMain}</h1>
      <div className='MainCompChildren'>
        
      </div>
          
    </MainCompFirstStl>
  )}
        
        
        
export default MainCompFirst