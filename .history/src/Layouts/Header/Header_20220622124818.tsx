import React from 'react'
import './Header.css'
import gif from '../../../public/Assets/main.gif'

function Header() {

    const path = '../../../public/Assets/main.gif'
    const videoStyle = {
        backgroundImage:`url(${gif})`


    }

    console.log(gif)
  return (
    <div>

        <div className="nav"></div>

        <div className="video" style={videoStyle}>

        </div>
            
        

    </div>
  )
}

export default Header