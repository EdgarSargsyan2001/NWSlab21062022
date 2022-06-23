import React from 'react'
import { MainCompSecChildStl } from '../../../style/MainCompSecStyle'

function MainCompSecChild({title,desc,imgUrl}:{title:string,desc:string,imgUrl:string}) {

  return (
    <MainCompSecChildStl>
        <img src={imgUrl} alt={imgUrl}  />
        <h2>{title}</h2>
        <p>{de}</p>






    </MainCompSecChildStl>
  )
}

export default MainCompSecChild