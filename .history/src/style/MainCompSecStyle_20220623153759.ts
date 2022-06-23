import styled from 'styled-components'



export const MainCompSecStl = styled.div`


    margin-top: 40px;
    border: 1px solid red;



    .MainCompSecChildren{
        display: grid;
        grid-template-columns:repeat(3,1fr);
        
    }
    .MainCompSecChildren::{
        grid-column: 1/3;
        background: red;
        
    }
    
    
    
    
    
`

export const MainCompSecChildStl = styled.div`
    border: 1px solid blue;


    img{
        width: 100px;
        height: 100px;
    }


`