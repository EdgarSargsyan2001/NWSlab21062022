import React from 'react'
import { MainCompSecChildStl,CompSecImgDivStl } from '../../../style/MainCompSecStyle'



function MainCompSecChild({title,desc,imgUrl,titleHover,descHover}:{title:string,desc:string,imgUrl:string,descHover:string,titleHover:string}) {

  return (
    <MainCompSecChildStl>
        <CompSecImgDivStl>
            <img src={imgUrl} alt={imgUrl}  />
            <h1 className='hoverOpen'></h1>

        </CompSecImgDivStl>
        <h2 className='title'>{title}</h2>
        <p className='desc'>{desc}</p>

    </MainCompSecChildStl>
  )
}

export default MainCompSecChild