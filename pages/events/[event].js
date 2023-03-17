/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import CyberpunkButton from '../../components/cyberpunkButton'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useRouter } from 'next/router';

import { firestore } from '../../firebase/config'
import {doc,onSnapshot,updateDoc} from "firebase/firestore"

import Head from 'next/head';
import { toast } from 'react-toastify';

const EventsPage = () => {

const router=useRouter()
const [tabIndex, setTabIndex] = useState(0);
const [eventRegistered,setEventRegistered]=useState([])
const id= Number(router.asPath.replace("/events/",""))
const [loggedIn,setLoggedIn]=useState(false)
const [uid,setUid]=useState("")
const [isPaid,setIsPaid]=useState(false)

useEffect(()=>{
    let s=sessionStorage.getItem("token")
    if(s)
    {
        setLoggedIn(true)
        let u=sessionStorage.getItem("id")
        setUid(u)
        onSnapshot(doc(firestore, "Users", u), (doc) => {
            console.log(doc.data())
            setEventRegistered(doc.data().events) 
            if(doc.data().payment.length>0)
            {
                setIsPaid(true)
            }            
        });
    }
},[])



const events=[
    ["Requizzit","Level up your brains, and thrive on to win.","requizzit","Nothing is constant for a reason, even the smallest of things around us are changing rapidly. Are you up to date about that? Are you aware of all the current affairs? Are you the ready to test your knowledge and have fun at the same time? Buckle up your minds, grab all your knowledge, to be a part of the most brain picking quiz of the year."],
    ["Robowar","Combat with your bots, and let their best win","robowar","A game of style, control, damage and aggression with the robots competing against each other in a deadly combat. Strategise your bots now because it's time to rumble. Get ready to witness the most savage and treacherous war of hits and clashes."],
    ["Lakshya","Reach your destination at your risk","lakshya","A game of strategy, accuracy, hurdles and challenges with the wireless robots fighting to win against each other passing all the obstacles. Zig-zag paths, short tunnels and even stones, marble and sand all in their way to reach the finish line without falling off the track. Get ready to witness the chills and shivers of Lakshya 2k23, with circuit heads competing against each other."],
    ["Udaan","Be the pilot you always dreamt","udaan","Enough of snapping with wings, time to soar off the ground and unleash what you got with the RC plane and your engineering yield."],
    ["B-Plan","Potential unicorn or just following the herd trail. Dare to pitch?","bplan","Dream of shark tank? Get past the riverside first, pitch in the ideas, show the entrepreneurial skill you hon and the first investment awaits you."],
    ["House Of Hogwarts","Wand your way to Hogwarts Hunt","hogwarts","Avada Kedavra, still Volde lost! How much you got in your head, Potterhead? Can you go past the mysteries and hunt the treasure hidden somewhere on platform 9¾?"],
    ["Code-Blooded","Code is poetry, let your Imagination run wild.","code","Get ready to unleash your inner code aficionado and gear up for Code-Blooded, a challenge that will put your skills in solving pseudo codes and mastering programming fundamentals to the test. There will be no language barriers in this coding round, so regardless of your programming vernacular, you're welcome to join the fray. So, are you ready to showcase your prowess and compete with like-minded individuals who live and breathe code?"],
    ["Overnite","Let the code leave your competitiors in the byte dust","overnite","An electrifying overnight coding challenge where you'll need to put your skills to the test! With a mere 12 hours at your disposal, you'll be expected to craft an impeccable prototype that can solve complex code riddles with ease. Only the most agile, innovative, and skilled coders will be able to crack this challenge and emerge victorious. Will you be one of them?"],
    ["DE-Movier","Lights Out, Imagination on. Let your creation that leaves a lasting impression.","demovier","Unleash your boundless creativity and channel it into crafting an original movie. This is your opportunity to showcase your artistic vision, to transport your audience on a journey of wonder, and to demonstrate your skill in the cinematic medium. With no boundaries, let your imagination run wild and bring your storytelling prowess to the fore."],
    ["LA-Photography","Let the lens do the talking of a story unknown","laphotography","Let the snaps of your shutter usher away the captured stories through your lens. Catch the fleeting glimpses of the heart and soul of sights unseen, bound together to create one story worth telling."],
    ["Pradarshan","Let the creativity build around technology","pradarshan","Humankind has achieved milestones merging the technical views with their sheer emboldened creativity. It’s time to let your imagination run wild with its sense of purpose and create riveting models to represent the true essence of your ideas."],
    ["Crescent","Whose bridge withstands the London Bridge?","crescent","Over the years, the connections in the world have strengthened, making travel and life easier. It’s time to see whether your own strong connective foundations parallel the strength and durability of the bridges you create from scratch."],
    ["Naturgenix","Create from our natural foundations.","naturgenix","We are born from this planet, our Earth and are cradled within the soft embrace of nature. But what can we do with the abundant gifts nature lays onto us? Unleash your innate creativity and bring to life a natural creation worth celebrating."],
    ["Squaroscope","Quick hands, sharp minds, and a Rubik's Cube- let the speed-cubing competition begin!","squaroscope","Showcase your lightning-fast solving skills and battle it out to become the ultimate Rubik's Cube champion. With a timer ticking down, participants must solve the cube as quickly as possible. Are you ready to blur your fingers across the colourful cubes, racing to complete the puzzle before time runs out."],
    ["HiTaTHON","","hitathon",""],
    ["See-QL","","sql","candidates will be tested with their SQL query writing ability, to analyze results of query,explore feautures of writing queries in SQL , problem solving and data fetching ability."],
    ["Fun Games","Push ups, Arm Wrestling, Skipping","fungames",""],
    ["Online Games","To Be Revealed Soon!","games","To Be Revealed Soon!"],
    ["IoT Tech Expo","To Be Revealed Soon!","iot","To Be Revealed Soon!"]
]

const addEvent=async ()=>{
    console.log("Adding")
    let e=eventRegistered
    e.push(id-1)
    setEventRegistered(e)
    await updateDoc(doc(firestore,"Users",uid),{
        events:e
    })
    toast.success("Successfully Added An Event")
}

const removeEvent=async ()=>{
    console.log("Removing")
    let e=eventRegistered
    let a=[]
    for(let i=0;i<e.length;i++)
    {
        if(e[i]!=id-1)
        {
            a.push(e[i])
        }
    }
    setEventRegistered(a)
    await updateDoc(doc(firestore,"Users",uid),{
        events:a
    })
    toast.success("Successfully Removed An Event")
}


if(!id)
{
    return null
}
else
{
return (
    <>
    <Head>
        <title>{events[id-1][0]}</title>
    </Head>
   
<div className='eventsPageBg w-full min-h-screen'>
    <div className='absolute top-0 bg-black h-screen w-full bg-opacity-60'>
    </div>
    <div className='w-[90%] mx-auto min-h-screen z-20 -translate-y-1 min-[1080px]:flex flex-row hidden'>
        <div className='w-[40%] flex flex-col justify-center items-center min-h-screen gap-5'>
            <img src={'/assets/images/events/'+events[id-1][2]+'.jpg'} alt='event-page' className='mx-auto w-[80%] rounded-[15px]' />
            {/* <p className='text-center text-white text-xl underline uppercase'>Co-Ordinators : </p>
            <div>
                <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
            </div> */}
        </div>
        <div className='w-[60%] flex flex-col justify-center items-center gap-10'>
            <p className='text-4xl text-center text-white underline glitch'>{events[id-1][0]}:</p>
            <p className='text-xl text-center text-white glitch'>{events[id-1][1]}</p>
            <p className='text-center text-white font-mono'>{events[id-1][3]}</p>
            {loggedIn&&<div className='flex flex-row justify-center items-center gap-5'>{!isPaid&&<CyberpunkButton text={ eventRegistered.includes(id-1)?"Remove Event":"Add Event"} onClick={()=>{
                console.log("Clicked")
                if(eventRegistered.includes(id-1))
                {
                    removeEvent()
                }
                else
                {
                    addEvent()
                }
            }}/>}<CyberpunkButton text={"View My Events"} onClick={()=>{router.push("/profile")}}/></div>}
            {!loggedIn&&<p className='text-center text-white cursor-pointer uppercase font-mono' onClick={()=>{router.push("/auth")}}>Please Login To Add Events</p>}
        </div>
    </div>
    <div className='min-[1080px]:hidden block z-20 -translate-y-1'>
        <p className='text-4xl text-center text-white underline mt-5 glitch'>{events[id-1][0]}:</p>
        <p className='text-xl text-center text-white my-3 glitch'>{events[id-1][1]}</p>
        <Tabs className='mt-5'selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className={"flex flex-row justify-center border-b border-white"}>
                <Tab><p className={tabIndex==0?'min-[375px]:text-xl text-lg text-black':'min-[375px]:text-xl text-lg text-white font-mono'}>Event</p></Tab>
                <Tab><p className={tabIndex==1?'min-[375px]:text-xl text-lg text-black':'min-[375px]:text-xl text-lg text-white font-mono'}>Details</p></Tab>
                <Tab><p className={tabIndex==2?'min-[375px]:text-xl text-lg text-black':'min-[375px]:text-xl text-lg text-white font-mono'}>Register</p></Tab>
                <Tab><p className={tabIndex==3?'min-[375px]:text-xl text-lg text-black':'min-[375px]:text-xl text-lg text-white font-mono'}>Rules</p></Tab>
            </TabList>
            <TabPanel className={"flex flex-col justify-center items-center"}>
            <img src={'/assets/images/events/'+events[id-1][2]+'.jpg'} alt='event-page' className='mx-auto w-[300px] rounded-[15px] mt-10' />
            {/* <p className='text-center text-white text-xl underline uppercase my-5'>Co-Ordinators : </p>
            <div>
                <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
            </div> */}
            </TabPanel>
            <TabPanel>
            <p className='text-center text-white min-[700px]:text-[20px] min-[470px]:text-[16px] text-[12px] mt-5 mx-5 font-mono'>{events[id-1][3]}</p>
            </TabPanel>
            <TabPanel>
                <div  className={"flex flex-row justify-center items-center mt-10 w-full"}>
                 {loggedIn&&<>{!isPaid&&<CyberpunkButton text={eventRegistered.includes(id-1)?"Remove Event":"Add Event"} className="mx-auto" onClick={()=>{
                     console.log("Clicked")
                    if(eventRegistered.includes(id-1))
                    {
                        removeEvent()
                    }
                    else
                    {
                        addEvent()
                    }
                 }}/>}<CyberpunkButton text={"View My Events"} onClick={()=>{router.push("/profile")}}/></>}
                 {!loggedIn&&<p className='text-center text-white' onClick={()=>{router.push("/auth")}}>Please Login To Add Events</p>}
                 </div>
            </TabPanel>
            <TabPanel>
            <p className='text-center text-white min-[700px]:text-[20px] min-[470px]:text-[16px] text-[12px] mt-5 mx-5'>Coming Soon...</p>
            </TabPanel>
        </Tabs>
    </div>
</div>
</>
)
        }

}

export default EventsPage