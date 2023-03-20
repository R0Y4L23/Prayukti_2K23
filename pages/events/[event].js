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

import Navigation from '../../components/navigation';

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
            //console.log(doc.data())
            setEventRegistered(doc.data().events) 
            if(doc.data().isPaid)
            {
                setIsPaid(true)
            }            
        });
    }
},[])

useEffect(()=>{
    let a=JSON.parse(sessionStorage.getItem("isAlumni"))
    if(a)
    {
        toast.error("Only Available For Students")
        router.replace("/")
    }
},[])

const events=[
    ["Requizzit","Level up your brains, and thrive on to win.","requizzit","Nothing is constant for a reason, even the smallest of things around us are changing rapidly. Are you up to date about that? Are you aware of all the current affairs? Are you the ready to test your knowledge and have fun at the same time? Buckle up your minds, grab all your knowledge, to be a part of the most brain picking quiz of the year.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FRequizzit.pdf?alt=media&token=11476931-36a5-4724-8b0b-e6013b96300e"],
    ["Robowar","Combat with your bots, and let their best win","robowar","A game of style, control, damage and aggression with the robots competing against each other in a deadly combat. Strategise your bots now because it's time to rumble. Get ready to witness the most savage and treacherous war of hits and clashes.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FRobowar.pdf?alt=media&token=c16717cd-4256-43c4-a024-a2723649b8a0"],
    ["Lakshya","Reach your destination at your risk","lakshya","A game of strategy, accuracy, hurdles and challenges with the wireless robots fighting to win against each other passing all the obstacles. Zig-zag paths, short tunnels and even stones, marble and sand all in their way to reach the finish line without falling off the track. Get ready to witness the chills and shivers of Lakshya 2k23, with circuit heads competing against each other.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FLakshya.pdf?alt=media&token=74e155e4-38e4-4ac9-9315-70db0cb43adf"],
    ["Udaan","Be the pilot you always dreamt","udaan","Enough of snapping with wings, time to soar off the ground and unleash what you got with the RC plane and your engineering yield.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FUdaan.pdf?alt=media&token=b41933c4-7048-4549-928a-f34f6f61a1be"],
    ["B-Plan","Potential unicorn or just following the herd trail. Dare to pitch?","bplan","Dream of shark tank? Get past the riverside first, pitch in the ideas, show the entrepreneurial skill you hon and the first investment awaits you.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FBplan.pdf?alt=media&token=a77b0f6b-54e4-432a-96cb-ef2988852bf6"],
    ["House Of Hogwarts","Wand your way to Hogwarts Hunt","hogwarts","Avada Kedavra, still Volde lost! How much you got in your head, Potterhead? Can you go past the mysteries and hunt the treasure hidden somewhere on platform 9¾?","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FHouseofhogwarts.pdf?alt=media&token=52f279ea-cc12-40c9-b99e-2361a8699a25"],
    ["Code-Blooded","Code is poetry, let your Imagination run wild.","code","Get ready to unleash your inner code aficionado and gear up for Code-Blooded, a challenge that will put your skills in solving pseudo codes and mastering programming fundamentals to the test. There will be no language barriers in this coding round, so regardless of your programming vernacular, you're welcome to join the fray. So, are you ready to showcase your prowess and compete with like-minded individuals who live and breathe code?","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FCodeblooded.pdf?alt=media&token=25184d04-3f09-4682-919e-d20481575d04"],
    ["Overnite","Let the code leave your competitiors in the byte dust","overnite","An electrifying overnight coding challenge where you'll need to put your skills to the test! With a mere 12 hours at your disposal, you'll be expected to craft an impeccable prototype that can solve complex code riddles with ease. Only the most agile, innovative, and skilled coders will be able to crack this challenge and emerge victorious. Will you be one of them?","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FOvernite.pdf?alt=media&token=b9423cd9-4e77-4ed7-a3c8-1c9ddf736427"],
    ["DE-Movier","Lights Out, Imagination on. Let your creation that leaves a lasting impression.","demovier","Unleash your boundless creativity and channel it into crafting an original movie. This is your opportunity to showcase your artistic vision, to transport your audience on a journey of wonder, and to demonstrate your skill in the cinematic medium. With no boundaries, let your imagination run wild and bring your storytelling prowess to the fore.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FDemovier.pdf?alt=media&token=4c6d6f98-8901-4589-9396-9e724672acae"],
    ["LA-Photography","Let the lens do the talking of a story unknown","laphotography","Let the snaps of your shutter usher away the captured stories through your lens. Catch the fleeting glimpses of the heart and soul of sights unseen, bound together to create one story worth telling.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FLaphotography.pdf?alt=media&token=160340bb-8bcd-4c93-a6b5-4e7b9116eb7c"],
    ["Pradarshan","Let the creativity build around technology","pradarshan","Humankind has achieved milestones merging the technical views with their sheer emboldened creativity. It’s time to let your imagination run wild with its sense of purpose and create riveting models to represent the true essence of your ideas.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FPradarshan.pdf?alt=media&token=b41dcbb7-3603-4a72-ac01-b2c0d705fa55"],
    ["Crescent","Whose bridge withstands the London Bridge?","crescent","Over the years, the connections in the world have strengthened, making travel and life easier. It’s time to see whether your own strong connective foundations parallel the strength and durability of the bridges you create from scratch.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FCrescent.pdf?alt=media&token=f6b50ed0-2186-4af5-ad38-f1ec1482a8a5"],
    ["Naturgenix","Create from our natural foundations.","naturgenix","We are born from this planet, our Earth and are cradled within the soft embrace of nature. But what can we do with the abundant gifts nature lays onto us? Unleash your innate creativity and bring to life a natural creation worth celebrating.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FNaturgenix.pdf?alt=media&token=b08de383-fa0c-4c68-a10c-f1eda4ea1697"],
    ["Squaroscope","Quick hands, sharp minds, and a Rubik's Cube- let the speed-cubing competition begin!","squaroscope","Showcase your lightning-fast solving skills and battle it out to become the ultimate Rubik's Cube champion. With a timer ticking down, participants must solve the cube as quickly as possible. Are you ready to blur your fingers across the colourful cubes, racing to complete the puzzle before time runs out.","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FSquaroscope.pdf?alt=media&token=63026794-5ecc-4405-8a10-61853e422c86"],
    ["HiTaTHON","","hitathon","","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FHitathon.pdf?alt=media&token=368951d8-d7f4-4fe7-9874-07ec3f5db80a"],
    ["See-QL","","sql","candidates will be tested with their SQL query writing ability, to analyze results of query,explore feautures of writing queries in SQL , problem solving and data fetching ability.",""],
    ["Fun Games","Push ups, Arm Wrestling, Skipping","fungames","",""],
    ["Online Games","To Be Revealed Soon!","games","To Be Revealed Soon!",""],
    ["IoT Tech Expo","Expose connections that build the future","iot","To Be Revealed Soon!","https://firebasestorage.googleapis.com/v0/b/prayukti-2k23.appspot.com/o/PDFs%2FIottechexpo.pdf?alt=media&token=71f8f2cc-3e48-4164-a6ce-a0c94f3d162a"]
]

const addEvent=async ()=>{
    //console.log("Adding")
    let e=eventRegistered
    e.push({"index":id-1,"name":events[id-1][0]})
    setEventRegistered(e)
    await updateDoc(doc(firestore,"Users",uid),{
        events:e
    })
    toast.success("Successfully Added An Event")
}

const removeEvent=async ()=>{
    //console.log("Removing")
    let e=eventRegistered
    let a=[]
    for(let i=0;i<e.length;i++)
    {
        if(e[i]["index"]!=id-1)
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

const arrayIncludes=(array,index)=>{
    for(let i=0;i<array.length;i++)
    {
        if(array[i]["index"]==index)
        {
            return true
        }
    }
    return false
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
    <Navigation/>
    <div className='w-[90%] mx-auto min-h-screen z-20 -translate-y-1 min-[1080px]:flex flex-row hidden'>
        <div className='w-[40%] flex flex-col justify-center items-center min-h-screen gap-5'>
            <img src={'/assets/images/events/'+events[id-1][2]+'.jpg'} alt='event-page' className='mx-auto w-[80%] rounded-[15px]' />
        </div>
        <div className='w-[60%] flex flex-col justify-center items-center gap-10'>
            <p className='text-4xl text-center text-white underline glitch'>{events[id-1][0]}:</p>
            <p className='text-xl text-center text-white glitch'>{events[id-1][1]}</p>
            <p className='text-center text-white font-mono'>{events[id-1][3]}</p>
            {loggedIn&&<div className='flex flex-row justify-center items-center gap-5'>{!isPaid&&<CyberpunkButton text={ arrayIncludes(eventRegistered,id-1)?"Remove Event":"Add Event"} onClick={()=>{
                //console.log("Clicked")
                if(arrayIncludes(eventRegistered,id-1))
                {
                    removeEvent()
                }
                else
                {
                    if(eventRegistered.length<6)
                    addEvent()
                    else
                    toast.error("Limit : 6 Events")
                }
            }}/>}<CyberpunkButton text={"View My Events"} onClick={()=>{router.push("/profile")}}/>{events[id-1][4]&&<a href={events[id-1][4]} target="_blank"><CyberpunkButton text={"View Rules And Details"} onClick={()=>{}}/></a>}</div>}
            {!loggedIn&&<p className='text-center text-white cursor-pointer uppercase font-mono' onClick={()=>{router.push("/auth")}}>Please Login To Add Events</p>}
        </div>
    </div>
    <div className='min-[1080px]:hidden block z-20 -translate-y-1'>
        <p className='min-[425px]:text-4xl text-xl text-center text-white underline mt-5 glitch'>{events[id-1][0]}:</p>
        <p className='min-[425px]:text-xl text-[10px] text-center text-white my-3 glitch'>{events[id-1][1]}</p>
        <Tabs className='mt-5'selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className={"flex flex-row justify-center border-b border-white"}>
                <Tab><p className={tabIndex==0?'min-[375px]:text-xl text-lg text-black':'min-[375px]:text-xl text-lg text-white font-mono'}>Event</p></Tab>
                <Tab><p className={tabIndex==1?'min-[375px]:text-xl text-lg text-black':'min-[375px]:text-xl text-lg text-white font-mono'}>Details</p></Tab>
            </TabList>
            <TabPanel className={"flex flex-col justify-center items-center eventMobile"}>
            <img src={'/assets/images/events/'+events[id-1][2]+'.jpg'} alt='event-page' className='mx-auto w-[300px] rounded-[15px] mt-10' />
            <div className='flex flex-row justify-center items-center mt-5'>
            {events[id-1][4]&&<a href={events[id-1][4]} target="_blank"><CyberpunkButton text={"View Rules And Details"} onClick={()=>{}}/></a>}
            </div>
            <div  className={"flex flex-row justify-center items-center mt-5 w-full"}>
                 {loggedIn&&<>{!isPaid&&<CyberpunkButton text={arrayIncludes(eventRegistered,id-1)?"Remove Event":"Add Event"} className="mx-auto" onClick={()=>{
                    // console.log("Clicked")
                    if(arrayIncludes(eventRegistered,id-1))
                    {
                        removeEvent()
                    }
                    else
                    {
                        if(eventRegistered.length<6)
                        addEvent()
                        else
                        toast.error("Limit : 6 Events")
                    }
                 }}/>}<CyberpunkButton text={"View My Events"} onClick={()=>{router.push("/profile")}}/></>}
                 {!loggedIn&&<p className='text-center text-white' onClick={()=>{router.push("/auth")}}>Please Login To Add Events</p>}
                 </div>
            </TabPanel>
            <TabPanel>
            <p className='text-center text-white min-[700px]:text-[20px] min-[470px]:text-[18px] text-[15px] mx-5 font-mono'>{events[id-1][3]}</p>
            </TabPanel>
        </Tabs>
    </div>
</div>
</>
)
        }

}

export default EventsPage