import React from 'react'
import './VideoMain.css'


function VideoMain({path,height,text}:{path:string,height:string,text:string}) {

    const videoStyle = {   
        height,
        backgroundImage:`url(${path})`,
        backgroundSize:'cover',
        backgroundPosition:'auto',
        display
    
    }
 
   return (
     <div className='vi' style={videoStyle} >{text}</div>
         
 
     
   )
}

export default VideoMain