import React from 'react'
import { VideoStyle } from '../../style/video.style'
import './VideoMain.css'


function VideoMain({path,height,text}:{path:string,height:string,text:string}) {


   return (
    <VideoStyle height={height}>

      <div className='imgDiv'>
        <div className='opacity'></div>

        <img src={path} alt='gif' style={{height}} />
      </div>


      <div className='text'>{text}</div>
    
    </VideoStyle>
         
   )
}

export default VideoMain