
import styled from 'styled-components'



export const VideoStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    
    .imgDiv{
        width:100vw;
        height:100vh;
        background-image:url(${({path}:{path:string})=>path}) ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .imgDiv::after{
        content:'';
        width:100vw;
        height: 100vh;
        background: rgba(0, 0, 0 , 0.6);
        position: absolute;
        top: 0;
        left: 0;

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

        .imgDiv::after,.imgDiv img{
            height: 600px;
          
        }
        .text{
            max-width: 500px;
            font-size: 94px;
        }
    }
    @media screen and (max-width:600px) {

        .text{
            max-width: 300px;
            font-size: 55px;
        }
    }
    @media screen and (max-width:350px) {
        .imgDiv::after,.imgDiv img{
            height: 500px;
          
        }
        .text{
            max-width: 200px;
            font-size: 40px;
        }
    }

`

