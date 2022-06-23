import React from 'react'
import { ContainerStl, HeaderStl } from '../../style/headerStyle'
import { FiChevronDown } from "react-icons/fi";


function Header() {

  
  return (
    <div>
        <HeaderStl>
          <ContainerStl>
              <div className='header__inner'>
                    <div className='header__logo'>NWS</div>

                    <nav>
                      <a className='' href='#'>Tech Stack<FiChevronDown/></a>
                      <a className='' href='#'>Industries<FiChevronDown/></a> 
                      <a className='' href='#'>Company<FiChevronDown/></a>
                      <a className='' href='#'>Projects</a>
                      <a className='' href='#'>Pricing</a> 
                    </nav>
              </div>
          </ContainerStl>
        </HeaderStl>

        <div className='intro'>
          <ContainerStl>

            {/* <h1>cont</h1> */}


          </ContainerStl>
        </div>
    </div>
  )
}

export default Header