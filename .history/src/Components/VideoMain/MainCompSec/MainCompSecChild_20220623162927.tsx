import React from 'react'
import { MainCompSecChildStl,compSecImgDivStl } from '../../../style/MainCompSecStyle'



function MainCompSecChild({title,desc,imgUrl}:{title:string,desc:string,imgUrl:string}) {

  return (
    <MainCompSecChildStl>
            <img src={imgUrl} alt={imgUrl}  />
            <h1 className='hoverOpen'>sdfsdfsdfsd</h1>
        </div>
        <h2 className='title'>{title}</h2>
        <p className='desc'>{desc}</p>

    </MainCompSecChildStl>
  )
}

export default MainCompSecChild