import styled from 'styled-components'



export const MainCompSecStl = styled.div`


    margin-top: 40px;
    border: 1px solid red;



    .MainCompSecChildren{
        margin-top: 30px;
        display: grid;
        grid-template-columns:repeat(3,1fr);
        grid-gap: 50px;
        
    }

    
    
    
    
    
    `

export const MainCompSecChildStl = styled.div`

    border: 1px solid blue;
    
    :nth-child(1){
        grid-column: 1/3;
        
    }
    
    
    img{
        border-radius: 60px;
        transition: .3s;
        width: 100%;
        height: 437px;
    }
    img:hover{
        border-radius:40%;

        
    }


`