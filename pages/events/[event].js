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
import Link from 'next/link';

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


const prizes=[
    {
     "Event Name": "Requizzit",
     "Event Type": "GK Quiz Event",
     "Minimum No of Participant in group": 3,
     "Maximum No of Participants in Group": 3,
     "Total Prize Money*": 11000,
     "1st Prize Worth": 5000,
     "2nd Prize  Worth": 3000,
     "3rd Prize Worth": 2000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "Robowar",
     "Event Type": "Manual Robotics Event",
     "Minimum No of Participant in group": 4,
     "Maximum No of Participants in Group": 5,
     "Total Prize Money*": 39000,
     "1st Prize Worth": 20000,
     "2nd Prize  Worth": 10000,
     "3rd Prize Worth": 8000,
     "4th Prize Worth": 1000,
     "5th Prize Worth": 0
    },
    {
     "Event Name": "Lakshya",
     "Event Type": "Manual Robotics Event",
     "Minimum No of Participant in group": 3,
     "Maximum No of Participants in Group": 5,
     "Total Prize Money*": 24000,
     "1st Prize Worth": 10000,
     "2nd Prize  Worth": 7000,
     "3rd Prize Worth": 5000,
     "4th Prize Worth": 1000,
     "5th Prize Worth": 1000
    },
    {
     "Event Name": "Udaan",
     "Event Type": "RC Plane Event",
     "Minimum No of Participant in group": 2,
     "Maximum No of Participants in Group": 5,
     "Total Prize Money*": 39000,
     "1st Prize Worth": 20000,
     "2nd Prize  Worth": 10000,
     "3rd Prize Worth": 8000,
     "4th Prize Worth": 1000,
     "5th Prize Worth": 0
    },
    {
     "Event Name": "B-Plan",
     "Event Type": "Business Plan Contest",
     "Minimum No of Participant in group": 2,
     "Maximum No of Participants in Group": 4,
     "Total Prize Money*": 13000,
     "1st Prize Worth": 6000,
     "2nd Prize  Worth": 4000,
     "3rd Prize Worth": 2000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "House Of Hogwarts",
     "Event Type": "Treasure Hunt Event",
     "Minimum No of Participant in group": 4,
     "Maximum No of Participants in Group": 4,
     "Total Prize Money*": 17000,
     "1st Prize Worth": 8000,
     "2nd Prize  Worth": 5000,
     "3rd Prize Worth": 3000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "Code-Blooded",
     "Event Type": "Programming Contest",
     "Minimum No of Participant in group": 1,
     "Maximum No of Participants in Group": 1,
     "Total Prize Money*": 15000,
     "1st Prize Worth": 8000,
     "2nd Prize  Worth": 4000,
     "3rd Prize Worth": 2000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "Overnite",
     "Event Type": "Problem Solving (Programming)",
     "Minimum No of Participant in group": 1,
     "Maximum No of Participants in Group": 4,
     "Total Prize Money*": 14000,
     "1st Prize Worth": 6000,
     "2nd Prize  Worth": 4000,
     "3rd Prize Worth": 3000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "DE-Movier",
     "Event Type": "Short Film Contest",
     "Minimum No of Participant in group": 5,
     "Maximum No of Participants in Group": 8,
     "Total Prize Money*": 24000,
     "1st Prize Worth": 10000,
     "2nd Prize  Worth": 7000,
     "3rd Prize Worth": 5000,
     "4th Prize Worth": 1000,
     "5th Prize Worth": 1000
    },
    {
     "Event Name": "LA-Photography",
     "Event Type": "Photography Event",
     "Minimum No of Participant in group": 1,
     "Maximum No of Participants in Group": 1,
     "Total Prize Money*": 10000,
     "1st Prize Worth": 4000,
     "2nd Prize  Worth": 3000,
     "3rd Prize Worth": 2000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "Pradarshan",
     "Event Type": "Model Presentation",
     "Minimum No of Participant in group": 3,
     "Maximum No of Participants in Group": 4,
     "Total Prize Money*": 15000,
     "1st Prize Worth": 6000,
     "2nd Prize  Worth": 4000,
     "3rd Prize Worth": 3000,
     "4th Prize Worth": 1000,
     "5th Prize Worth": 1000
    },
    {
     "Event Name": "Crescent",
     "Event Type": "Bridge Making Contest",
     "Minimum No of Participant in group": 3,
     "Maximum No of Participants in Group": 4,
     "Total Prize Money*": 10000,
     "1st Prize Worth": 4000,
     "2nd Prize  Worth": 3000,
     "3rd Prize Worth": 2000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
        "Event Name": "Naturgenix",
        "Event Type": "To create a DIY perfume using alcohol base and natural essence ",
        "Minimum No of Participant in group": 4,
        "Maximum No of Participants in Group": 4,
        "Total Prize Money*": 8000,
        "1st Prize Worth": 4000,
        "2nd Prize  Worth": 2000,
        "3rd Prize Worth": 1000,
        "4th Prize Worth": 500,
        "5th Prize Worth": 500
       },
    {
     "Event Name": "Squaroscope",
     "Event Type": "solve a 3x3 rubics cube",
     "Minimum No of Participant in group": 1,
     "Maximum No of Participants in Group": 1,
     "Total Prize Money*": 5700,
     "1st Prize Worth": 2000,
     "2nd Prize  Worth": 1500,
     "3rd Prize Worth": 1000,
     "4th Prize Worth": 700,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "HiTaTHON",
     "Event Type": "Idea Submission Event",
     "Minimum No of Participant in group": 4,
     "Maximum No of Participants in Group": 5,
     "Total Prize Money*": 8000,
     "1st Prize Worth": 4000,
     "2nd Prize  Worth": 2000,
     "3rd Prize Worth": 1000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "See-QL",
     "Event Type": "SQL Query Wiriting contest",
     "Minimum No of Participant in group": 1,
     "Maximum No of Participants in Group": 1,
     "Total Prize Money*": 8000,
     "1st Prize Worth": 4000,
     "2nd Prize  Worth": 2000,
     "3rd Prize Worth": 1000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
    {
     "Event Name": "Fun Games",
     "Minimum No of Participant in group": 1,
     "Maximum No of Participants in Group": 1,
     "Total Prize Money*": "...",
     "1st Prize Worth": "...",
     "2nd Prize  Worth": "...",
     "3rd Prize Worth": "...",
     "4th Prize Worth":"...",
     "5th Prize Worth": "..."
    },
    {
     "Event Name": " Valorant ",
     "Minimum No of Participant in group": 5,
     "Maximum No of Participants in Group": 5,
     "Total Prize Money*": 22500,
     "1st Prize Worth": 10000,
     "2nd Prize  Worth": 7500,
     "3rd Prize Worth": 5000,
     "4th Prize Worth": 0,
     "5th Prize Worth": 0
    },
    {
     "Event Name": "IoT Tech Expo",
     "Event Type": "IoT based model event",
     "Minimum No of Participant in group": 2,
     "Maximum No of Participants in Group": 3,
     "Total Prize Money*": 11000,
     "1st Prize Worth": 5000,
     "2nd Prize  Worth": 3000,
     "3rd Prize Worth": 2000,
     "4th Prize Worth": 500,
     "5th Prize Worth": 500
    },
   ]


//    {
//     "Event Name": "COD Mobile ",
//     "Minimum No of Participant in group": 4,
//     "Maximum No of Participants in Group": 4,
//     "Total Prize Money*": 16000,
//     "1st Prize Worth": 8000,
//     "2nd Prize  Worth": 5000,
//     "3rd Prize Worth": 3000,
//     "4th Prize Worth": 0,
//     "5th Prize Worth": 0
//    },

const events=[
    ["Requizzit","Level up your brains, and thrive on to win.","requizzit","Nothing is constant for a reason, even the smallest of things around us are changing rapidly. Are you up to date about that? Are you aware of all the current affairs? Are you the ready to test your knowledge and have fun at the same time? Buckle up your minds, grab all your knowledge, to be a part of the most brain picking quiz of the year.","pregrad"],
    ["Robowar","Combat with your bots, and let their best win","robowar","A game of style, control, damage and aggression with the robots competing against each other in a deadly combat. Strategise your bots now because it's time to rumble. Get ready to witness the most savage and treacherous war of hits and clashes.",""],
    ["Lakshya","Reach your destination at your risk","lakshya","A game of strategy, accuracy, hurdles and challenges with the wireless robots fighting to win against each other passing all the obstacles. Zig-zag paths, short tunnels and even stones, marble and sand all in their way to reach the finish line without falling off the track. Get ready to witness the chills and shivers of Lakshya 2k23, with circuit heads competing against each other.",""],
    ["Udaan","Be the pilot you always dreamt","udaan","Enough of snapping with wings, time to soar off the ground and unleash what you got with the RC plane and your engineering yield.",""],
    ["B-Plan","Potential unicorn or just following the herd trail. Dare to pitch?","bplan","Dream of shark tank? Get past the riverside first, pitch in the ideas, show the entrepreneurial skill you hon and the first investment awaits you.",""],
    ["House Of Hogwarts","Wand your way to Hogwarts Hunt","hogwarts","Avada Kedavra, still Volde lost! How much you got in your head, Potterhead? Can you go past the mysteries and hunt the treasure hidden somewhere on platform 9¾?",""],
    ["Code-Blooded","Code is poetry, let your Imagination run wild.","code","Get ready to unleash your inner code aficionado and gear up for Code-Blooded, a challenge that will put your skills in solving pseudo codes and mastering programming fundamentals to the test. There will be no language barriers in this coding round, so regardless of your programming vernacular, you're welcome to join the fray. So, are you ready to showcase your prowess and compete with like-minded individuals who live and breathe code?","yhills"],
    ["Overnite","Let the code leave your competitiors in the byte dust","overnite","An electrifying overnight coding challenge where you'll need to put your skills to the test! With a mere 12 hours at your disposal, you'll be expected to craft an impeccable prototype that can solve complex code riddles with ease. Only the most agile, innovative, and skilled coders will be able to crack this challenge and emerge victorious. Will you be one of them?",""],
    ["DE-Movier","Lights Out, Imagination on. Let your creation that leaves a lasting impression.","demovier","Unleash your boundless creativity and channel it into crafting an original movie. This is your opportunity to showcase your artistic vision, to transport your audience on a journey of wonder, and to demonstrate your skill in the cinematic medium. With no boundaries, let your imagination run wild and bring your storytelling prowess to the fore.",""],
    ["LA-Photography","Let the lens do the talking of a story unknown","laphotography","Let the snaps of your shutter usher away the captured stories through your lens. Catch the fleeting glimpses of the heart and soul of sights unseen, bound together to create one story worth telling.",""],
    ["Pradarshan","Let the creativity build around technology","pradarshan","Humankind has achieved milestones merging the technical views with their sheer emboldened creativity. It’s time to let your imagination run wild with its sense of purpose and create riveting models to represent the true essence of your ideas.",""],
    ["Crescent","Whose bridge withstands the London Bridge?","crescent","Over the years, the connections in the world have strengthened, making travel and life easier. It’s time to see whether your own strong connective foundations parallel the strength and durability of the bridges you create from scratch.",""],
    ["Naturgenix","Create from our natural foundations.","naturgenix","We are born from this planet, our Earth and are cradled within the soft embrace of nature. But what can we do with the abundant gifts nature lays onto us? Unleash your innate creativity and bring to life a natural creation worth celebrating.","iichea"],
    ["Squaroscope","Quick hands, sharp minds, and a Rubik's Cube- let the speed-cubing competition begin!","squaroscope","Showcase your lightning-fast solving skills and battle it out to become the ultimate Rubik's Cube champion. With a timer ticking down, participants must solve the cube as quickly as possible. Are you ready to blur your fingers across the colourful cubes, racing to complete the puzzle before time runs out.","cubelelo"],
    ["HiTaTHON","","hitathon","","idea"],
    ["See-QL","","sql","candidates will be tested with their SQL query writing ability, to analyze results of query,explore feautures of writing queries in SQL , problem solving and data fetching ability.","",""],
    ["Fun Games","Push ups, Arm Wrestling, Skipping","fungames","","decathelon"],
    ["Online Games","COD Mobile & Valorant","games","COD Mobile & Valorant",""],
    ["IoT Tech Expo","Expose connections that build the future","iot","To Be Revealed Soon!",""]
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
           {events[id-1][4]&&<div className='flex flex-col justify-center items-center mt-5'>
                <p className='text-white glitch'>Powered By</p>
                <img src={'/assets/images/sponsors/'+events[id-1][4]+'.jpg'} alt='event-page' className='mx-auto w-[40%] rounded-[15px] mt-5' />
            </div>}
        </div>
        <div className='w-[60%] flex flex-col justify-center items-center gap-5'>
            <p className='text-4xl text-center text-white underline glitch'>{events[id-1][0]}:</p>
            <p className='text-xl text-center text-white glitch'>{events[id-1][1]}</p>
            <p className='text-center text-white font-mono'>{events[id-1][3]}</p>
            <table className="text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                Total Prize Money Worth*
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                1st Prize Worth
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                2nd Prize Worth
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                3rd Prize Worth
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                4th Prize Worth
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                5th Prize Worth
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {id!=18?<tr className="bg-gray-800">
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['Total Prize Money*']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['1st Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['2nd Prize  Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['3rd Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['4th Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['5th Prize Worth']}
                            </td></tr> :<>

                            <tr className="bg-gray-800">
                                <td colSpan={6} className="min-[550px]:px-6 px-2 font-bold text-white text-lg">Valorant : </td>
                            </tr>

                            <tr className="bg-gray-800">
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 22500
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 10000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 7500
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 5000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 0
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 0
                            </td></tr>

                            <tr className="bg-gray-800">
                                <td colSpan={6} className="min-[550px]:px-6 px-2 font-bold text-white text-lg">COD Mobile : </td>
                            </tr>

                            <tr className="bg-gray-800">
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 16000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 8000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 5000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 3000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 0
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 0
                            </td></tr>

                            </>}
                    </tbody>
                </table>
                <div className=' self-start  -translate-y-4'>
                    <p className='text-white text-[10px]'>*Prize Money Worth can be increased depending on the total number of participants.</p>
                    <p className='text-white text-[10px]'>**Event can be cancelled if number of participants is remarkably low.</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-5'>{loggedIn&&<>{!isPaid&&<CyberpunkButton text={ arrayIncludes(eventRegistered,id-1)?"Remove Event":"Add Event"} onClick={()=>{
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
            }}/>}<CyberpunkButton text={"View My Events"} onClick={()=>{router.push("/profile")}}/></>}<a href={"assets/pdfs/"+events[id-1][2]+".pdf"} target="_blank"><CyberpunkButton text={"View Rules And Details"} onClick={()=>{}}/></a></div>
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
            {events[id-1][4]&&<div className='flex flex-col justify-center items-center mt-5'>
                <p className='text-white glitch'>Powered By</p>
                <img src={'/assets/images/sponsors/'+events[id-1][4]+'.jpg'} alt='event-page' className='mx-auto w-[30%] rounded-[15px] mt-2' />
            </div>}
            <div className='flex flex-row justify-center items-center mt-5'>
            <Link href={"assets/pdfs/"+events[id-1][2]+".pdf"} target="_blank"><CyberpunkButton text={"View Rules And Details"} onClick={()=>{}}/></Link>
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
            <p className='text-center text-white min-[700px]:text-[20px] min-[470px]:text-[18px] text-[15px] mx-5 font-mono eventTextHeight'>{events[id-1][3]}</p>
            <div className='min-[845px]:w-2/3 min-[690px]:w-[80%] w-[99%] mx-auto mt-5'>
            <table className="text-sm text-left text-gray-500 min-[375px]:overflow-x-hidden overflow-x-scroll">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2 min-[375px]:text-[10px] text-[8px]">
                                Total Prize Money Worth*
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2 min-[375px]:text-[10px] text-[8px]">
                                1st Prize Worth
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2 min-[375px]:text-[10px] text-[8px]">
                                2nd Prize Worth
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2 min-[375px]:text-[10px] text-[8px]">
                                3rd Prize Worth
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2 min-[375px]:text-[10px] text-[8px]">
                                4th Prize Worth
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2 min-[375px]:text-[10px] text-[8px]">
                                5th Prize Worth
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {id!=18?<tr className="bg-gray-800">
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['Total Prize Money*']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['1st Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['2nd Prize  Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['3rd Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['4th Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ {prizes[id-1]['5th Prize Worth']}
                            </td></tr> :<>

                            <tr className="bg-gray-800">
                                <td colSpan={6} className="min-[550px]:px-6 px-2 font-bold text-white text-lg">Valorant : </td>
                            </tr>

                            <tr className="bg-gray-800">
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 22500
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 10000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 7500
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 5000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 0
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 0
                            </td></tr>

                            <tr className="bg-gray-800">
                                <td colSpan={6} className="min-[550px]:px-6 px-2 font-bold text-white text-lg">COD Mobile : </td>
                            </tr>

                            <tr className="bg-gray-800">
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 16000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 8000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 5000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 3000
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 0
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-bold text-white">
                            ₹ 0
                            </td></tr>

                            </>}
                    </tbody>
                </table>
                <div className=' self-start mx-auto'>
                    <p className='text-white text-[10px]'>*Prize Money Worth can be increased depending on the total number of participants.</p>
                    <p className='text-white text-[10px]'>**Event can be cancelled if number of participants is remarkably low.</p>
                </div>
                </div>
            </TabPanel>
        </Tabs>
    </div>
</div>
</>
)
        }

}

export default EventsPage