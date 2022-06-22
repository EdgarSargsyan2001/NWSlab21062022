import React from 'react'
import './VideoMain.css'
import VideoStyle from '../'


function VideoMain({path,height,text}:{path:string,height:string,text:string}) {


   return (
     <VideoStyle>


     </VideoStyle>
      <div className='imgDiv'>
        <div className='opacity' style={{height}}></div>

        <img src={path} alt='gif' style={{height}} />
      </div>


      <div className='text'>{text}</div>
     </div>
         
   )
}

export default VideoMain