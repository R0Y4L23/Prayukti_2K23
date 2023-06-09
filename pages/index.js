/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import Loading from '../components/loading'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [loggedIn,setLoggedIn]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  useEffect(()=>{
    let s=sessionStorage.getItem("token")
    if(s)
    {
        setLoggedIn(true)
    }
},[])

  if (loading) {
    return <Loading />
  }
  else {

    return (
      <>
      <Head>
        <title>Prayukti | Riviera</title>
      </Head>
      <div className="slide-in-bck-center home relative min-h-screen">
       <div className='absolute top-0 bg-black h-screen w-full bg-opacity-40'>
         </div>
          <div className="flex flex-row justify-between items-center min-[1024px]:mx-20 min-[520px]:mx-8 mx-2 min-[1024px]:-translate-y-2 z-20">
            <div className='c1:flex hidden  flex-row justify-center items-center min-[795px]:gap-8 gap-3'>
            <p className="text-white uppercase font-[100] min-[1024px]:text-lg min-[795px]:text-[12px] text-[8px] cursor-pointer hover:text-[20px] duration-500 glitch z-20 -translate-y-1" onClick={() => {if(loggedIn)
                            {
                              router.push("/profile")
                            }
                            else
                            {
                            router.push("/auth")
                            }}}>{loggedIn?"Profile":"Login"}</p>

<p className="text-white uppercase font-[100] min-[1024px]:text-lg min-[795px]:text-[12px] text-[8px] cursor-pointer hover:text-[20px] duration-500 glitch z-20 -translate-y-1" onClick={()=>{router.push("/attractions")}}>Attractions</p>

            </div>
            <img src={"assets/images/logo.png"} alt="logo" className="min-[1024px]:w-[150px] min-[664px]:w-[180px] w-[150px] z-20 -translate-y-1" />
            <img src={"assets/images/riviera_logo.png"} alt="logo" className="min-[1024px]:w-[150px] min-[664px]:w-[180px] w-[150px] z-20 -translate-y-1" />
            <div className='c1:flex hidden  flex-row justify-center items-center min-[795px]:gap-8 gap-3'>
            <p className="text-white uppercase font-[100] min-[1024px]:text-lg min-[795px]:text-[12px] text-[8px] cursor-pointer hover:text-[20px] duration-500 glitch z-20 -translate-y-1" onClick={()=>{router.push("/workshops")}}>Workshops</p>
            <p className="text-white uppercase font-[100] min-[1024px]:text-lg min-[795px]:text-[12px] text-[8px] cursor-pointer hover:text-[20px] duration-500 glitch z-20 -translate-y-1" onClick={() => { router.push("/event") }}>Events</p>
            </div>
          </div>
          <div className='c1:hidden flex flex-row justify-evenly items-center z-20 -translate-y-1'>
            <p className="text-white min-[425px]:text-[12px] text-[8px] cursor-pointer duration-500 glitch border border-white px-2 py-1" onClick={() => {  if(loggedIn)
                            {
                              router.push("/profile")
                            }
                            else
                            {
                            router.push("/auth")
                            }
                             }}>{loggedIn?"Profile":"Login"}</p>
                             <p className="text-white min-[425px]:text-[12px] text-[8px] cursor-pointer duration-500 glitch border border-white px-2 py-1" onClick={()=>{router.push("/attractions")}}>Attractions</p>
                             <p className="text-white min-[425px]:text-[12px] text-[8px] cursor-pointer duration-500 glitch border border-white px-2 py-1" onClick={()=>{router.push("/workshops")}}>Workshops</p>
            <p className="text-white min-[425px]:text-[12px] text-[8px] cursor-pointer duration-500 glitch border border-white px-2 py-1" onClick={() => { router.push("/event") }}>Events</p>
          </div>
          {/* <p className="text-center min-[1024px]:text-[80px] text-[50px] gravity tracking-[20px] hover:tracking-[25px] hover:text-[80px] duration-500 cursor-pointer min-[1024px]:mt-10 mt-32 min-[425px]:mx-0 mx-5 text-[#a4abfb] z-20 min-[768px]:-translate-y-1 -translate-y-20">Kalyuga</p> */}
          <img src='assets/images/kalyuga.png' className='mx-auto w-[750px] z-20 -translate-y-1' />
          <p onClick={()=>{router.push("/event")}} className="text-center min-[1024px]:text-[30px] text-[25px] gravity tracking-[10px]  z-20 min-[768px]:-translate-y-1 -translate-y-1 hover:tracking-[15px] hover:text-[40px] duration-500 cursor-pointer text-white">Launch | Clutch | Futurize</p>
          <div className='flex flex-row justify-center items-center gap-5 mt-5 z-20 min-[768px]:-translate-y-1 -translate-y-4'>
          <Link href='https://www.facebook.com/prayuktihith?mibextid=ZbWKwL' target={"_blank"}><i className="fa-brands fa-facebook text-[30px] text-blue-400 cursor-pointer"></i></Link>
          <Link href='https://instagram.com/prayuktihit?igshid=YmMyMTA2M2Y=' target={"_blank"}><i className="fa-brands fa-instagram text-[30px] text-blue-400 cursor-pointer mr-3"></i></Link>
          <Link href='https://www.facebook.com/rivierahithaldia?mibextid=ZbWKwL' target={"_blank"}><i className="fa-brands fa-facebook text-[30px] text-pink-400 cursor- ml-3"></i></Link>
          <Link href='https://instagram.com/rivierahit?igshid=YmMyMTA2M2Y=' target={"_blank"}><i className="fa-brands fa-instagram text-[30px] text-pink-400 cursor-pointer"></i></Link>
          </div>
          <div className='flex flex-row justify-center items-center min-[425px]:gap-10 gap-6 z-20 translate-y-1'>
            <p className='uppercase font-mono min-[425px]:text-lg text-white text-center'>Abhishek Kumar : 9798017924</p>
            <p className='uppercase font-mono min-[425px]:text-lg text-white text-center'>Saurabh Kumar : 9546924407</p>
          </div>
      </div>
      </>
    )
  }
}

export default Index