import React from 'react'
import { ContainerStl, HeaderStl } from '../../style/headerStyle'
import { FiChevronDown ,FiAlignJustify} from "react-icons/fi";
import VideoMain from '../../Components/VideoMain/VideoMain';


function Header() {

  
  return (
    <div>
        <HeaderStl>
          <ContainerStl>
              <div className='header__inner'>
                    <div className='header__logo'>NWS</div>

                    <nav>
                      <a className='nav__link' href='#'>Tech Stack<FiChevronDown/></a>
                      <a className='nav__link' href='#'>Industries<FiChevronDown/></a> 
                      <a className='nav__link' href='#'>Company<FiChevronDown/></a>
                      <a className='nav__link' href='#'>Projects</a>
                      <a className='nav__link' href='#'>Pricing</a> 
                    </nav>
                    <div className='navIcon'><FiAlignJustify/></div>

              </div>
          </ContainerStl>
        </HeaderStl>

        <ContainerStl>
          <VideoMain 
            path='../../Assets/main.gif' 
            text='IT оutstaffing сompany'
            />
        </ContainerStl>
    </div>
  )
}

export default Header