import React from 'react'
import { HeaderStyle } from '../../style/headerStyle'
import { FiChevronDown } from "react-icons/fi";


function Header() {

  
  return (
    <div>
        <HeaderStyle>
            <div className='logo'>logo</div>
            <ul className='ul'>
                <a href='#'>tech stack <FiChevronDown/></a>
                <li href='#'>industries <FiChevronDown/></li>
                <li href='#'>company <FiChevronDown/></li>
                <li v>projects </li>
                <li>pricing</li>

            </ul>
        </HeaderStyle>
    </div>
  )
}

export default Header