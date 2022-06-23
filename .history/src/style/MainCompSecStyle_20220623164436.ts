import styled from 'styled-components'



export const MainCompSecStl = styled.div`


    margin: 40px 0;
    /* border: 1px solid red; */
    padding: 57px 0;



    .MainCompSecChildren{
        margin-top: 50px;
        display: grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap: 5%;
        
    }

    @media screen and (max-width:1024px) {
        .MainCompSecChildren{
            grid-template-columns:repeat(2, 1fr);
            grid-gap: 3%;
        }
    }
    @media screen and (max-width:600px) {
        .MainCompSecChildren{
            grid-template-columns:repeat(1, 1fr);
            grid-gap: 3%;
        }
    }

    
    
    
`

export const MainCompSecChildStl = styled.div`

    
    :nth-child(1){
        grid-column: 1/3;
        
    }
    :hover .title{
        color:#573AB5;

    }

    img{
        width: inherit;
        height: inherit;
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
    border-radius: 60px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .8s;

    :hover{
        border-radius:50%;
    }

    :hover .hoverOpen{
       color:red;
    }
    .hoverOpen{
        position: absolute;
        top: 50%;
    }
    @media screen and (max-width:1024px) {
        height: 40vw;
    }


`