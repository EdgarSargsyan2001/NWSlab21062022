import React from 'react'
import VideoMain from '../../Components/VideoMain'
import './HomePage.css'


function HomePage() {
  return (
    <div className='homePage'>
        <VideoMain 
            path='./Assets/main.gif'
            height='500px'
            text="it outstaffing com "
         />

    </div>
  )
}

export default HomePage