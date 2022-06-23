import styled from 'styled-components'


export const HeaderStl = styled.header`

    width: 100vw;
    height: 80px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index:15;
    display: flex;
    align-items: center;
    background:green ;
    
    .header__inner{ 
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }   
    .header__logo{
        font-size: 30px;
        font-weight: 700;
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