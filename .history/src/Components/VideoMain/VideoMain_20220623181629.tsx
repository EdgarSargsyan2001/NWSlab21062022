import React from 'react'
import { VideoStyle } from '../../style/videoStyle'


function VideoMain({path,height,text}:{path:string,height?:string,text?:string}) {


   return (
    <VideoStyle path={path}>

      <div className='imgDiv'>

        <img src={path} alt='gif'/>
      </div>

      <h1 className='text'>{text}</h1>
    
    </VideoStyle>
         
   )
}

export default VideoMain