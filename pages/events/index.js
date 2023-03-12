/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Loading2 from '../../components/loading2'
import { useRouter } from 'next/router'
import CyberpunkButton from '../../components/cyberpunkButton'

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
                <video
                    className="z-0"
                    style={{ width: "100%" }}
                    src={"assets/videos/events_background.mp4"}
                    controls={false}
                    autoPlay={true}
                    loop
                    muted
                />
                <div className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-80 z-10">
                </div>
                <div className="absolute top-0 left-0 h-[100vh] w-full z-20">
                    <div className="flex flex-row justify-between items-center mx-20 -translate-y-12">
                        <img src={"assets/images/logo.png"} alt="logo" className="w-[300px] cursor-pointer" onClick={() => { router.push("/") }} />
                        <p className="text-white text-[30px] uppercase font-[100] tracking-[10px] text-xl cursor-pointer hover:tracking-[20px] hover:text-[40px] duration-500 cyberpunk" onClick={() => { router.push("/auth") }}>Sign In</p>
                    </div>
                    <p className="text-center -mt-32 text-[60px] text-white glitch tracking-[20px] hover:tracking-[25px] hover:text-[80px] duration-500 cursor-pointer text-flicker-out-glow">Welcome To 3033...!</p>
                    <div className="w-full flex flex-row h-[400px] mt-20">
                        <div className="w-[70%]"></div>
                        <div className="w-[30%] flex flex-col gap-20 justify-center items-center">
                            <CyberpunkButton text={"Next_"} className={'ml-20'} />
                            <CyberpunkButton text={"_Previous"} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Events