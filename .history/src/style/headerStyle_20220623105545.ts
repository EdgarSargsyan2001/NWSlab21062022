import styled from 'styled-components'


export const HeaderStyle = styled.header`

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
        color:#FFF;
    }

`


export const Container = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;


`