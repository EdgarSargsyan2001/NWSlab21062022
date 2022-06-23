import React from 'react'
import { VideoStyle } from '../../style/videoStyle'


function VideoMain({path,height,text}:{path:string,height:string,text?:string}) {


   return (
    <VideoStyle >

      <div className='imgDiv'>
        <div className='opacity'></div>

        <img src={path} alt='gif'/>
      </div>

      <div className='text'>{text}</div>
    
    </VideoStyle>
         
   )
}

export default VideoMain