import React from 'react'
import MainComp1in1 from './mainComp1in1'

function MainComp1({text,title }:{text:string,title:string }) {
  return (
    <div>
      <h1>{title}</h1>
     <MainComp1in1
      title='Extensive experience'
      desc='For over a decade we have developed thousands of outstanding projects that helped our clients accomplish their business goals'
      num=''

      />

    </div>
  )
}

export default MainComp1