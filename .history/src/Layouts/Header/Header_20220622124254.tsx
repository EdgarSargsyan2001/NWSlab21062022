import React from 'react'
import './Header.css'

function Header() {

    const path = "../../../public/Assets/main.gif"
    const videoStyle = {
        backgroundImage:`url('${}')`
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