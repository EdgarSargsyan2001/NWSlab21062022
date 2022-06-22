
import styled from 'styled-components'


export const VideoStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    .imgDiv{
        width: 100vw;
        position: relative;
    }
    .opacity{
        width: 100vw;
        height: ${(props:{height;str})=>props.height};
        position:absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7) ;
    }
    .imgDiv img{
        width:100vw;
        height:${(props)=>props.height};
    }
    .text{
        width: 1094px;
        height: 420px;  
        position:absolute;
        color: white;
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

