import styled from 'styled-components'


export const HeaderStl = styled.header`

    width: 100vw;
    height: 70px;
    box-sizing: border-box;
    background:green ;
    position: fixed;
    top: 0;
    left: 0;
    z-index:15;
    display: flex;
    align-items: center;
    
    .header__inner{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
    }   
    .header__logo{
        width: 69px;
        height: 61px;
        border: 1px solid red;
        color: white;

    }
    nav{
        text-transform: uppercase;
    }
    .nav__link{
        text-decoration:none;
        color: #fff;
        margin: 0 15px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 110%;
        
        
    }


`


export const ContainerStl = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;

`