import React from 'react'
import { MainTitleStl } from '../../../style/AllStyle'
import { MainCompSecStl } from './MainCompSecStl'

interface infoObj {
    imgUrl:string,
    title:string,
    desc:string
}

function MainCompSec({titleMain,ArrInfo}:{titleMain:string,ArrInfo?:Array<infoObj>}) {
  return (
    <MainCompSecStl>
       <MainTitleStl>{titleMain}</MainTitleStl>
        <div className='MainCompSecChildren'>
            {
                arr
            }
        </div>



    </MainCompSecStl>
  )
}

export default MainCompSec