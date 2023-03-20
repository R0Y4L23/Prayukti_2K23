/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react"
import React from 'react'
import { useRouter } from "next/router"
import { auth,firestore } from "../firebase/config"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth"
import { doc, setDoc,getDoc } from "firebase/firestore"; 
import {toast} from "react-toastify"
import Head from "next/head"

const provider = new GoogleAuthProvider();

const AlumniAuth = () => {

    const router=useRouter()

      useEffect(()=>{
        let s=sessionStorage.getItem("token")
        if(s)
        {
            toast.error("You have Already Logged In")
            router.replace("/")
        }
      },[])

    const googleSignIn=()=>{
        signInWithPopup(auth, provider)
  .then(async (result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    sessionStorage.setItem("user",JSON.stringify(user))
    sessionStorage.setItem("token",user.refreshToken)
    sessionStorage.setItem("id",user.uid)
    sessionStorage.setItem("isAlumni",JSON.stringify(true))

    const docRef = doc(firestore,"Alumni",user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        toast.success("Alumni Successfully Logged In")
        router.replace("/alumniProfile")
        
    } else {
        await setDoc(docRef,{
            email:user.email,
            name:user.displayName,
            year:"",
            contact:user.phoneNumber,
            events:"",
            payment:""
        })
        toast.success("Alumni Successfully Registered")
        router.replace("/alumniProfile")
    }
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    toast.error(errorMessage)
  });
 }


    return (
        <>
        <Head><title>Alumni Auth</title></Head>
        <div className='authBg min-h-screen w-full relative flex flex-col justify-center items-center'>
            <div className='absolute top-0 bg-black h-screen w-full bg-opacity-40'>
            </div>
           <div className={`authSize bg-black min-[930px]:w-2/3 w-[95%] h-[600px] bg-opacity-50 z-10 flex flex-col justify-center items-center gap-10 grid-cols-2`}>
                <div className="col-span-2">
                    <p className=" text-center text-white text-4xl font-mono glitch">Alumni Login</p>
                </div>   
                <div onClick={googleSignIn} className="w-[300px] flex flex-row rounded-xl min-[650px]:scale-100 min-[424px]:scale-[65%] scale-[55%] cursor-pointer">
                    <div className="w-[20%] bg-white flex flex-row justify-center items-center">
                        <img src="assets/icons/google.png" alt="google" className="w-[50px] m-2"/>
                    </div>
                    <div className="w-[80%] bg-blue-400 flex flex-row items-center justify-center">
                        <p className="text-white text-center text-xl">Sign In With Google</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <p onClick={()=>{router.replace("/auth")}} className=" text-center text-green-500 font-mono cursor-pointer hover:text-green-300 duration-500">Student Registration</p>
                </div>  
            </div>
        </div>
        </>
    )
}

export default AlumniAuth