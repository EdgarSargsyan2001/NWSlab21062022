import React from 'react'
import { MainCompSecChildStl,CompSecImgDivStl } from '../../../style/MainCompSecStyle'



function MainCompSecChild({title,desc,imgUrl}:{title:string,desc:string,imgUrl:string}) {

  return (
    <MainCompSecChildStl>
        <CompSecImgDivStl>
            <img src={imgUrl} alt={imgUrl}  />
            <h1 className='hoverOpen'>sdfsdfsdfsd</h1>

        </CompSecImgDivStl>

        <h2 className='title'>{title}</h2>
        <p className='desc'>{desc}</p>

    </MainCompSecChildStl>
  )
}

export default MainCompSecChild