import React from 'react'
import Head from 'next/head'

const Attractions = () => {
  return (
    <>
    <Head>
      <title>Attractions</title>
    </Head>
    <div className='w-screen h-screen abg relative'>
      <div className='w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50'>
      </div>
      <div className='flex flex-row justify-center items-center w-screen h-screen z-20 translate-y-0'>
          <p className='text-4xl text-center glitch text-white'>Coming Soon</p>
      </div> 
    </div>
    </>
  )
}

export default Attractions