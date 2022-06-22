import React from 'react'
import './VideoMain.css'


function VideoMain({path,height,text}:{path:string,height:string,text:string}) {


   return (
     <div className='video' >
      <div className='imgDiv'>
        

        <img src={path} alt='gif' style={{height}} />
      </div>


      <div className='text'>{text}</div>
     </div>
         
   )
}

export default VideoMain