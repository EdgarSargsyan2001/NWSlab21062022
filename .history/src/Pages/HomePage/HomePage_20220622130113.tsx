import React from 'react'
import './HomePage.css'


function HomePage() {


   const path = './Assets/main.gif'
   const videoStyle = {   
       backgroundImage:`url(${path})`   
   }

  return (
    <div  style={videoStyle} >
        

    </div>
  )
}

export default HomePage