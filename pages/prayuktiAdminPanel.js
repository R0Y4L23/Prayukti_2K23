/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect, Suspense} from 'react'
import {toast} from "react-toastify"
import { auth,firestore } from "../firebase/config"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth"
import { doc, getDocs,query,collection,where,getDoc,updateDoc, setDoc } from "firebase/firestore"; 
import {useRouter} from 'next/router';

const provider = new GoogleAuthProvider();

const Admin = () => {


    const events=[

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


    const router=useRouter()

    const [adminLoggedIn,setAdminLoggedIn]=useState(false)
    const [search,setSearch]=useState("")
    const [slipNumber,setSlipNumber]=useState("")
    const [paymentMode,setPaymentMode]=useState("online")
    const [profileDetails,setProfileDetails]=useState(null)
    const [uid,setUId]=useState(null)
    const [enteredBy,setEnteredBy]=useState(null)

    const [eventToBeAdded,setEventToBeAdded]=useState(0)

    const setAllDefaults=()=>{
        setSearch("")
        setSlipNumber("")
        setPaymentMode("online")
        setProfileDetails(null)
        setUId(null)
    }

    const searchFunction=async ()=>{


    const q = query(collection(firestore, "Users"), where("email", "==", search));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
 // console.log(doc.id, " => ", doc.data());
  setUId(doc.id)
  setProfileDetails(doc.data())
});
    }


    const googleSignIn=()=>{
        signInWithPopup(auth, provider)
  .then(async (result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const docRef = doc(firestore,"Users",user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        if(docSnap.data().isAdmin)
        {
            setAdminLoggedIn(true)
            setEnteredBy({name:docSnap.data().name,email:docSnap.data().email,id:docSnap.id})
        }
        else
        {
            toast.error("Unauthorized Access")
            router.replace("/")
        }
    } else {
        toast.error("Unauthorized Access")
        router.replace("/")
    }
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = GoogleAuthProvider.credentialFromError(error);
    toast.error(errorMessage)
  });
 }

 const getUniqueId=async ()=>{
    var hid=""
    do {
        const randomNumber = Math.floor(Math.random() * 9999) + 1;
        const paddedNumber = randomNumber.toString().padStart(4, '0');
        hid="HITPR00"+paddedNumber
        let idArr=await getDoc(doc(firestore,"Paid",hid))
       if(!idArr.exists())
       {
        break;
       }
    } while (true);
    return hid
 }


 const payFunction=async ()=>{
    if(!slipNumber)
    {
        toast.error("Enter Slip Number")
        return
    }


    let h=await getUniqueId()
    const now = new Date();
    const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const dateTime = `${date} ${time}`;
    await updateDoc(doc(firestore,"Users",uid),{
       amount:arrayIncludes(profileDetails.events,10)?(profileDetails.events.length-1)*100+600:profileDetails.events.length*100+600,
       date_and_time:dateTime,
       enteredBy:enteredBy,
       isPaid:true,
       paymentMode:paymentMode,
       slip_number:slipNumber,
       uniqueID:h
    }).then(async ()=>{
        await setDoc(doc(firestore,"Paid",h),{
            id:uid,
            name:profileDetails.name,
            email:profileDetails.email,
            events:profileDetails.events,
            amount:arrayIncludes(profileDetails.events,10)?(profileDetails.events.length-1)*100+600:profileDetails.events.length*100+600,
            date_and_time:dateTime,
            enteredBy:enteredBy,
            isPaid:true,
            paymentMode:paymentMode,
            slip_number:slipNumber,
            uniqueID:h
        })
        setAllDefaults()
        toast.success("Payment Complete")
    })
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

const addEvent=async ()=>{
        let e=profileDetails.events
        e.push({"index":eventToBeAdded,"name":events[eventToBeAdded][0]})
        await updateDoc(doc(firestore,"Users",uid),{
            events:e
        })
        setEventToBeAdded(0)
        toast.success("Successfully Added An Event")
}

  return (
    <div className='flex flex-col justify-center items-center'>
        {!adminLoggedIn&&<div onClick={googleSignIn} className="w-[300px] flex flex-row rounded-xl min-[650px]:scale-100 min-[424px]:scale-[65%] scale-[55%] cursor-pointer">
            <div className="w-[20%] bg-white flex flex-row justify-center items-center">
                <img src="assets/icons/google.png" alt="google" className="w-[50px] m-2"/>
            </div>
            <div className="w-[80%] bg-blue-400 flex flex-row items-center justify-center">
                <p className="text-white text-center text-xl">Sign In With Google</p>
            </div>
        </div>}

        {adminLoggedIn&&<div>
            <div><input value={search} placeholder="search" className='p-2' onChange={(e)=>{setSearch(e.target.value)}}/><button className='bg-white ml-2' onClick={searchFunction}>Search</button></div> 
            {profileDetails?
                <div className='text-white flex flex-col'>
                    <p>{profileDetails.email}</p>
                    <p>{profileDetails.name}</p>
                    <p>{profileDetails.roll}</p>
                    <p>{profileDetails.year}</p>
                    <p>{profileDetails.contact}</p>
                    <p>{profileDetails.college_name}</p>
                    <p>{profileDetails.department}</p>
                    <p>Events :</p>
                    {profileDetails.events.map((item,index)=>{
                        return(
                            <p className='text-green-500' key={index}>{item.name}</p>
                        )
                    })}
                    <div className='flex flex-row justify-center gap-10'>
                        <select className='text-black' value={eventToBeAdded} onChange={(e)=>{setEventToBeAdded(e.target.value)}}>
                            {events.map((item,index)=>{
                                return(
                                    <option className='text-black' key={index} value={index}>{item[0]}</option>
                                )
                            })}
                        </select>
                        <button className='ml-2 text-black bg-white'  onClick={addEvent}>Add Event</button>
                    </div>
                    {!profileDetails.isPaid?<><p className='mt-5'>Amount To Pay:{arrayIncludes(profileDetails.events,10)?(profileDetails.events.length-1)*100+600:profileDetails.events.length*100+600}</p>
                    <input value={slipNumber} placeholder="Slip Number" className='p-2 my-2 text-black' onChange={(e)=>{setSlipNumber(e.target.value)}}/>
                    <select value={paymentMode} className="text-black my-2" onChange={(e)=>{setPaymentMode(e.target.value)}}>
                        <option value={"online"}>Online</option>
                        <option value={"cash"}>Cash</option>
                    </select>
                    <button className='bg-white ml-2 my-2 text-black' onClick={payFunction}>Pay</button></>:
                    <div className='border border-white p-1 rounded-md'>
                    <p className='text-white text-center'>Already Registered</p>
                    <p className='text-white text-center'>Slip Number : {profileDetails.slip_number} || Unique ID : {profileDetails.uniqueID}</p>
                    </div>}
                </div>
                :
                <p className='text-white text-center'>No Details Found</p>
            }  
        </div>}
    </div>
  )
}

export default Admin