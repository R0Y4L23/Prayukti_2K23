/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'

import { firestore,storage } from '../firebase/config'
import {doc,onSnapshot,updateDoc} from "firebase/firestore"

import {  ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Head from 'next/head';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';

import CyberpunkButton from '../components/cyberpunkButton';

const Profile = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const router=useRouter()

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
        ["See-QL","","sql",""],
        ["Fun Games","Push ups, Arm Wrestling, Skipping","fungames",""],
        ["Online Games","Coming Soon!","games","Coming Soon!"],
         ["Requizzit","Level up your brains, and thrive on to win.","requizzit","Nothing is constant for a reason, even the smallest of things around us are changing rapidly. Are you up to date about that? Are you aware of all the current affairs? Are you the ready to test your knowledge and have fun at the same time? Buckle up your minds, grab all your knowledge, to be a part of the most brain picking quiz of the year."]
    ]


    const [profileDetails,setProfileDetails]=useState(null)
    const [uid,setUid]=useState("")

    const [file,setFile]=useState(null)

    useEffect(()=>{
        let u=sessionStorage.getItem("id")
        if(u)
        {
            setUid(u)
            onSnapshot(doc(firestore, "Users", u), (doc) => {
            setProfileDetails(doc.data())          
        });
        }
        else
        {
            toast.error("Please Login First")
            router.replace("/auth")
        }
    },[])

    const register=async ()=>{

        const storageRef = ref(storage, profileDetails.name+"file");
        uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!',snapshot);
        getDownloadURL(storageRef).then(async (url)=>{
            await updateDoc(doc(firestore,"Users",uid),{
                payment:url
            })
            toast.success("You Have Successfully Registered For The Events")
        })
        });
    }


  return (
    <>
    <Head>
        <title>My Profile</title>
    </Head>
    <div className='profilePageBg w-full min-h-screen'>
        <div className='absolute top-0 bg-black h-screen w-full bg-opacity-60'>
        </div>
        <div className='w-full h-[500px] min-[800px]:flex flex-row hidden justify-evenly items-center z-20 translate-y-10 mt-12'>
            {profileDetails&&
            <div  className='w-[30%] h-full flex flex-col justify-center items-center relative px-5 gap-5 box'>
                <img src='assets/images/avatar.jpg' alt='avatar' className='w-[160px] h-[160px] rounded-[80px]'/>
                <div className='mb-10 mt-4' >
                    <p className='text-3xl font-semibold text-white text-center glitch'>{profileDetails.name}</p>
                    <p className='uppercase tracking-[10px] text-white text-center'>{profileDetails.college_name}</p>
                    <p className=' text-white text-center gravity mt-3'>-{profileDetails.email}</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-14'>
                    <div className='flex flex-col justify-center items-center'>
                        <img alt='icon' src='assets/icons/college.png' className='w-[60px]'/>
                        <p className='text-center text-white mt-2 gravity'>{profileDetails.roll}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img alt='icon' src='assets/icons/year.png' className='w-[60px]'/>
                        <p className='text-center text-white mt-2 gravity'>{profileDetails.year}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img alt='icon' src='assets/icons/phone.png' className='w-[60px]'/>
                        <p className='text-center text-white mt-2 gravity'>{profileDetails.contact}</p>
                    </div>
                </div>
            </div>}

            <div className='w-[30%] h-full bg-white box flex flex-col justify-center items-center'>
                <img src='assets/images/qr.png' className='w-2/3 h-[95%]' alt='qr'/>
            </div>

            {profileDetails&&<div className='w-[30%] box flex flex-col justify-center px-5 gap-2 xyz'>
               
                {profileDetails&&<>
                    <p className='text-center text-2xl underline font-mono text-white glitch mb-5'>Events Added</p>
                    {profileDetails.events.map((item,index)=>{
                        return(
                            <p key={index} className="text-lg font-mono text-white">{events[item][0]} - ₹100/-</p>
                        )
                    })}
                    </>
                }
                <p className="text-lg font-mono text-white">Registration - ₹600/-</p>
                <hr/>
                {profileDetails&&<p className="text-xl font-mono text-white">Total - ₹{profileDetails.events.length*100+600}/-</p>}
                {!profileDetails.payment&&<p className='font-mono mb-5 text-white'>(Scan QR to Pay and Upload Screenshot to Register)</p>}

{!profileDetails.payment&&<input type={"file"} onChange={(e)=>{setFile(e.target.files[0])}}/>}
                {(file&&!profileDetails.payment)&&<div className='flex flex-row justify-center items-center mt-10'><CyberpunkButton onClick={register} text="Register"/></div>}
                {profileDetails.payment&&<p className='font-mono text-lg border-4 border-white text-white cursor-pointer px-3 py-1 text-center'>You Have Already Registered</p>}
            </div>}
        </div>

        <Tabs className='mt-5 min-[800px]:hidden block'selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className={"flex flex-row justify-center border-b border-white"}>
                <Tab><p className={tabIndex==0?'text-xl text-black':'text-xl text-white'}>Profile</p></Tab>
                <Tab><p className={tabIndex==1?'text-xl text-black':'text-xl text-white'}>QR Code</p></Tab>
                <Tab><p className={tabIndex==2?'text-xl text-black':'text-xl text-white'}>Events</p></Tab>
            </TabList>
            <TabPanel>
            {profileDetails&&
            <div  className='w-[90%] h-[540px] py-10 flex flex-col justify-center items-center relative px-5 gap-5 box mx-auto mt-5'>
                <img src='assets/images/avatar.jpg' alt='avatar' className='w-[160px] h-[160px] rounded-[80px]'/>
                <div className='mb-10 mt-4' >
                    <p className='text-3xl font-semibold text-white text-center glitch'>{profileDetails.name}</p>
                    <p className='uppercase tracking-[10px] text-white text-center'>{profileDetails.college_name}</p>
                    <p className=' text-white text-center gravity mt-3'>-{profileDetails.email}</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-14'>
                    <div className='flex flex-col justify-center items-center'>
                        <img alt='icon' src='assets/icons/college.png' className='w-[60px]'/>
                        <p className='text-center text-white mt-2 gravity'>{profileDetails.roll}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img alt='icon' src='assets/icons/year.png' className='w-[60px]'/>
                        <p className='text-center text-white mt-2 gravity'>{profileDetails.year}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img alt='icon' src='assets/icons/phone.png' className='w-[60px]'/>
                        <p className='text-center text-white mt-2 gravity'>{profileDetails.contact}</p>
                    </div>
                </div>
            </div>}
            </TabPanel>
            <TabPanel>
            <div className='w-[90%] bg-white box flex flex-col justify-center items-center h-[450px] mt-5 mx-auto z-20 translate-y-0'>
                <img src='assets/images/qr.png' className='w-[300px] h-[95%]' alt='qr'/>
            </div>
            </TabPanel>
            <TabPanel>
                
            {profileDetails&&<div className='w-[90%] box rounded-[15px] flex flex-col justify-center relative px-5 gap-1 h-[540px] mt-5 mx-auto'>
            <p className='text-center text-2xl underline font-mono text-white glitch mb-5'>Events Added</p>
                {profileDetails&&
                    profileDetails.events.map((item,index)=>{
                        return(
                            <p key={index} className="text-lg font-mono text-white">{events[item][0]} - ₹100/-</p>
                        )
                    })
                }
                <p className="text-lg font-mono text-white">Registration - ₹600/-</p>
                <hr/>
                {profileDetails&&<p className="text-xl font-mono text-white">Total - ₹{profileDetails.events.length*100+600}/-</p>}
                {!profileDetails.payment&&<p className='font-mono mb-5 text-white'>(Scan QR to Pay and Upload Screenshot to Register)</p>}

{!profileDetails.payment&&<input type={"file"} onChange={(e)=>{setFile(e.target.files[0])}}/>}
                {(file&&!profileDetails.payment)&&<div className='flex flex-row justify-center items-center mt-10'><CyberpunkButton onClick={register} text="Register"/></div>}
                {profileDetails.payment&&<p className='font-mono text-lg border-4 border-white text-white cursor-pointer px-3 py-1 text-center'>You Have Already Registered</p>}
            </div>}
            </TabPanel>
        </Tabs>
    </div>
    </>
  )
}

export default Profile
