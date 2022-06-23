import React from 'react'
import { MainTitleStl } from '../../../style/AllStyle'
import { MainCompSecStl } from '../../../style/MainCompSecStyle'
import MainCompSecChild from './MainCompSecChild'

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

            <MainCompSecChild
            
            />
        </div>



    </MainCompSecStl>
  )
}

export default MainCompSec