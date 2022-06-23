import React from 'react'
import { MainTitleStl } from '../../../style/AllStyle'
import { MainCompSecStl } from '../../../style/MainCompSecStyle'
import MainCompSecChild from './MainCompSecChild'

interface infoObj {
    imgUrl:string,
    title:string,
    desc:string
    titleHover?:string,
    descHover:string
}

function MainCompSec({titleMain,ArrInfo}:{titleMain:string,ArrInfo:Array<infoObj>}) {
  return (
    <MainCompSecStl>
       <MainTitleStl>{titleMain}</MainTitleStl>
        <div className='MainCompSecChildren'>
            {
                ArrInfo
                    .map(el=><MainCompSecChild
                            imgUrl={el.imgUrl}
                            title={el.title}
                            desc={el.desc}
                            titleHover={el.titleHover}
                            descHover={el.descHover}
                        />)
            }
            
        </div>


    </MainCompSecStl>
  )
}

export default MainCompSec