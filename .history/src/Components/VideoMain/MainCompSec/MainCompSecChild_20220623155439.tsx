import React from 'react'
import { MainCompSecChildStl } from '../../../style/MainCompSecStyle'



function MainCompSecChild({title,desc,imgUrl}:{title:string,desc:string,imgUrl:string}) {

  return (
    <MainCompSecChildStl>
        <div className='imgDiv'>
            <img src={imgUrl} alt={imgUrl}  />
            
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>

    </MainCompSecChildStl>
  )
}

export default MainCompSecChild