import React from 'react'

function VideoMain({path}:{path:string}) {

    const videoStyle = {   
     backgroundImage:`url(${path})`,
     backgroundSize
     height:'200px'
 
    }
 
   return (
     <div  style={videoStyle} ></div>
         
 
     
   )
}

export default VideoMain