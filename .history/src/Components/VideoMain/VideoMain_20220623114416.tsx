import React from 'react'
import { ContainerStl } from '../../style/headerStyle'
import { VideoStyle } from '../../style/videoStyle'


function VideoMain({path,height,text}:{path:string,height:string,text?:string}) {


   return (
    <VideoStyle height={height}>

      <div className='imgDiv'>
        <div className='opacity'></div>

        <img src={path} alt='gif' />
      </div>


      <div className='text'>{text}</div>
    
    </VideoStyle>
         
   )
}

export default VideoMain