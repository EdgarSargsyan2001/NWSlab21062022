import React from 'react'
import { MainCompSecChildStl,CompSecImgDivStl } from '../../../style/MainCompSecStyle'



function MainCompSecChild({title,desc,imgUrl,titleHover,descHover}:{title:string,desc:string,imgUrl:string,descHover?:string,titleHover?:string}) {

  return (
    <MainCompSecChildStl>
        <CompSecImgDivStl>
            <img src={imgUrl} alt={imgUrl}  />
            <div className='hoverOpen'>
                <h2 >{titleHover}</h2>

            </div>

        </CompSecImgDivStl>
        <h2 className='title'>{title}</h2>
        <p className='desc'>{desc}</p>

    </MainCompSecChildStl>
  )
}

export default MainCompSecChild