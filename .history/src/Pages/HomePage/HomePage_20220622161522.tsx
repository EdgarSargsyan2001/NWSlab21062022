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
          desc1='For over a decade we have developed thousands of outstanding projects that helped our clients accomplish their business goals '
          num1=''
          text1=''

          title2='Industry-focused specialists '
          desc2='With a strong focus on technology-intensive industries and constant attention to detail and IT trends, NWSLABs specialists help clients from all over the world '
          num2=''
          text2=''
          
          title3='Customer loyalty '
          desc3=''
          num3=''
          text3 =''

        >

    </div>
  )
}

export default HomePage