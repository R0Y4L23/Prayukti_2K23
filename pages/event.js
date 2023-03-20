/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Loading2 from '../components/loading2'
import { useRouter } from 'next/router'
import CyberpunkButton from '../components/cyberpunkButton'
import EventCard from '../components/eventCard'
import Head from 'next/head'

const Events = () => {

    const [loading, setLoading] = useState(true)
    const [current,setCurrent]=useState(0)
    const [currentMobile,setCurrentMobile]=useState(0)
    const [loggedIn,setLoggedIn]=useState(false)

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 40 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe )
  {
    if(currentMobile<17)setCurrentMobile(currentMobile+1)
  }
  if(isRightSwipe)
  {
    if(currentMobile!=0)setCurrentMobile(currentMobile-1)
  }
 
}

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3200)
    }, [])

    useEffect(()=>{
        let s=sessionStorage.getItem("token")
        if(s)
        {
            setLoggedIn(true)
        }
    },[])

    const router = useRouter();

    const events=[
        [[
        "Requizzit","Level up your brains, and thrive on to win.","requizzit",1],
        ["Robowar","Combat with your bots, and let their best win","robowar",2],
        ["Lakshya","Reach your destination at your risk","lakshya",3]],

        [["Udaan","Be the pilot you always dreamt","udaan",4],
        ["B-Plan","Potential unicorn or just following the herd trail. Dare to pitch?","bplan",5],
        ["House Of Hogwarts","Wand your way to Hogwarts Hunt","hogwarts",6]],

        [["Code-Blooded","Code is poetry, let your Imagination run wild.","code",7],
        ["Overnite","Let the code leave your competitiors in the byte dust","overnite",8],
        ["DE-Movier","Lights Out, Imagination on. Let your creation that leaves a lasting impression.","demovier",9]],

        [["LA-Photography","Let the lens do the talking of a story unknown","laphotography",10],
        ["Pradarshan","Let the creativity build around technology","pradarshan",11],
        ["Crescent","Whose bridge withstands the London Bridge?","crescent",12]],

        [["Naturgenix","Create from our natural foundations.","naturgenix",13],
        ["Squaroscope","Quick hands, sharp minds, and a Rubik's Cube- let the speed-cubing competition begin!","squaroscope",14],
        ["HiTaTHON","","hitathon",15]],

        [["See-QL","","sql",16],
        ["Fun Games","To Be Revealed Soon!","fungames",17],
        ["Online Games","To Be Revealed Soon!","games",18]],

        [["IoT Tech Expo","Expose connections that build the future","iot",19]]
    ]

    const events2=[

        ["Requizzit","Level up your brains, and thrive on to win.","requizzit"],
        ["Robowar","Combat with your bots, and let their best win","robowar"],
        ["Lakshya","Reach your destination at your risk","lakshya"],

        ["Udaan","Be the pilot you always dreamt","udaan"],
        ["B-Plan","Potential unicorn or just following the herd trail. Dare to pitch?","bplan"],
        ["House Of Hogwarts","Wand your way to Hogwarts Hunt","hogwarts"],

        ["Code-Blooded","Code is poetry, let your Imagination run wild.","code"],
        ["Overnite","Let the code leave your competitiors in the byte dust","overnite"],
        ["DE-Movier","Lights Out, Imagination on. Let your creation that leaves a lasting impression.","demovier"],

        ["LA-Photography","Let the lens do the talking of a story unknown","laphotography"],
        ["Pradarshan","Let the creativity build around technology","pradarshan"],
        ["Crescent","Whose bridge withstands the London Bridge?","crescent"],

        ["Naturgenix","Create from our natural foundations.","naturgenix"],
        ["Squaroscope","Quick hands, sharp minds, and a Rubik's Cube- let the speed-cubing competition begin!","squaroscope"],
        ["HiTaTHON","","hitathon"],

        ["See-QL","","sql"],
        ["Fun Games","Coming Soon","fungames"],
        ["Online Games","To Be Revealed Soon!","games"],

        ["IoT Tech Expo","Expose connections that build the future","iot"]
    ]

    if (loading) {
        return <Loading2 />
    }
    else {

        return (
            <>
            <Head>
                <title>Events</title>
            </Head>
            <div className="slide-in-bck-center relative">
                <div className='min-[1690px]:w-[100%] min-[1125px]:w-[150%] min-[845px]:w-[200%] min-[675px]:w-[250%] min-[550px]:w-[300%] min-[482px]:w-[350%] min-[375px]:w-[450%] w-[550%]'>
                <video
                    className="z-0 video"
                    src={"assets/videos/events_background.mp4"}
                    controls={false}
                    autoPlay={true}
                    loop
                    muted
                />
                </div>
                <div className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-70 z-10">
                </div>
                <div className="absolute top-0 left-0 h-[100vh] w-full z-20">
                    <div className="flex flex-row justify-between items-center min-[650px]:mx-20 min-[550px]:mx-8 mx-2 min-[550px]:-translate-y-4 -translate-y-2">
                        <img src={"assets/images/logo.png"} alt="logo" className="min-[550px]:w-[150px] w-[180px] cursor-pointer" onClick={() => { router.push("/") }} />
                        <div className='flex flex-row justify-center items-center min-[550px}:gap-10 gap-5'>
                        {loggedIn&&<p className="text-white border-white border px-4 bg-blue-300 bg-opacity-30 py-1 min-[550px]:text-[20px] text-[12px] uppercase font-[100] min-[550px]:tracking-[8px] tracking-[6px] cursor-pointer min-[650px]:hover:tracking-[15px] min-[650px]:hover:text-[25px] duration-500 gravity" onClick={() => { 

                           router.push("/profile")
                            }}>Profile</p>}
                        <p className="text-white min-[550px]:text-[20px] text-[12px] uppercase font-[100] min-[550px]:tracking-[10px] tracking-[8px] cursor-pointer min-[650px]:hover:tracking-[15px] min-[650px]:hover:text-[20px] duration-500 gravity" onClick={() => { 
                            if(loggedIn)
                            {
                                sessionStorage.clear()
                                router.push("/")
                            }
                            else
                            {
                            router.push("/auth") 
                            }
                            }}>{loggedIn?"Logout":"Login"}</p>
                        </div>
                    </div>
                    <p className="text-center min-[1050px]:-mt-4 min-[778px]:-mt-8 min-[550px]:-mt-12 -mt-8 min-[550px]:text-[20px] text-[12px] text-white glitch tracking-[10px] duration-500 cursor-pointer text-flicker-out-glow">Welcome To The Era Of Virtual Veda</p>
                    <div className="w-full min-[650px]:flex flex-row mt-10 h-[500px] hidden">
                        <div className="min-[1050px]:w-[15%] min-[778px]:w-[20%] w-[25%] flex flex-col justify-center items-center">
                        <CyberpunkButton text={"_Previous"} onClick={()=>{if(current!=0)setCurrent(current-1)}} />
                        </div>
                        <div className="min-[1050px]:w-[70%] min-[778px]:w-[60%] w-[50%] grid min-[1150px]:grid-cols-3 min-[900px]:grid-cols-2 grid-cols-1 pt-5 min-[1250px]:pl-10 pl-5">
                            {events[current].length>=1&&<div>
                            <EventCard eventName={events[current][0][0]} eventTagline={events[current][0][1]} eventImage={events[current][0][2]} index={events[current][0][3]} />
                            </div>}
                            {events[current].length>=2&&<div className='min-[900px]:block hidden'>
                            <EventCard eventName={events[current][1][0]} eventTagline={events[current][1][1]} eventImage={events[current][1][2]} index={events[current][1][3]}/>
                            </div>}
                            {events[current].length>=3&&<div className='min-[1150px]:block hidden'>
                            <EventCard eventName={events[current][2][0]} eventTagline={events[current][2][1]} eventImage={events[current][2][2]} index={events[current][2][3]}/>
                            </div>}
                        </div>
                        <div className="min-[1050px]:w-[15%] min-[778px]:w-[20%] w-[25%] flex flex-col justify-center items-center">
                            <CyberpunkButton text={"Next_"} onClick={()=>{if(current<events.length-1)setCurrent(current+1)}}/>
                        </div>
                    </div>
                    <div className=' min-[650px]:flex hidden flex-row justify-center items-center -mt-14 gap-4'>
                       {Array(events.length).fill(0).map((item,index)=>{
                        if (index==current)
                        {
                            return(<div key={index} className=" w-[16px] h-[16px] rounded-[8px] bg-blue-600 cursor-pointer"/>)
                        }
                        else
                        {
                        return(
                            <div key={index} className=" w-[16px] h-[16px] rounded-[8px] bg-white cursor-pointer" onClick={()=>{setCurrent(index)}}/>
                        )
                        }
                       })}
                    </div>
                    <div className='min-[650px]:hidden flex flex-row justify-center items-center h-[420px]' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <EventCard eventName={events2[currentMobile][0]} eventTagline={events2[currentMobile][1]} eventImage={events2[currentMobile][2]} index={currentMobile+1}/>
                    </div>
                    <div className='min-[650px]:hidden flex flex-row justify-center items-center min-[500px]:gap-10 gap-4 abc'>
                        <CyberpunkButton text={"_Previous"} onClick={()=>{if(currentMobile!=0)setCurrentMobile(currentMobile-1)}}/>
                        <CyberpunkButton text={"Next_"}  onClick={()=>{if(currentMobile<events2.length-1)setCurrentMobile(currentMobile+1)}}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Events