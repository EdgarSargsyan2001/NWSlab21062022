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
        ma
          title1='Extensive experience'
        >

    </div>
  )
}

export default HomePage