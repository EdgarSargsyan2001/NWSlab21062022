import React from 'react'

function VideoMain({path,heig}:{path:string,heigth:string}) {

    const videoStyle = {   
        heigth,
        backgroundImage:`url(${path})`,
        backgroundSize:'cover',
        backgroundPosition:'auto',
    
    }
 
   return (
     <div  style={videoStyle} ></div>
         
 
     
   )
}

export default VideoMain