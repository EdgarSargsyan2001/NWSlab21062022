import React from 'react'

function VideoMain({path}:{path:string}) {

    const videoStyle = {   
        height:'200px',
     backgroundImage:`url(${path})`,
     backgroundSize:'cover',
     backgroundPosition:'auto',
 
    }
 
   return (
     <div  style={videoStyle} ></div>
         
 
     
   )
}

export default VideoMain