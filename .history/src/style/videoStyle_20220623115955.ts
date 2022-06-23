
import styled from 'styled-components'


export const VideoStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;

    .opacity{
        width: 100vw;
        height: ${({height}:{height:string})=>height};
        position:absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7) ;
    }

    .imgDiv img{
        width:100vw;
        height:${({height})=>height};
    }

    .text{
        width: 1000px;
        height: 420px;  
        position:absolute;
        border: 1px solid red;
        color: red;
        font-family: 'Grandstander';
        font-style: normal;
        font-weight: 600;
        font-size: 140px;
        line-height: 100%;
        opacity: 1;    
        text-align: center;
        text-transform: uppercase;
    
    }

`

