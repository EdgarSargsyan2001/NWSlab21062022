import React from 'react'
import { MainCompFirstStl } from '../../../style/mainComp1style'
import MainCompFirstChld from './MainCompFirstChld'

function MainCompFirst({titleMain,btnOpen,}) {


  return (
    <MainCompFirstStl>
      <h1 className='titleMain'>{titleMain}</h1>
      <div className='MainCompChildren'>
        <MainCompFirstChld
          title={title1}
          desc={desc1}
          num={num1}
          text={text1}
          btnOpen={btnOpen}
        />
        <MainCompFirstChld
          title={title2}
          desc={desc2}
          num={num2}
          text={text2}
          btnOpen={btnOpen}
        />
        <MainCompFirstChld
          title={title3}
          desc={desc3}
          num={num3}
          text={text3}
          btnOpen={btnOpen}
        />
      </div>
          
    </MainCompFirstStl>
  )}
        
        
        
export default MainCompFirst