import React from 'react'
import { HeaderStyle } from '../../style/headerStyle'
import { FiChevronDown } from "react-icons/fi";


function Header() {

  
  return (
    <div>
        <HeaderStyle>
            <div className='logo'></div>
            <ul className='ul'>
                <li>tech stack</li>
                <li>industries</li>
                <li>company</li>
                <li>projects</li>
                <li>pricing</li>

            </ul>
        </HeaderStyle>
    </div>
  )
}

export default Header