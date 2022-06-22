import React from 'react'

function VideoMain({path,height,text}:{path:string,height:string,text}) {

    const videoStyle = {   
        height,
        backgroundImage:`url(${path})`,
        backgroundSize:'cover',
        backgroundPosition:'auto',
    
    }
 
   return (
     <div  style={videoStyle} ></div>
         
 
     
   )
}

export default VideoMain