import React from 'react'
import './Header.css'

function Header() {

    const path = './Assets/main.gif'
    const videoStyle = {

        backgroundImage:`url(${path})`


    }

  return (
    <div>
        heder
        <div className="nav"></div>

        <div className="video" style={videoStyle} >
        

        </div>
            
        

    </div>
  )
}

export default Header