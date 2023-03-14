/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import Loading from '../components/loading'
import { useRouter } from 'next/router'

const Index = () => {
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  // useEffect(() => {
  //   router.events.on("routeChangeError", (e) => setLoading(false));
  //   router.events.on("routeChangeStart", (e) => setLoading(false));
  //   router.events.on("routeChangeComplete", (e) => setLoading(true));

  //   return () => {
  //     router.events.off("routeChangeError", (e) => setLoading(false));
  //     router.events.off("routeChangeStart", (e) => setLoading(false));
  //     router.events.off("routeChangeComplete", (e) => setLoading(true));
  //   };
  // }, [router.events])


  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  if (loading) {
    return <Loading />
  }
  else {

    return (
      <div className="slide-in-bck-center home relative min-h-screen"> 
       <div className='absolute top-0 bg-black h-screen w-full bg-opacity-30'>
         </div>    
          <div className="flex flex-row justify-between items-center min-[740px]:mx-20 min-[520px]:mx-8 mx-2 min-[1024px]:-translate-y-12 z-20">
            <div className='c1:block hidden'>
            <p className="text-white min-[1024px]:text-[30px] uppercase font-[100] min-[650px]:tracking-[10px] text-xl cursor-pointer hover:tracking-[20px] hover:text-[40px] duration-500 glitch" onClick={() => { router.push("/auth") }}>Login</p>
            </div>
            <img src={"assets/images/logo.png"} alt="logo" className="min-[1024px]:w-[300px] min-[400px]:w-[180px] w-[150px]" />
            <img src={"assets/images/riviera_logo.png"} alt="logo" className="min-[1024px]:w-[300px] min-[400px]:w-[180px] w-[150px]" />
            <div className='c1:block hidden'>
            <p className="text-white min-[1024px]:text-[30px] uppercase font-[100] min-[650px]:tracking-[10px] text-xl cursor-pointer hover:tracking-[20px] hover:text-[40px] duration-500 glitch" onClick={() => { router.push("/events") }}>Events</p>
            </div>
          </div>
          <div className='c1:hidden flex flex-row justify-evenly items-center z-20 -translate-y-1'>
            <p className="text-white text-lg cursor-pointer duration-500 glitch" onClick={() => { router.push("/auth") }}>Login</p>
            <p className="text-white text-lg cursor-pointer duration-500 glitch" onClick={() => { router.push("/events") }}>Events</p>
          </div>
          <p className="text-center min-[1024px]:text-[80px] text-[50px] gravity tracking-[20px] hover:tracking-[25px] hover:text-[80px] duration-500 cursor-pointer min-[1024px]:mt-10 mt-32 text-[#a4abfb] z-20 min-[768px]:-translate-y-1 -translate-y-20">Be the Maveric...!</p>
          <p onClick={()=>{router.push("/events")}} className="text-center min-[1024px]:text-[30px] text-[25px] text-white gravity mt-10 tracking-[10px]  z-20 min-[768px]:-translate-y-1 -translate-y-12"><span className="hover:tracking-[15px] hover:text-[40px] duration-500 cursor-pointer">Launch</span> , <span className="hover:tracking-[15px] hover:text-[40px] duration-500 cursor-pointer">Clutch</span>, <span className="hover:tracking-[15px] hover:text-[40px] duration-500 cursor-pointer">Futurize</span></p>
          <div className='flex flex-row justify-center items-center gap-5 mt-12 z-20 min-[768px]:-translate-y-1 -translate-y-12'>
          <a href='https://www.facebook.com/prayuktihith?mibextid=ZbWKwL'><i className="fa-brands fa-facebook text-[30px] text-blue-400 cursor-pointer"></i></a>
          <a href='https://instagram.com/prayuktihit?igshid=YmMyMTA2M2Y='><i className="fa-brands fa-instagram text-[30px] text-blue-400 cursor-pointer"></i></a>
          <a href='https://www.facebook.com/rivierahithaldia?mibextid=ZbWKwL'><i className="fa-brands fa-facebook text-[30px] text-pink-400 cursor-pointer"></i></a>
          <a href='https://instagram.com/rivierahit?igshid=YmMyMTA2M2Y='><i className="fa-brands fa-instagram text-[30px] text-pink-400 cursor-pointer"></i></a>
          </div>
      </div>
    )
  }
}

export default Index