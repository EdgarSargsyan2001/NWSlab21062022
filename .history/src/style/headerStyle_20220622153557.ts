import styled from 'styled-components'


export const HeaderStyle = styled.div`

    width: 100vw;
    height: 80px;
    display:flex;
    justify-content: space-between;
    padding: 0 100px;
    align-items: center;
    position: fixed;
    background: rgb(0 0 0 / 0%);
    z-index: 5;
    

    .logo{
        width:69px;
        height:69px;
        border:1px solid red;
        color:;
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
        cursor:pointer;
        margin: 15px ;
    }


`