/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from "../components/navigation"
import CyberpunkButton from '../components/cyberpunkButton'

const Attractions = () => {

  const [showAttractions,setShowAttractions]=useState(true)

  return (
    <>
    <Head>
      <title>Attractions</title>
    </Head>
    <div className='w-screen h-screen abg relative'>
      <div className='w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50'>
      </div>
      <Navigation/>
      <div className='min-[1208px]:w-[90%] w-[99%] h-screen z-20 translate-y-0 mx-auto min-[768px]:overflow-y-hidden overflow-y-scroll'>
      {!showAttractions&&<p className='text-white text-xl font-bold text-center mt-5 glitch'>Report to the Registration Desk to Register</p>}
      {showAttractions&&<div className='flex min-[768px]:flex-row flex-col justify-center items-center min-[768px]:gap-16 gap-8 mt-16'>
          <Link href={"https://www.instagram.com/p/CqDyf3FBwJD/?igshid=YmMyMTA2M2Y="} target="_blank"><img alt="att" src='assets/images/shilpa.jpg' className='min-[1024px]:h-[500px] min-[768px]:h-[350px] h-[250px]'/></Link>
          <Link href={"https://www.instagram.com/p/CqGYqaUhqYD/?igshid=YmMyMTA2M2Y%3D"} target="_blank"><img alt="att" src='assets/images/ashneer.jpg' className='min-[1024px]:h-[500px] min-[768px]:h-[350px] h-[250px]'/></Link>
      </div>} 
      {!showAttractions&&<div className='grid min-[768px]:grid-cols-5 grid-cols-1 justify-center items-center gap-y-4 gap-x-5 mt-8'>
      <img alt="att" src='assets/nontech/face_painting.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/digital_illustration.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/classical.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/solo_singing.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/open_mic.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/art.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/folk_song.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/group_dance.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/solo_dance.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
      <img alt="att" src='assets/nontech/couple_dance.jpg' className='min-[1024px]:h-[230px] min-[768px]:h-[200px] h-[350px] mx-auto'/>
        
        </div>}
        {!showAttractions&&<div className='mt-2 '>
        <p className='text-white text-[12px] min-[768px]:text-left text-center'>*Registration in Prayukti is not mandatory to participate in these events</p>
      </div>}
      <div className='mx-auto w-[150px] mt-5 min-[768px]:mb-0 mb-20'>
        <CyberpunkButton text={showAttractions?"Show Non-Tech Events":"Show Attractions"} onClick={()=>{setShowAttractions(!showAttractions)}}/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Attractions