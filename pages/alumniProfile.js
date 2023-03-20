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

const InputField=({label,value,setValue,type})=>{
    return(
        <div className="flex flex-row justify-center items-center">
            <input value={value} onChange={(e)=>{setValue(e.target.value)}} type={type} className="p-2.5 text-white focus:outline-none bg-slate-600 rounded-[15px] w-[90%]" placeholder={label}/>
        </div>
    )
}


const AlumniProfile = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const router=useRouter()

    const [profileDetails,setProfileDetails]=useState(null)
    const [uid,setUid]=useState("")
    const [profileComplete,setProfileComplete]=useState(false)
    const [file,setFile]=useState(null)
    const [name,setName]=useState("")
    const [phone,setPhone]=useState(0)
    const [year,setYear]=useState("")

    const [packageOfAlumni,setPackageOfAlumni]=useState("")

    useEffect(()=>{
        let u=sessionStorage.getItem("id")
        if(u)
        {
            setUid(u)
            onSnapshot(doc(firestore, "Alumni", u), (doc) => {
            setProfileDetails(doc.data())
            setName(doc.data().name)
            setYear(doc.data().year)
            setPhone(doc.data().contact)
            if(!(doc.data().contact&&doc.data().year&&doc.data().name))
            {
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
            router.replace("/alumniAuth")
        }
    },[])

    const register=async ()=>{
        const storageRef = ref(storage, profileDetails.name+"_file_Alumni");
        uploadBytes(storageRef, file).then((snapshot) => {
        //console.log('Uploaded a blob or file!',snapshot);
        getDownloadURL(storageRef).then(async (url)=>{
            await updateDoc(doc(firestore,"Alumni",uid),{
                events:packageOfAlumni,
                payment:url
            })
            toast.success("You Have Successfully Registered")
        })
        });
    }

   
    const updateProfileData=async ()=>{

        if(name&&year&&phone)
        {
        await updateDoc(doc(firestore,"Alumni",uid),{
            name:name,
            year:year,
            contact:phone,
        })
        toast.success("Profile Successfully Updated")
    }
    else
    {
        toast.error("Please Fill All The Details")
    }
    }

  return (
    <>
    <Head>
        <title>Alumni Profile</title>
    </Head>
    <div className='profilePageBg w-full min-h-screen'>
        <div className='absolute top-0 bg-black h-screen w-full bg-opacity-60'>
        </div>
        <div className='w-full h-[500px] min-[800px]:flex flex-row hidden justify-evenly items-center z-20 translate-y-10 mt-12'>
            {(profileDetails&&profileComplete)&&
            <div  className='w-[30%] h-full flex flex-col justify-center items-center relative px-5 gap-5 box'>
                <img src='assets/images/avatar.jpg' alt='avatar' className='w-[160px] h-[160px] rounded-[80px]'/>
                <div className='mb-10 mt-4' >
                    <p className='text-3xl font-semibold text-white text-center glitch'>{profileDetails.name}</p>
                    <p className='uppercase tracking-[10px] text-white text-center'>Alumni Of HIT</p>
                    <p className=' text-white text-center gravity mt-3'>-{profileDetails.email}</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-14'>
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
            {(profileDetails&&!profileComplete)&&
            <div className='w-[30%] h-full flex flex-col justify-center items-center relative px-5 gap-5 box'>
                <p className='text-white text-xl glitch text-center'>Please Complete Your Profile</p>
                <InputField label={"Name"} value={name} setValue={setName}/>
                <InputField label={"Year Of Passing"} value={year} setValue={setYear}/>
                <InputField label={"Contact Number"} type="number" value={phone} setValue={setPhone} />
                <CyberpunkButton text={"Save Data"} onClick={updateProfileData}/>
            </div>}

            <div className='w-[30%] h-full bg-white box flex flex-col justify-center items-center'>
                <img src='assets/images/qr.png' className='w-[550px] h-[550px]' alt='qr'/>
            </div>

            {profileDetails&&<div className='w-[30%] box flex flex-col justify-center px-5 gap-2 h-full'>
                <p className='text-white text-xl glitch text-center'>Select Package</p>
                {!profileDetails.events&&<select value={packageOfAlumni} className=" focus:outline-none h-[40px] rounded-xl pl-2.5 font-mono mt-10 mb-2" onChange={(e)=>{setPackageOfAlumni(e.target.value)}}>
                    <option value={"alone"}>Alone - ₹2000/-</option>
                    <option value={"family"}>With Family - ₹4000/-</option>
                 </select>}
                 {profileDetails.events&&<p className='text-lg font-mono text-white'>Package Selected - {profileDetails.events}</p>}
                <hr/>
                
                {(profileDetails&&!profileDetails.events)&&<p className="text-xl font-mono text-white">Total - ₹{packageOfAlumni=="alone"?2000:packageOfAlumni=="family"?4000:0}/-</p>}
                {(profileDetails&&profileDetails.events)&&<p className='text-xl font-mono text-white'>You Paid - ₹{profileDetails.events=="alone"?2000:4000}/-</p>}
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
            {(profileDetails&&profileComplete)&&
            <div  className='w-[90%] h-[540px] flex flex-col justify-center items-center relative px-5 gap-5 box'>
                <img src='assets/images/avatar.jpg' alt='avatar' className='w-[160px] h-[160px] rounded-[80px]'/>
                <div className='mb-10 mt-4' >
                    <p className='text-3xl font-semibold text-white text-center glitch'>{profileDetails.name}</p>
                    <p className='uppercase tracking-[10px] text-white text-center'>Alumni Of HIT</p>
                    <p className=' text-white text-center gravity mt-3'>-{profileDetails.email}</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-14'>
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
            {(profileDetails&&!profileComplete)&&
            <div className='w-[90%] h-[540px] flex flex-col justify-center items-center relative px-5 gap-5 box'>
                <p className='text-white text-xl glitch text-center'>Please Complete Your Profile</p>
                <InputField label={"Name"} value={name} setValue={setName}/>
                <InputField label={"Year Of Passing"} value={year} setValue={setYear}/>
                <InputField label={"Contact Number"} type="number" value={phone} setValue={setPhone} />
                <CyberpunkButton text={"Save Data"} onClick={updateProfileData}/>
            </div>}
            </TabPanel>
            <TabPanel>
            <div className='w-[90%] bg-white box flex flex-col justify-center items-center h-[450px] mt-5 mx-auto z-20 translate-y-0'>
                <img src='assets/images/qr.png' className='w-[550px] h-[550px]' alt='qr'/>
            </div>
            </TabPanel>
            <TabPanel>  
            {profileDetails&&<div className='w-[90%] box flex flex-col justify-center px-5 gap-2 h-[540px]'>
                <p className='text-white text-xl glitch text-center'>Select Package</p>
                {!profileDetails.events&&<select value={packageOfAlumni} className=" focus:outline-none h-[40px] rounded-xl pl-2.5 font-mono mt-10 mb-2" onChange={(e)=>{setPackageOfAlumni(e.target.value)}}>
                    <option value={"alone"}>Alone - ₹2000/-</option>
                    <option value={"family"}>With Family - ₹4000/-</option>
                 </select>}
                 {profileDetails.events&&<p className='text-lg font-mono text-white'>Package Selected - {profileDetails.events}</p>}
                <hr/>
                
                {(profileDetails&&!profileDetails.events)&&<p className="text-xl font-mono text-white">Total - ₹{packageOfAlumni=="alone"?2000:packageOfAlumni=="family"?4000:0}/-</p>}
                {(profileDetails&&profileDetails.events)&&<p className='text-xl font-mono text-white'>You Paid - ₹{profileDetails.events=="alone"?2000:4000}/-</p>}
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

export default AlumniProfile
