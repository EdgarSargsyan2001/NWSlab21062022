import styled from 'styled-components'



export const MainCompSecStl = styled.div`


    margin: 40px 0;
    border: 1px solid red;



    .MainCompSecChildren{
        margin-top: 30px;
        display: grid;
        grid-template-columns:repeat(3, 1fr);
        grid-template-rows: repeat(2,450px);
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


`