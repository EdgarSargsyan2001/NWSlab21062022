import React from 'react'

function VideoMain({path}:{path:string}) {

    const videoStyle = {   
        backgroundImage:`url(${path})`   ,
        heigth:L
    }
 
   return (
     <div  style={videoStyle} >
         
 
     </div>
   )
}

export default VideoMain