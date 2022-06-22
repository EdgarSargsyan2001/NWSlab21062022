import React from 'react'



function VideoMain({path,height,text}:{path:string,height:string,text:string}) {

    const videoStyle = {   
        height,
        backgroundImage:`url(${path})`,
        backgroundSize:'cover',
        backgroundPosition:'auto',
        display
    
    }
 
   return (
     <div  style={videoStyle} >{text}</div>
         
 
     
   )
}

export default VideoMain