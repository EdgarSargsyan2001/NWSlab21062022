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
                      <a  href='#'>Tech Stack<FiChevronDown/></a>
                      <a href='#'>Industries<FiChevronDown/></a> 
                      <a href='#'>Company<FiChevronDown/></a>
                      <a href='#'>Projects</a>
                      <a href='#'>Pricing</a> 
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