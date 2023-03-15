/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Loading2 from '../components/loading2'
import { useRouter } from 'next/router'
import CyberpunkButton from '../components/cyberpunkButton'
import EventCard from '../components/eventCard'

const Events = () => {

    const [loading, setLoading] = useState(true)
    const [current,setCurrent]=useState(0)
    const [currentMobile,setCurrentMobile]=useState(0)
    const [loggedIn,setLoggedIn]=useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4200)
    }, [])

    useEffect(()=>{
        let s=sessionStorage.getItem("token")
        if(s)
        {
            setLoggedIn(true)
        }
    },[])

    const router = useRouter()

    const events=[
        [["Requizzit","Level up your brains, and thrive on to win.","requizzit",0],
        ["Robowar","Combat with your bots, and let their best win","robowar",1],
        ["Lakshya","Reach your destination at your risk","lakshya",2]],

        [["Udaan","Be the pilot you always dreamt","udaan",3],
        ["B-Plan","Potential unicorn or just following the herd trail. Dare to pitch?","bplan",4],
        ["House Of Hogwarts","Wand your way to Hogwarts Hunt","hogwarts",5]],

        [["Code-Blooded","Code is poetry, let your Imagination run wild.","code",6],
        ["Overnite","Let the code leave your competitiors in the byte dust","overnite",7],
        ["DE-Movier","Lights Out, Imagination on. Let your creation that leaves a lasting impression.","demovier",8]],

        [["LA-Photography","Let the lens do the talking of a story unknown","laphotography",9],
        ["Pradarshan","Let the creativity build around technology","pradarshan",10],
        ["Crescent","Whose bridge withstands the London Bridge?","crescent",11]],

        [["Naturgenix","Create from our natural foundations.","naturgenix",12],
        ["Squaroscope","Quick hands, sharp minds, and a Rubik's Cube- let the speed-cubing competition begin!","squaroscope",13],
        ["HiTaTHON","","hitathon",14]],

        [["See-QL","","sql",15],
        ["Fun Games","Push ups, Arm Wrestling, Skipping","fungames",16],
        ["Online Games","Coming Soon!","games",17]],
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
        ["Fun Games","Push ups, Arm Wrestling, Skipping","fungames"],
        ["Online Games","Coming Soon!","games"],
    ]


    if (loading) {
        return <Loading2 />
    }
    else {

        return (
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
                        <p className="text-white min-[550px]:text-[25px] text-[15px] uppercase font-[100] min-[550px]:tracking-[10px] tracking-[8px] cursor-pointer min-[650px]:hover:tracking-[20px] min-[650px]:hover:text-[40px] duration-500 gravity" onClick={() => { 
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
                    <p className="text-center min-[1050px]:-mt-4 min-[778px]:-mt-20 min-[550px]:-mt-12 -mt-8 min-[550px]:text-[20px] text-[12px] text-white glitch tracking-[10px] min-[650px]:hover:tracking-[10px] min-[650px]:hover:text-[25px] duration-500 cursor-pointer text-flicker-out-glow">Welcome To The Era Of Virtual Veda</p>
                    <div className="w-full min-[650px]:flex flex-row mt-10 h-[500px] hidden">
                        <div className="min-[1050px]:w-[15%] min-[778px]:w-[20%] w-[25%] flex flex-col justify-center items-center">
                        <CyberpunkButton text={"_Previous"} onClick={()=>{if(current!=0)setCurrent(current-1)}} />
                        </div>
                        <div className="min-[1050px]:w-[70%] min-[778px]:w-[60%] w-[50%] grid min-[1150px]:grid-cols-3 min-[900px]:grid-cols-2 grid-cols-1 pt-5 min-[1250px]:pl-10 pl-5">
                            <div>
                            <EventCard eventName={events[current][0][0]} eventTagline={events[current][0][1]} eventImage={events[current][0][2]} index={events[current][0][3]} />
                            </div>
                            <div className='min-[900px]:block hidden'>
                            <EventCard eventName={events[current][1][0]} eventTagline={events[current][1][1]} eventImage={events[current][1][2]} index={events[current][1][3]}/>
                            </div>
                            <div className='min-[1150px]:block hidden'>
                            <EventCard eventName={events[current][2][0]} eventTagline={events[current][2][1]} eventImage={events[current][2][2]} index={events[current][2][3]}/>
                            </div> 
                        </div>
                        <div className="min-[1050px]:w-[15%] min-[778px]:w-[20%] w-[25%] flex flex-col justify-center items-center">
                            <CyberpunkButton text={"Next_"} onClick={()=>{if(current<5)setCurrent(current+1)}}/>
                        </div>
                    </div>
                    <div className='min-[650px]:hidden flex flex-row justify-center items-center h-[420px]'>
                    <EventCard eventName={events2[currentMobile][0]} eventTagline={events2[currentMobile][1]} eventImage={events2[currentMobile][2]} index={currentMobile}/>
                    </div>
                    <div className='min-[650px]:hidden flex flex-row justify-center items-center min-[500px]:gap-10 gap-4'>
                        <CyberpunkButton text={"_Previous"} onClick={()=>{if(currentMobile!=0)setCurrentMobile(currentMobile-1)}}/>
                        <CyberpunkButton text={"Next_"}  onClick={()=>{if(currentMobile<17)setCurrentMobile(currentMobile+1)}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events