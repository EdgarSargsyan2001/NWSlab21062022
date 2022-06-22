import React from 'react'
import { HeaderStyle } from '../../style/headerStyle'
import { FaBeer } from 'react-icons/fa';


function Header() {

  
  return (
    <div>
        <HeaderStyle>
            <div className='logo'></div>
            <ul className='ul'>
                <li>tech stack <FaBeer /></li>
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