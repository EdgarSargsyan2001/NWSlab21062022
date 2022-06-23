import React from 'react'
import { MainTitleStl } from '../../../style/AllStyle'

interface infoObj {
    imgUrl:string,
    title:string,
    desc:string
}

function MainCompSec({titleMain,ArrInfo}:{mainTitle:string,ArrInfo:Array<infoObj>}) {
  return (
    <div>
       <MainTitleStl>{mainTitle}</MainTitleStl>




    </div>
  )
}

export default MainCompSec