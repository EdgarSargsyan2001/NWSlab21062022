import styled from 'styled-components'


export const HeaderStyle = styled.div`

    width: 100vw;
    height: 70px;
    display:flex;
    justify-content: space-between;
    padding: 0 100px;
    align-items: center;
    position: fixed;
    background: black;
    z-index: 5;
    

    .logo{
        width:69px;
        height:69px;
        border:1px solid red;
    }

    .ul{
        display:flex;
        list-style:none;
        color:#FFF;
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 110%;
    }
    li{
        margin: 15px ;
    }


`