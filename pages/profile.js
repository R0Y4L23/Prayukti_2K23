/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import { firestore} from '../firebase/config'
import {doc,onSnapshot,updateDoc} from "firebase/firestore"
import Head from 'next/head';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import CyberpunkButton from '../components/cyberpunkButton';
import Navigation from '../components/navigation';

const InputField=({label,value,setValue,type})=>{
    return(
        <input value={value} onChange={(e)=>{setValue(e.target.value)}} type={type} className="p-2.5 pl-5 text-[0.9rem] text-white focus:outline-none bg-slate-600 rounded-[7px] w-[90%]" placeholder={label}/>
    )
}


const Profile = () => {
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
        ["Online Games","To Be Revealed Soon!","games","To Be Revealed Soon!"],
        ["IoT Tech Expo","Expose connections that build the future","iot","To Be Revealed Soon!"]
    ]


    const [profileDetails,setProfileDetails]=useState(null)
    const [uid,setUid]=useState("")
    const [profileComplete,setProfileComplete]=useState(false)
    const [name,setName]=useState("")
    const [college,setCollege]=useState("")
    const [phone,setPhone]=useState(0)
    const [roll,setRoll]=useState("")
    const [year,setYear]=useState("1st Year")
    const [department,setDepartment]=useState("")

    useEffect(()=>{
        let u=sessionStorage.getItem("id")
        if(u)
        {
            setUid(u)
            onSnapshot(doc(firestore, "Users", u), (doc) => {
            setProfileDetails(doc.data())
            setName(doc.data().name)
            setCollege(doc.data().college_name)
            setYear(doc.data().year)
            setRoll(doc.data().roll)
            setPhone(doc.data().contact)
            setDepartment(doc.data().department)
            if(!(doc.data().contact&&doc.data().college_name&&doc.data().year&&doc.data().roll&&doc.data().name&&doc.data().department))
            {
                setYear("1st Year")
                setProfileComplete(false)
            }
            else
            {
                setProfileComplete(true)
            }          
        });
        }
        else
        {
            toast.error("Please Login First")
            router.replace("/auth")
        }
    },[])

    const removeEvent=async (id)=>{
        //console.log("Removing")
        let e=profileDetails.events
        let a=[]
        for(let i=0;i<e.length;i++)
        {
            if(e[i]["index"]!=id)
            {
                a.push(e[i])
            }
        }
        await updateDoc(doc(firestore,"Users",uid),{
            events:a
        })
        toast.success("Successfully Removed An Event")
    }

   
    const updateProfileData=async ()=>{

        if(name&&college&&roll&&year&&phone&&department)
        {
        await updateDoc(doc(firestore,"Users",uid),{
            name:name,
            college_name:college,
            roll:roll,
            year:year,
            contact:phone,
            department:department
        })
        setProfileComplete(true)
        toast.success("Profile Successfully Updated")
    }
    else
    {
        toast.error("Please Fill All The Details")
    }
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

  return (
    <>
    <Head>
        <title>My Profile</title>
    </Head>
    <div className='profilePageBg w-full min-h-screen'>
        <div className='absolute top-0 bg-black h-screen w-full bg-opacity-60'>
        </div>
        <Navigation/>
        <div className='w-full h-[90vh] min-[768px]:flex flex-row hidden justify-evenly items-center z-20 translate-y-6 '>
            {(profileDetails&&profileComplete)&&
            <div  className='min-[1024px]:w-[40%] w-[54%] h-full flex flex-col justify-center items-center relative px-5 gap-5 box'>
                {!profileDetails.isPaid&&<i className="fa-solid fa-pencil text-yellow-300 self-end text-lg -translate-x-10" onClick={()=>{setProfileComplete(false)}}></i>}
                <img src={'assets/images/avatar.jpg'} alt='avatar' className='w-[160px] h-[160px] rounded-[80px]'/>
                <div className='mt-4' >
                    <p className='text-3xl font-semibold text-white text-center glitch mb-5'>{profileDetails.name}</p>
                    <hr className='my-3'/>
                    <p className='uppercase tracking-[5px] text-white text-center font-bold'>{profileDetails.college_name}</p>
                    <hr className='my-3'/>
                </div>
                <div className='mx-[84px]'>
                    <p className='text-white mb-2 text-[12px] uppercase tracking-[5px] text-center'><span className="font-bold">College Roll No. :    </span><span>{profileDetails.roll}</span></p>
                    <p className='text-white my-2 text-[12px] uppercase tracking-[5px] text-center'><span className="font-bold">Department :    </span><span>{profileDetails.department}</span></p>
                    <p className='text-white my-2 text-[12px] uppercase tracking-[5px] text-center'><span className="font-bold">Year :    </span><span>{profileDetails.year}</span></p>
                    <p className='text-white my-2 text-[12px] uppercase tracking-[5px] text-center'><span className="font-bold">Contact :    </span><span>{profileDetails.contact}</span></p>
                    <p className='text-white my-2 text-[12px] uppercase tracking-[5px] text-center'><span className="font-bold">Email</span></p>
                    <p className='text-white my-2 text-[12px] uppercase tracking-[5px] text-center'>{profileDetails.email}</p>
                    <hr className='my-3'/>
                    <hr className='mt-3'/>
                </div>
            </div>}
            {(profileDetails&&!profileComplete)&&
            <div className='min-[1024px]:w-[40%] w-[54%] h-full flex flex-col justify-center items-center relative px-5 gap-5 box'>
                <p className='text-white text-xl glitch text-center mb-5'>Please Complete Your Profile</p>
                <InputField label={"Name"} value={name} setValue={setName}/>
                <InputField label={"Full College Name"} value={college} setValue={setCollege}/>
                <InputField label={"College Roll No."} value={roll} setValue={setRoll}/>
                <select value={year} onChange={(e)=>{setYear(e.target.value)}} className="p-2.5 text-white focus:outline-none bg-slate-600 rounded-[15px] w-[90%]">
                    <option value={"1st Year"}>1st Year</option>
                    <option value={"2nd Year"}>2nd Year</option>
                    <option value={"3rd Year"}>3rd Year</option>
                    <option value={"4th Year"}>4th Year</option>
                </select>
                <InputField label={"Contact"} type="number" value={phone} setValue={setPhone} />
                <InputField label={"Department"} type="text" value={department} setValue={setDepartment} />
                <div className='mt-5'>
                <CyberpunkButton text={"Save Data"} onClick={updateProfileData}/>
                </div>
            </div>}


            {(profileDetails&&profileComplete)&&<div className='min-[840px]:w-[40%] w-[45%] box flex flex-col justify-center py-10 px-10 gap-2 h-full'>
                {profileDetails&&<>
                    <p className='text-center text-2xl underline font-mono text-white glitch mb-5'>Events Added</p>
                    {(profileDetails&&profileDetails.events.length==0)?<p className='text-white font-mono'>You Have Not Added Any Events</p>:<p className='text-white font-mono'>Your Events:</p>}
                    <ul className='list-disc mb-2 pb-5 h-[200px]'>
                    {profileDetails.events.map((item,index)=>{
                        return(
                            <li key={index} className="flex flex-row justify-between items-center px-10">
                            <p className="text-lg font-mono text-white font-extrabold">○ {item.name}</p>
                            {!profileDetails.isPaid&&<p><i className="fa-solid fa-trash text-red-600 text-lg translate-y-2 cursor-pointer" onClick={()=>{removeEvent(item.index)}}></i></p>}
                            </li>
                        )
                    })}
                    </ul>
                    </>
                }
                 {(profileDetails&&profileDetails.events.length==0&&!profileDetails.isPaid)&&<CyberpunkButton text={"Add Events"} onClick={()=>{router.push("/event")}}/>}
                <hr/>
                {profileDetails&&<p className="text-[15px] font-mono text-white flex flex-row justify-between items-center"><span>Registration Charge</span> <span>₹600/-</span></p>}
                {profileDetails&&<p className="text-[15px] font-mono text-white flex flex-row justify-between items-center"><span>Events Charge</span> <span>₹{arrayIncludes(profileDetails.events,10)?(profileDetails.events.length-1)*100:profileDetails.events.length*100}/-</span></p>}
                {(profileDetails&&arrayIncludes(profileDetails.events,10))&&<p className="text-[15px] font-mono text-white flex flex-row justify-between items-center"><span>Free Events</span> <span>Pradarshan</span></p>}
                <hr/>
                {profileDetails&&<p className="text-lg font-mono text-white flex flex-row justify-between items-center"><span>Total</span> <span>₹{arrayIncludes(profileDetails.events,10)?(profileDetails.events.length-1)*100+600:profileDetails.events.length*100+600}/-</span></p>}
                <hr/>
               <div className='flex flex-row justify-center items-center mt-5 gap-5'> {(profileDetails.events.length>0&&profileDetails.events.length<6&&!profileDetails.isPaid)&&<CyberpunkButton text={"Add More Events"} onClick={()=>{router.push("/event")}} />}
               {profileDetails.isPaid&&<div className='border border-white p-1 rounded-md'>
                <p className='text-white text-center'>You Have Already Registered</p>
                <p className='text-white text-center'>Slip Number : {profileDetails.slip_number} || Unique ID : {profileDetails.uniqueID}</p>
                </div>}
               {/* <CyberpunkButton text={"Pay Now"} onClick={()=>{router.push("/event")}} /> */}
               </div>
            </div>}
        
            {(profileDetails&&!profileComplete)&&<div className='min-[840px]:w-[40%] w-[45%] box flex flex-col justify-center items-center px-5 gap-2 h-full'>
                <p className='glitch text-xl text-white text-center'>Please Complete Your Profile To Continue</p>
                </div>}
        </div>





        {profileDetails&&<div className='w-[95%] mx-auto h-auto min-[375px]:pb-5 pb-2 box z-20 translate-y-5 min-[768px]:hidden mobileCard2'>
            <div className='flex flex-row justify-center items-center mt-5 min-[560px]:scale-100 scale-[80%]'>
                {profileComplete?<div className='w-[90%] min-[560px]:p-5 p-2 relative'>
                {!profileDetails.isPaid&&<i className="fa-solid fa-pencil text-yellow-300 absolute right-0 top-0" onClick={()=>{setProfileComplete(false)}}></i>}
                    <p className='min-[560px]:text-2xl text-xl font-semibold text-white text-center glitch mb-2'>{profileDetails.name}</p>
                    <p className='uppercase tracking-[5px] text-white text-center font-bold text-[15px]'>{profileDetails.college_name}</p>
                    <hr className='my-3'/>
                    <p className='text-white text-center tracking-[5px] uppercase text-[11px]'>{profileDetails.roll} || {profileDetails.year} || {profileDetails.contact} || {profileDetails.department}</p>
                    <hr className='my-3'/>
                    <p className=' text-white text-center min-[375px]:text-[15px] text-[13px] font-serif tracking-wider'>{profileDetails.email}</p>
                </div>:<p className='text-white glitch h-[200px] text-center translate-y-6'>Please Complete Your Profile To Continue</p>}
            </div>
        </div>}
        {(profileDetails&&profileComplete)&&<div className='w-[95%] mx-auto h-auto pb-5 box z-20 translate-y-5 min-[768px]:hidden mt-5 p-5 mobileCard'>
        {profileDetails&&<>
                    <p className='text-center text-2xl underline font-mono text-white glitch mb-5 mt-5'>Events Added</p>
                    {(profileDetails&&profileDetails.events.length==0)?<p className='text-white font-mono'>You Have Not Added Any Events</p>:<p className='text-white font-mono'>Your Events:</p>}
                    <ul className='list-disc mb-2 pb-5 '>
                    {profileDetails.events.map((item,index)=>{
                        return(
                            <li key={index} className="flex flex-row justify-between items-center px-10">
                            <p className="text-lg font-mono text-white font-extrabold">○ {item.name}</p>
                            {!profileDetails.isPaid&&<p><i className="fa-solid fa-trash text-red-600 text-lg translate-y-2 cursor-pointer" onClick={()=>{removeEvent(item.index)}}></i></p>}
                            </li>
                        )
                    })}
                    </ul>
                    </>
                }
                 {(profileDetails&&profileDetails.events.length==0&&!profileDetails.isPaid)&&<CyberpunkButton text={"Add Events"} onClick={()=>{router.push("/event")}}/>}
                <hr className='mt-5'/>
                {profileDetails&&<p className="text-[15px] font-mono text-white flex flex-row justify-between items-center"><span>Registration Charge</span> <span>₹600/-</span></p>}
                {profileDetails&&<p className="text-[15px] font-mono text-white flex flex-row justify-between items-center"><span>Events Charge</span> <span>₹{arrayIncludes(profileDetails.events,10)?(profileDetails.events.length-1)*100:profileDetails.events.length*100}/-</span></p>}
                {(profileDetails&&arrayIncludes(profileDetails.events,10))&&<p className="text-[15px] font-mono text-white flex flex-row justify-between items-center"><span>Free Events</span> <span>Pradarshan</span></p>}
                <hr/>
                {profileDetails&&<p className="text-lg font-mono text-white flex flex-row justify-between items-center"><span>Total</span> <span>₹{arrayIncludes(profileDetails.events,10)?(profileDetails.events.length-1)*100+600:profileDetails.events.length*100+600}/-</span></p>}
                <hr/>
                <div className='flex flex-row justify-center items-center mt-5'>{(profileDetails.events.length>0&&profileDetails.events.length<6&&!profileDetails.isPaid)&&<CyberpunkButton text={"Add More Events"} onClick={()=>{router.push("/event")}} />}
                {profileDetails.isPaid&&<div className='border border-white p-1 rounded-md'>
                <p className='text-white text-center'>You Have Already Registered</p>
                <p className='text-white text-center'>Slip Number : {profileDetails.slip_number} || Unique ID : {profileDetails.uniqueID}</p>
                </div>}
                {/* <CyberpunkButton text={"Pay Now"} onClick={()=>{router.push("/event")}} /> */}
                </div>
        </div>}
        {(profileDetails&&!profileComplete)&&<div className='w-[95%] mx-auto h-auto pb-5 box z-20 translate-y-5 min-[768px]:hidden mt-5 p-5 mobileCard flex flex-col justify-center items-center gap-5'>
                <InputField label={"Name"} value={name} setValue={setName}/>
                <InputField label={"Full College Name"} value={college} setValue={setCollege}/>
                <InputField label={"College Roll No."} value={roll} setValue={setRoll}/>
                <select value={year} onChange={(e)=>{setYear(e.target.value)}} className="p-2.5 text-white focus:outline-none bg-slate-600 rounded-[15px] w-[90%]">
                    <option value={"1st Year"}>1st Year</option>
                    <option value={"2nd Year"}>2nd Year</option>
                    <option value={"3rd Year"}>3rd Year</option>
                    <option value={"4th Year"}>4th Year</option>
                </select>
                <InputField label={"Contact"} type="number" value={phone} setValue={setPhone} />
                <InputField label={"Department"} type="text" value={department} setValue={setDepartment} />
                <div className='mt-5'>
                <CyberpunkButton text={"Save Data"} onClick={updateProfileData}/>
                </div>
            </div>}
    </div>
    </>
  )
}

export default Profile
