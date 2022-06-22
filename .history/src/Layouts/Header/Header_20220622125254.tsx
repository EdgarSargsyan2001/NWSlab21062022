import React from 'react'
import './Header.css'

function Header() {

    const path = './Assets/main.gif'
    const videoStyle = {
        backgroundImage:`url()`


    }

  return (
    <div>

        <div className="nav"></div>

        <div className="video" style={videoStyle} >
        
            {/* <img src={'./Assets/main.gif'} /> */}

        </div>
            
        

    </div>
  )
}

export default Header