import React from 'react'
import './VideoMain.css'


function VideoMain({path,height,text}:{path:string,height:string,text:string}) {

    const videoStyle = {   
      height,
      backgroundImage:`url(${path})`,
       
    }
 
   return (
     <div className='video' >
      <img src={path} />
      <div className='text'>{text}</div>
     </div>
         
 
     
   )
}

export default VideoMain