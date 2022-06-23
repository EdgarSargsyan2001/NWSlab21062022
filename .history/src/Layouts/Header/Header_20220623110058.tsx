import React from 'react'
import { ContainerStl, HeaderStl } from '../../style/headerStyle'
import { FiChevronDown } from "react-icons/fi";


function Header() {

  
  return (
    <div>
        <HeaderStl>
          <ContainerStl>
              <div className='header__inner'>
  
              </div>
          </ContainerStl>
        </HeaderStl>

        <div className='intro'>
          <ContainerStl>

            <h1>logo</h1>


          </ContainerStl>
        </div>
    </div>
  )
}

export default Header