/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Attractions = () => {
  return (
    <>
    <Head>
      <title>Attractions</title>
    </Head>
    <div className='w-screen h-screen abg relative'>
      <div className='w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50'>
      </div>
      <div className='flex min-[768px]:flex-row flex-col justify-center items-center w-screen h-screen z-20 translate-y-0 min-[768px]:gap-16 gap-8'>
          <Link href={"https://www.instagram.com/p/CqDyf3FBwJD/?igshid=YmMyMTA2M2Y="} target="_blank"><img alt="att" src='assets/images/shilpa.jpg' className='min-[1024px]:h-[500px] min-[768px]:h-[350px] h-[250px]'/></Link>
          <Link href={"https://www.instagram.com/p/CqGYqaUhqYD/?igshid=YmMyMTA2M2Y%3D"} target="_blank"><img alt="att" src='assets/images/ashneer.jpg' className='min-[1024px]:h-[500px] min-[768px]:h-[350px] h-[250px]'/></Link>
      </div> 
    </div>
    </>
  )
}

export default Attractions