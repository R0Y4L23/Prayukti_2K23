/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from "../components/navigation"
import WorkshopCard from '../components/workshopCard'
import CyberpunkButton from "../components/cyberpunkButton"

const Workshops = () => {

  const detailsPaid=[{
    "name":"Python Programming",
    "Date":"1st April (Saturday)",
    "Time1":"10:00 AM - 01:30 PM",
    "pdf":"workshops1.pdf",
    "image":"python.jpg"
  }
  ,{
    "name":"Machine Learning",
    "Date":"1st April (Saturday)",
    "Time1":"02:30 PM - 06:00 PM",
    "pdf":"workshops2.pdf",
    "image":"machine.jpg"
  }
  ,{
    "name":"Web Design",
    "Date":"1st April (Saturday)",
    "Time1":"10:00 AM - 01:30 PM",
    "pdf":"workshops3.pdf",
    "image":"web.jpg"
  }
  ,{
    "name":"Internet Of Things",
    "Date":"1st April (Saturday)",
    "Time1":"02:30 PM - 06:00 PM",
    "pdf":"workshops4.pdf",
    "image":"iot.jpg"
  }]


  const detailsFree=[{
    "name":"Entrepreneurship",
    "Date":"5th April (Wednesday)",
    "Time1":"03:00 PM - 04:00 PM",
    "pdf":"",
    "image":"ent.jpg"
  }
  ,{
    "name":"API Testing",
    "Date":"To Be Decided",
    "Time1":"To Be Decided",
    "pdf":"",
    "image":"api.jpg"
  }
 ]

 const [showPaid,setShowPaid]=useState(true)


  return (
    <>
    <Head>
      <title>Workshops</title>
    </Head>
    <div className='w-screen h-screen wbg relative'>
      <div className='w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-70'>
      </div>
      <Navigation/>
      <div className='min-[1208px]:w-[90%] w-[99%] h-screen z-20 translate-y-0 mx-auto min-[866px]:overflow-y-hidden overflow-y-scroll'>
      <div className='pt-12'>
        {showPaid&&<><p className='text-white text-center font-bold text-[12px] glitch'>Workshop Registration Fee: Rs. 99/- for each Workshop</p>
        <p className='text-white text-center font-bold text-[12px] glitch mt-3'>Free Food Coupon worth Rs. 100/- if a student register for 3 Workshops.</p></>}
      </div>
      <div className='flex min-[866px]:flex-row flex-col justify-center items-center min-[1276px]:gap-10 gap-5 mt-10'>
        {showPaid?detailsPaid.map((item,index)=>{
          return(
            <WorkshopCard key={index} name={item.name} date={item.Date} time={item.Time1} image={item.image} pdf={item.pdf}/>
          )
        }):detailsFree.map((item,index)=>{
          return(
            <WorkshopCard key={index} name={item.name} date={item.Date} time={item.Time1} image={item.image} pdf={item.pdf}/>
          )
        })}
      </div>
      <div className='mx-auto w-[150px] mt-5 min-[768px]:mb-0 mb-20'>
        <CyberpunkButton text={showPaid?"Show Free Workshops":"Show Paid Workshops"} onClick={()=>{setShowPaid(!showPaid)}}/>
      </div>
      </div> 
    </div>
    </>
  )
}

export default Workshops