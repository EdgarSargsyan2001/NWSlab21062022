import React from 'react'
import './Header.css'
import gif from '../../../public/Assets/main'

function Header() {

    const path = '../../../public/Assets/main.gif'
    const videoStyle = {
        // backgroundImage:`url('${path}')`
    }

  return (
    <div>

        <div className="nav"></div>

        <div className="video" style={videoStyle}>
            <video src={path} ></video>

        </div>
            
        

    </div>
  )
}

export default Header