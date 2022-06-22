import React from 'react'
import { HeaderStyle } from '../../style/headerStyle'
import { FiChevronDown } from "react-icons/fi";


function Header() {

  
  return (
    <div>
        <HeaderStyle>
            <div className='logo'>logo</div>
            <ul className='ul'>
                <li>tech stack <FiChevronDown/></li>
                <li>industries <FiChevronDown/></li>
                <li>company <FiChevronDown/></li>
                <li>projects </li>
                <li>pricing</li>

            </ul>
        </HeaderStyle>
    </div>
  )
}

export default Header