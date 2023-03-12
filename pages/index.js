/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import Loading from '../components/loading'
import { useRouter } from 'next/router'

const Index = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  const router = useRouter()


  if (loading) {
    return <Loading />
  }
  else {

    return (
      <div className="slide-in-bck-center relative">
        <video
          className="z-0"
          style={{ width: "100%" }}
          src={"assets/videos/city_background.mp4"}
          controls={false}
          autoPlay={true}
          loop
          muted
        />
        <div className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-50 z-10">
        </div>
        <div className="absolute top-0 left-0 h-[100vh] w-full z-20">
          <div className="flex flex-row justify-between items-center mx-20 -translate-y-12">
            <p className="text-white text-[30px] uppercase font-[100] tracking-[10px] text-xl cursor-pointer hover:tracking-[20px] hover:text-[40px] duration-500 cyberpunk" onClick={() => { router.push("/auth") }}>Sign In</p>
            <img src={"assets/images/logo.png"} alt="logo" className="w-[400px]" />
            <p className="text-white text-[30px] uppercase font-[100] tracking-[10px] text-xl cursor-pointer hover:tracking-[20px] hover:text-[40px] duration-500 cyberpunk" onClick={() => { router.push("/events") }}>Events</p>
          </div>
          <p className="text-center text-[80px] text-white glitch tracking-[20px] hover:tracking-[25px] hover:text-[100px] duration-500 cursor-pointer mt-20 text-flicker-out-glow">Be the Mveric...!</p>
          <p className="text-center text-[50px] text-white glitch mt-20 tracking-[10px]"><span className="hover:tracking-[15px] hover:text-[60px] duration-500 cursor-pointer">Launch</span> , <span className="hover:tracking-[15px] hover:text-[50px] duration-500 cursor-pointer">Clutch</span>, <span className="hover:tracking-[15px] hover:text-[50px] duration-500 cursor-pointer">Futurize</span></p>
        </div>
      </div>
    )
  }
}

export default Index