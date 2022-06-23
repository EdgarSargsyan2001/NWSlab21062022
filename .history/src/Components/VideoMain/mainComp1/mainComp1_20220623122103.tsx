import React from 'react'
import { MainComp1Style } from '../../../style/mainComp1style'
import MainComp1in1 from './mainComp1in1'

function MainComp1({
  titleMain,
  btnOpen,
  title1,
  title2,
  title3,
  desc1,
  desc2,
  desc3,
  num1,
  num2,
  num3,
  text1,
  text2,
  text3
  }:any) {


  return (
    <MainComp1Style>
      <h1 className='titleMain'>{titleMain}</h1>
      <div className='MainCompCh'>
        <MainComp1in1
          title={title1}
          desc={desc1}
          num={num1}
          text={text1}
          btnOpen={btnOpen}
        />
        <MainComp1in1
          title={title2}
          desc={desc2}
          num={num2}
          text={text2}
          btnOpen={btnOpen}
        />
        <MainComp1in1
          title={title3}
          desc={desc3}
          num={num3}
          text={text3}
          btnOpen={btnOpen}
        />
      </div>
          
    </MainComp1Style>
  )}
        
        
        
export default MainComp1