import React from 'react'
import './Header.css'

function Header() {

    const videoStyle = {
        'backgroundmage':'url("../../../public/Assets/main.gif")'
    }

  return (
    <div>

        <div className="nav"></div>

        <div className="video" style={videoStyle}>

        </div>
            
        

    </div>
  )
}

export default Header