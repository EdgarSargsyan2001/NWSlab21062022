import React from 'react'
import './VideoMain.css'


function VideoMain({path,height,text}:{path:string,height:string,text:string}) {

    const videoStyle = {   
      height,
       
    }
 
   return (
     <div className='video' >
      <img src={path} alt='gif' />
      <div className='text'>{text}</div>
     </div>
         
 
     
   )
}

export default VideoMain