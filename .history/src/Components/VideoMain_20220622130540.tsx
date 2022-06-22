import React from 'react'

function VideoMain({path}:{path:string}) {

    const videoStyle = {   
     backgroundImage:`url(${path})`,
     backgroundSize:'cover',
     background-position:center;
     height:'200px'
 
    }
 
   return (
     <div  style={videoStyle} ></div>
         
 
     
   )
}

export default VideoMain