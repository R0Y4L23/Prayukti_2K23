/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Loading2 from '../../components/loading2'
import { useRouter } from 'next/router'
import CyberpunkButton from '../../components/cyberpunkButton'
import EventCard from '../../components/eventCard'

const Events = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4200)
    }, [])

    const router = useRouter()


    if (loading) {
        return <Loading2 />
    }
    else {

        return (
            <div className="slide-in-bck-center relative">
                <div className='min-[1690px]:w-[100%] min-[1125px]:w-[150%] min-[845px]:w-[200%] min-[675px]:w-[250%] min-[675px]:w-[300%] min-[482px]:w-[350%] min-[375px]:w-[450%] w-[550%]'>
                <video
                    className="z-0 video"
                    src={"assets/videos/events_background.mp4"}
                    controls={false}
                    autoPlay={true}
                    loop
                    muted
                />
                </div>
                <div className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-60 z-10">
                </div>
                <div className="absolute top-0 left-0 h-[100vh] w-full z-20">
                    <div className="flex flex-row justify-between items-center min-[650px]:mx-20 min-[550px]:mx-8 mx-2 min-[550px]:-translate-y-12 -translate-y-4">
                        <img src={"assets/images/logo.png"} alt="logo" className="min-[550px]:w-[300px] w-[180px] cursor-pointer" onClick={() => { router.push("/") }} />
                        <p className="text-white min-[550px]:text-[30px] text-[20px] uppercase font-[100] min-[550px]:tracking-[10px] text-xl cursor-pointer hover:tracking-[20px] hover:text-[40px] duration-500 cyberpunk" onClick={() => { router.push("/auth") }}>Sign In</p>
                    </div>
                    <p className="text-center min-[1050px]:-mt-32 min-[778px]:-mt-24 min-[550px]:-mt-16 -mt-4 min-[550px]:text-[40px] text-[25px] text-white glitch tracking-[20px] hover:tracking-[25px] hover:text-[60px] duration-500 cursor-pointer text-flicker-out-glow">Welcome To 3033...!</p>
                    <div className="w-full min-[650px]:flex flex-row mt-10 h-[350px] hidden">
                        <div className="min-[1050px]:w-[70%] min-[778px]:w-[60%] w-[50%] grid min-[1150px]:grid-cols-3 min-[900px]:grid-cols-2 grid-cols-1 pt-5 min-[1250px]:pl-20 pl-5">
                            <div>
                            <EventCard/>
                            </div>
                            <div className='min-[900px]:block hidden'>
                            <EventCard/>
                            </div>
                            <div className='min-[1150px]:block hidden'>
                            <EventCard/>
                            </div> 
                        </div>
                        <div className="min-[1050px]:w-[30%] min-[778px]:w-[40%] w-[50%] flex flex-col gap-10 justify-center items-center">
                            <CyberpunkButton text={"Next_"} className={'ml-20'} />
                            <CyberpunkButton text={"_Previous"} />
                        </div>
                    </div>
                    <div className='min-[650px]:hidden flex flex-row justify-center items-center h-[420px] -mt-10'>
                    <EventCard/>
                    </div>
                    <div className='min-[650px]:hidden flex min-[500px]:flex-row flex-col justify-center items-center min-[500px]:gap-10 gap-4 -mt-12'>
                        <CyberpunkButton text={"_Previous"} />
                        <CyberpunkButton text={"Next_"}  />
                    </div>
                </div>
            </div>
        )
    }
}

export default Events