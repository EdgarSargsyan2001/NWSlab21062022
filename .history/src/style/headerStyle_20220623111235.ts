import styled from 'styled-components'


export const HeaderStl = styled.header`

    width: 100vw;
    /* height: 80px; */
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index:15;
    display:flex;
    justify-content: space-between;
    padding: 0 100px;
    align-items: center;
    background: rgb(0 0 0 / 0%);
    
    .header__inner{ 
        border: 1px solid green;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }   
    .header__logo{
        font-size: 30px;
        font-weight: 700;
    }
    .logo{
        /* width:69px;
        height:69px;
        border:1px solid red;
        color:#FFF; */
    }

`


export const ContainerStl = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;

`