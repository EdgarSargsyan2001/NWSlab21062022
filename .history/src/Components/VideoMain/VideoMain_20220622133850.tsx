import React from 'react'
import './VideoMain.css'


function VideoMain({path,height,text}:{path:string,height:string,text:string}) {


   return (
     <div className='video' >
      <div>

      <img src={path} alt='gif' className='img' style={{height}} />
      </div>
      <div className='text'>{text}</div>
     </div>
         
 
     
   )
}

export default VideoMain