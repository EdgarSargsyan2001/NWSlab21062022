import styled from 'styled-components'



export const MainCompSecStl = styled.div`


    margin: 40px 0;
    border: 1px solid red;
    padding: 57px 0;



    .MainCompSecChildren{
        margin-top: 50px;
        display: grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap: 5%;
        
    }

    
    
    
`

export const MainCompSecChildStl = styled.div`

    
    :nth-child(1){
        grid-column: 1/3;
        
    }
    
    
    img{
        width: 100%;
        height: 25vw;
        border-radius: 60px;
        transition: .8s;
        cursor: pointer;
    }
    img:hover{
        border-radius:50%;

    }
    .title{
        font-family: 'Grandstander';
        font-weight: 500;
        font-size: 25px;
        line-height: 100%;
    }
    .desc{
        font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
/* or 22px */


/* H2 */

color: #999999;
    }


`