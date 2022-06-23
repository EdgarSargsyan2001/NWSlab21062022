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
        width: inherit;
        height: inherit;
    }
    img:hover {
        border-radius:50%;

    }

    .title{
        font-family: 'Grandstander';
        font-weight: 500;
        font-size: 25px;
        line-height: 100%;
        margin: 10px 0;
        transition: .8s;
    }
    
    .desc{
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #999999;
    }


`

export const CompSecImgDivStl = styled.div`
        width: 100%;
        height: 25vw;
        
        transition: .8s;
        cursor: pointer;


`