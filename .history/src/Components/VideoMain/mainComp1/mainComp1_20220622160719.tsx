import React from 'react'
import MainComp1in1 from './mainComp1in1'

function MainComp1({text,titleMain }:{text:string,titleMain:string }) {
  return (
    <div>
      <h1>{titleMain}</h1>
      <MainComp1in1
          title='Extensive experience'
          desc='For over a decade we have developed thousands of outstanding projects that helped our clients accomplish their business goals'
          num='1000+'
          text='successful projects'
        />
      <MainComp1in1
          title='Extensive experience'
          desc='For over a decade we have developed thousands of outstanding projects that helped our clients accomplish their business goals'
          num='1000+'
          text='successful projects'
        />
      <MainComp1in1
          title='Extensive experience'
          desc='For over a decade we have developed thousands of outstanding projects that helped our clients accomplish their business goals'
          num='1000+'
          text='successful projects'
        />

    </div>
  )
}

export default MainComp1