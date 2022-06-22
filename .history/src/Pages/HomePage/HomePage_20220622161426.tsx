import React from 'react'
import MainComp1 from '../../Components/VideoMain/mainComp1/mainComp1'
import VideoMain from '../../Components/VideoMain/VideoMain'
import './HomePage.css'


function HomePage() {
  return (
    <div className='homePage'>
        <VideoMain 
            path='./Assets/main.gif'
            height='900px'
            text="it outstaffing company "
        />
        <MainComp1 
          titleMain='fsfsdfdf'
          title1='Extensive experience'
          desc1=''
          num1=''
          text1=''

          title2='Extensive experience'
          desc2=''
          num2=''
          text2=''
          
          title3='Extensive experience'
          desc3=''
          num3=''
          text3=''

        >

    </div>
  )
}

export default HomePage