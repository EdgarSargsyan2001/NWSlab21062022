
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
        height: inherit;
        position:absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7) ;
    }
    .imgDiv img{
        width:100vw;
    }

`

