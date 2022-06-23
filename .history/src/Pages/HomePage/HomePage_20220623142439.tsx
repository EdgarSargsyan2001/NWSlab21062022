import React from 'react'
import MainComp1 from '../../Components/VideoMain/MainCompFirst/MainCompFirst'
import MainCompSec from '../../Components/VideoMain/MainCompSec/MainCompSec'
import { HomePageStl } from './HomePageStl'

const ArrObj = [
  {
    title:"Extensive experience",
    desc:'For over a decade we have developed thousands of outstanding projects that helped our clients accomplish their business goals',
    num:'1000+',
    text:'successful projects'
  },
  {
    title:"Extensive experience",
    desc:'For over a decade we have developed thousands of outstanding projects that helped our clients accomplish their business goals',
    num:'1000+',
    text:'successful projects'
  },
  {
    title:"Industry-focused specialists",
    desc:"With a strong focus on technology-intensive industries and constant attention to detail and IT trends, NWSLAB's specialists help clients from all over the world",
    num:'15',
    text:'years in business'
  },
  {
    title:"Customer loyalty",
    desc:"NWSLAB’s high standards, effective project delivery, and ability to develop IT solutions of any kind, enable us to enjoy wide recognition. As a result, 90% of our customers are recurring and recommend us to their partners",
    num:'90%',
    text:'recurring customers'
  },


]


function HomePage() {
  return (
    <HomePageStl>
        <MainComp1 
          titleMain='fuel your project with an expert team of industry focused engineers'
          btnOpen={false}


        />
        <MainComp1 
          titleMain='software development collaboration models'
          btnOpen={true}
          title1='Team Augmentation'
          desc1="Strengthen your IT team with NWSLAB's top-notch experts while retaining full responsibility for your IT project, its goals, and outcomes."

          title2='Product Development Servicesе '
          desc2="Let NWSLAB’s experienced IT team ensure an end-to-end implementation of your IT project and share the responsibility for it with you "

          title3='Outsourced IT services'   
          desc3="NWSLAB’s team will provide you with top-class IT services and assume full responsibility for the eventual success and results"


        /> 
        <MainCompSec/>
    </HomePageStl>

  )
}

export default HomePage