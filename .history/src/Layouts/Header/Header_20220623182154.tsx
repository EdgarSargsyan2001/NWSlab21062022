import React from 'react'
import { ContainerStl, HeaderStl } from '../../style/headerStyle'
import { FiChevronDown ,FiList} from "react-icons/fi";
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
                    <div className='navIcon'><FiList/></div>

              </div>
          </ContainerStl>
        </HeaderStl>

        <VideoMain 
          path='../../Assets/main.gif' 
          text='IT оutstaffing сompany'
          />
    </div>
  )
}

export default Header