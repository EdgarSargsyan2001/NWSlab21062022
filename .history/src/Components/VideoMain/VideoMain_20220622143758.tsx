import React from 'react'
import { VideoStyle } from '../../style/video.style'
import './VideoMain.css'


function VideoMain({path,height,text}:{path:string,height:string,text:string}) {


   return (
    <VideoStyle

      <div className='imgDiv'>
        <div className='opacity' style={{height}}></div>

        <img src={path} alt='gif' style={{height}} />
      </div>


      <div className='text'>{text}</div>
     </div>
         
   )
}

export default VideoMain