
import styled from 'styled-components'



export const VideoStyle = styled.div`

    

    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    
    .opacity{
        width:100vw;
        height: 100vh;
        position:absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0 , 0.6) ;
    }

    .imgDiv img{
        width:100vw;
        height:100vh;
    }

    .text{
        max-width: 900px;
        height: 420px;  
        position:absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        font-family: 'Grandstander';
        font-weight: 600;
        font-size: 140px;
        line-height: 100%;
        text-align: center;
        text-transform: uppercase;
    
    }

    @media screen and (max-width:1024px) {
        .opacity,.imgDiv img{
            height: 600px;
          
        }
        .text{
            max-width: 500px;
            font-size: 94px;
        }
    }

`

