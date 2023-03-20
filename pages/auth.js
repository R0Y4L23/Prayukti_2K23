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


const Auth = () => {

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
    toast.success("Please Wait! You are being Logged In.")
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    sessionStorage.setItem("user",JSON.stringify(user))
    sessionStorage.setItem("token",user.refreshToken)
    sessionStorage.setItem("id",user.uid)
    sessionStorage.setItem("isAlumni",JSON.stringify(false))

    const docRef = doc(firestore,"Users",user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        toast.success("Successfully Logged In")
        router.replace("/profile")
        
    } else {
        await setDoc(docRef,{
            email:user.email,

            name:user.displayName,
            college_name:"",
            roll:"",
            year:"",
            contact:user.phoneNumber,
            department:"",
            profile_pic:user.photoURL,

            events:[],

            amount:0,
            slip_number:"",
            paymentMode:"",
            date_and_time:"",
            uniqueID:"",
            enteredBy:"",
            isPaid:false,

            isAdmin:false
        })
        toast.success("Successfully Registered")
        router.replace("/profile")
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
        <Head><title>Auth</title></Head>
        <div className='authBg min-h-screen w-full relative flex flex-col justify-center items-center'>
            <div className='absolute top-0 bg-black h-screen w-full bg-opacity-40'>
            </div>
                <div className="bg-black bg-opacity-60 w-2/3 h-[80vh] flex flex-col justify-center items-center gap-10">
                <p className="text-center text-white glitch min-[475px]:text-4xl text-2xl z-20 -translate-y-1">Student Login</p>
                <div onClick={googleSignIn} className="w-[300px] flex flex-row rounded-xl min-[650px]:scale-100 min-[424px]:scale-[65%] scale-[55%] cursor-pointer">
                    <div className="w-[20%] bg-white flex flex-row justify-center items-center">
                        <img src="assets/icons/google.png" alt="google" className="w-[50px] m-2"/>
                    </div>
                    <div className="w-[80%] bg-blue-400 flex flex-row items-center justify-center">
                        <p className="text-white text-center text-xl">Sign In With Google</p>
                    </div>
                </div>
                <div className="z-20 -translate-y-1">
                    <p onClick={()=>{router.replace("/alumniAuth")}} className=" text-center text-green-500 font-mono cursor-pointer hover:text-green-300 duration-500">Alumni Registration</p>
                </div>  
                </div>
        </div>
        </>
    )
}

export default Auth