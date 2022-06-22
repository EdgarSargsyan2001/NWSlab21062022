import React from 'react'

function VideoMain({path,heigth}:{path:string,heigth:string}) {

    const videoStyle = {   
        height:,
        backgroundImage:`url(${path})`,
        backgroundSize:'cover',
        backgroundPosition:'auto',
    
    }
 
   return (
     <div  style={videoStyle} ></div>
         
 
     
   )
}

export default VideoMain