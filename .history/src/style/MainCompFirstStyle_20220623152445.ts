import styled from 'styled-components'




export const MainCompFirstStl = styled.div`


    .MainCompChildren{
        display: flex;
        grid-gap: 5%;
        
    }

    @media screen  and (max-width:1024px)  {

        .MainCompChildren{
            display: block;
        
        }

    }

`
export const MainCompFirstChldStl = styled.div`

    margin-top: 50px;
    width: 33%;
    position: relative;
    border: 1px solid red;
    cursor: pointer;
    
    :hover .title{
        color:#573AB5;
    }
    
    .title{
        transition: 0.2s;
        margin-bottom: 15px;
        font-family: 'Grandstander';
        font-style: normal;
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
    }
    .num{
        font-family: 'Grandstander';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 100%;
        color: #573AB5;
        margin-top: 30px;
    }
    .text{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #999999;
    }
    .Btn{
        width: 42px;
        height: 42px;
        background: #573AB5;
        border: none;
        border-radius: 50%;
        color: white;
        padding: 6px 21px 0 9px;
        font-size: 24px;
        margin-top: 20px;
        cursor: pointer;
    }
    @media screen  and (max-width:1024px)  {
        width: 100%;
       
    }

    


`
