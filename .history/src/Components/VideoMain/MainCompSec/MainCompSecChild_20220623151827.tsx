import React from 'react'
import { MainCompSecChildStl } from '../../../style/MainCompSecStyle'

function MainCompSecChild({title,desc,imgUrl}:{title:string,desc:string,imgUrl:string}) {

  return (
    <MainCompSecChildStl>
        <img url={imgUrl} />
        <h2>{title}</h2>
        





    </MainCompSecChildStl>
  )
}

export default MainCompSecChild