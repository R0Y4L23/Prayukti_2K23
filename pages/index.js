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
        <div className='min-[1690px]:w-[100%] min-[1125px]:w-[150%] min-[845px]:w-[200%] min-[675px]:w-[250%] min-[675px]:w-[300%] min-[482px]:w-[350%] min-[375px]:w-[450%] w-[550%]'>
        <video
          className="video"
          src={"assets/videos/city_background.mp4"}
          controls={false}
          autoPlay={true}
          loop
          muted
        />
        </div>
        <div className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-70 z-10">
        </div>
        <div className="absolute top-0 left-0 h-[100vh] w-full z-20">
          <div className="flex flex-row justify-between items-center min-[740px]:mx-20 min-[520px]:mx-8 mx-2 min-[1024px]:-translate-y-12">
            <p className="text-white min-[1024px]:text-[30px] min-[520px]:text-[15px] text-[9px] uppercase font-[100] min-[650px]:tracking-[10px] text-xl cursor-pointer hover:tracking-[20px] hover:text-[40px] duration-500 cyberpunk" onClick={() => { router.push("/auth") }}>Sign In</p>
            <img src={"assets/images/logo.png"} alt="logo" className="min-[1024px]:w-[300px] min-[400px]:w-[180px] w-[120px]" />
            <p className="text-white min-[1024px]:text-[30px] min-[520px]:text-[15px] text-[9px] uppercase font-[100] min-[650px]:tracking-[10px] text-xl cursor-pointer hover:tracking-[20px] hover:text-[40px] duration-500 cyberpunk" onClick={() => { router.push("/events") }}>Events</p>
          </div>
          <p className="text-center min-[1024px]:text-[60px] text-[40px] text-white glitch tracking-[20px] hover:tracking-[25px] hover:text-[80px] duration-500 cursor-pointer min-[1024px]:mt-10 mt-32 text-flicker-out-glow">Be the Mveric...!</p>
          <p className="text-center min-[1024px]:text-[30px] text-[20px] text-white glitch mt-10 tracking-[10px]"><span className="hover:tracking-[15px] hover:text-[40px] duration-500 cursor-pointer">Launch</span> , <span className="hover:tracking-[15px] hover:text-[40px] duration-500 cursor-pointer">Clutch</span>, <span className="hover:tracking-[15px] hover:text-[40px] duration-500 cursor-pointer">Futurize</span></p>
        </div>
      </div>
    )
  }
}

export default Index