import React from 'react'
import { MainTitleStl } from '../../../style/AllStyle'

interface infoObj {
    imgUrl:string,
    title:string,
    desc:string
}

function MainCompSec({titleMain,ArrInfo}:{titleMain:string,ArrInfo:Array<infoObj>}) {
  return (
    <div>
       <MainTitleStl>{titleMain}</MainTitleStl>




    </div>
  )
}

export default MainCompSec