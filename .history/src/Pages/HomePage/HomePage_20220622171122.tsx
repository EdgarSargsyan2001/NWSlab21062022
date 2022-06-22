import React from 'react'
import MainComp1 from '../../Components/VideoMain/mainComp1/mainComp1'
import VideoMain from '../../Components/VideoMain/VideoMain'
import './HomePage.css'


function HomePage() {
  return (
    <div className='homePage'>
        <VideoMain 
            path='./Assets/main.gif'
            height='900px'
            text="it outstaffing company "
        />
        <MainComp1 
          titleMain='fsfsdfdf'
          btnOpen={false}
          title1='Extensive experience'
          desc1='For over a decade we have developed thousands of outstanding projects that helped our clients accomplish their business goals'
          num1='1000+'
          text1='successful projects'

          title2='Industry-focused specialists '
          desc2="With a strong focus on technology-intensive industries and constant attention to detail and IT trends, NWSLAB's specialists help clients from all over the world"
          num2='15'
          text2='years in business'
          
          title3='Customer loyalty '
          desc3='NWSLAB’s high standards, effective project delivery, and ability to develop IT solutions of any kind, enable us to enjoy wide recognition. As a result, 90% of our customers are recurring and recommend us to their partners    '
          num3='90%'
          text3 ='recurring customers'

        />
        <MainComp1 
          titleMain='fsfsdfdf'
          btnOpen={true}
          title1='Team Augmentation'
          desc1=''
          num1='1000+'
          text1='successful projects'

          title2='Industry-focused specialists '
          desc2="With a strong focus on technology-intensive industries and constant attention to detail and IT trends, NWSLAB's specialists help clients from all over the world"
          num2='15'
          text2='years in business'
          
          title3='Customer loyalty '
          desc3='NWSLAB’s high standards, effective project delivery, and ability to develop IT solutions of any kind, enable us to enjoy wide recognition. As a result, 90% of our customers are recurring and recommend us to their partners    '
          num3='90%'
          text3 ='recurring customers'

        /> 

    </div>
  )
}

export default HomePage