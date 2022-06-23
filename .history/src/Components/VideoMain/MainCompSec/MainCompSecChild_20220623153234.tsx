import React from 'react'
import { MainCompSecChildStl } from '../../../style/MainCompSecStyle'
import { a } from "../../../../public";
function MainCompSecChild({title,desc,imgUrl}:{title:string,desc:string,imgUrl:string}) {

  return (
    <MainCompSecChildStl>
        <img src={imgUrl} alt={imgUrl}  />
        <h2>{title}</h2>
        <p>{desc}</p>

    </MainCompSecChildStl>
  )
}

export default MainCompSecChild