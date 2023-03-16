/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState,useEffect } from "react"
import React from 'react'
import { useRouter } from "next/router"
import { auth,firestore } from "../firebase/config"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"; 

import {toast} from "react-toastify"

import Head from "next/head"


const TerminalText=({value,admin})=>{
    return(
        <p className="min-[425px]:text-base text-sm break-words font-mono"><span className="Ter_Green">{admin?"Admin":'User'}</span>
    <span className="Ter_Gray">:</span>
    <span className="Ter_Blue">~/Prayukti/Website</span>
    <span className="Ter_Gray mr-1">$</span ><span className='text-white'>{value}</span></p>

    )
}

const InputField=({label,value,setValue,type})=>{
    return(
        <div className="flex flex-row justify-center items-center">
            <div>
            <label  className="block mb-2 font-mono font-medium text-white">{label}</label>
            <input value={value} onChange={(e)=>{setValue(e.target.value)}} type={type} className="p-2.5 text-white focus:outline-none bg-slate-600 rounded-[15px] min-[650px]:w-[300px] min-[425px]:w-[200px] w-[150px]" placeholder="Type Here..."/>
            </div>
        </div>
    )
}

const Auth = () => {

    const router=useRouter()

    const [terminalUI,setTerminalUI]=useState(false)
    const [showRegister,setShowRegister]=useState(true)

    const [value1,setValue1]=useState("")
    const [value2,setValue2]=useState("")
    const [value3,setValue3]=useState("")
    const [value4,setValue4]=useState("")
    const [value5,setValue5]=useState("")
    const [value6,setValue6]=useState("")
    const [value7,setValue7]=useState("")
    const [value8,setValue8]=useState("")
    const [value9,setValue9]=useState("")

    const [emailPromt,setEmailPrompt]=useState("Please Enter Your Email")
    const [confirmPasswordPrompt,setConfirmPasswordPrompt]=useState("Please Confirm Your Password")

    const [loading,setLoading]=useState(false)

    const validateEmail=(s)=>{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(s.match(validRegex))
        {
            return true
        }
        else
        {
            return false
        }
    }

    const [step,setStep]=useState(1)

    const setAllDefaults=()=>{
        setStep(1)
        setValue1("")
        setValue2("")
        setValue3("")
        setValue4("")
        setValue5("")
        setValue6("")
        setValue7("")
        setValue8("")
        setValue9("")
        setEmailPrompt("Please Enter Your Email")
        setConfirmPasswordPrompt("Please Confirm Your Password")
    }

    const authFunction=()=>{
        if(value1.toLowerCase()=="l")
        {
            signInWithEmailAndPassword(auth,value2,value3).then((u)=>{
                sessionStorage.setItem("user",JSON.stringify(u.user))
                sessionStorage.setItem("token",u.user.refreshToken)
                sessionStorage.setItem("id",u.user.uid)
                toast.success("Successfully Logged In")
                router.replace("/")
            }).catch((e)=>{
                
                console.log(e.message)
                toast.error(e.message)
                setAllDefaults()
            })
        }
        else
        {
            createUserWithEmailAndPassword(auth,value2,value3).then(async (u)=>{

                sessionStorage.setItem("user",JSON.stringify(u.user))
                sessionStorage.setItem("token",u.user.refreshToken)
                sessionStorage.setItem("id",u.user.uid)

                await setDoc(doc(firestore,"Users",u.user.uid),{
                    email:value2,
                    name:value5,
                    college_name:value6,
                    roll:value7,
                    year:value8,
                    contact:value9,
                    events:[],
                    payment:""
                })
                toast.success("Successfully Registered")

                router.replace("/")

            }).catch((e)=>{
                console.log(e.message)
                toast.error(e.message)
                setAllDefaults()
            })

        }

    }

    const stepFunction=()=>{
        if(step>1)
        {
            if(value1.toLowerCase()=="l")
            {
                if(step==2)
                {
                    if(!validateEmail(value2))
                    {
                        setEmailPrompt("Please Enter Valid Email")
                        setValue2("")
                    }
                    else
                    {
                        setStep(step+1)
                    }
                }
                else if(step==3)
                {
                    authFunction()
                }
                else
                {
                    setStep(step+1)
                }
            }
            else
            {
                if(step==2)
                {
                    if(!validateEmail(value2))
                    {
                        setEmailPrompt("Please Enter Valid Email")
                        setValue2("")
                    }
                    else
                    {
                        setStep(step+1)
                    }
                }
                else if(step==4)
                {
                    if(value3==value4)
                    {
                        setStep(step+1)
                    }
                    else
                    {
                        setConfirmPasswordPrompt("Password is not equal to Confirm Password. Please Enter Correctly.")
                        setValue4("")
                    }
                }
                else if(step==9)
                {
                    authFunction()
                }
                else
                {
                    setStep(step+1)
                }
            }
        }
        else
        {
            setStep(step+1)
        }
    }

    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === 'Enter') {
            event.preventDefault();
            stepFunction()
          }
        };
        document.addEventListener('keydown', keyDownHandler);
      }, []);

      useEffect(()=>{
        let s=sessionStorage.getItem("token")
        if(s)
        {
            toast.error("You have Already Logged In")
            router.replace("/")
        }
      },[])


      const submit=()=>{
        setLoading(true)
        if(showRegister)
        {
            if(!(value2&&value3&&value4&&value5&&value6&&value7&&value8&&value9))
            {
                setLoading(false)
                toast.error("Please Complete The Form")
                return
            }

            if(!validateEmail(value2))
            {setLoading(false)
                toast.error("Please Enter Valid Email")
                return
            }

            if(value3.length<8)
            {setLoading(false)
                toast.error("Password must contain minimum 8 characters")
                return
            }

            if(value3!=value4)
            {setLoading(false)
                toast.error("Password is not equal to Confirm Password")
                return
            }

            if(isNaN(value9)||value9.length!=10)
            {setLoading(false)
                toast.error("Please Enter Valid Mobile Number")
                return
            }

            createUserWithEmailAndPassword(auth,value2,value3).then(async (u)=>{

                sessionStorage.setItem("user",JSON.stringify(u.user))
                sessionStorage.setItem("token",u.user.refreshToken)
                sessionStorage.setItem("id",u.user.uid)

                await setDoc(doc(firestore,"Users",u.user.uid),{
                    email:value2,
                    name:value5,
                    college_name:value6,
                    roll:value7,
                    year:value8,
                    contact:value9,
                    events:[],
                    payment:""
                })
                toast.success("Successfully Registered")
                setLoading(false)
                router.replace("/")
            }).catch((e)=>{
                console.log(e.message)
                toast.error(e.message)
                setLoading(false)
                setAllDefaults()

            })

        }
        else
        {
            if(!(value2&&value3))
            {
                setLoading(false)
                toast.error("Please Complete The Form")
                return
            }

            if(!validateEmail(value2))
            {
                setLoading(false)
                toast.error("Please Enter Valid Email")
                return
            }

            if(value3.length<8)
            {
                setLoading(false)
                toast.error("Password must contain minimum 8 characters")
                return
            }

             signInWithEmailAndPassword(auth,value2,value3).then((u)=>{
                sessionStorage.setItem("user",JSON.stringify(u.user))
                sessionStorage.setItem("token",u.user.refreshToken)
                sessionStorage.setItem("id",u.user.uid)
                toast.success("Successfully Logged In")
                setLoading(false)
                router.replace("/")
            }).catch((e)=>{
                
                console.log(e.message)
                toast.error(e.message)
                setLoading(false)
                setAllDefaults()
            })
        }
      }


    return (
        <>
        <Head><title>Auth</title></Head>
        
        <div className='authBg min-h-screen w-full relative flex flex-col justify-center items-center'>
            <div className='absolute top-0 bg-black h-screen w-full bg-opacity-40'>
            </div>
            {terminalUI&&<div className='authSize bg-black min-[768px]:w-2/3 min-[535px]:w-4/5 w-[95%] h-[550px] bg-opacity-50 z-10 relative -mt-10'>
                <TerminalText admin={true} value={"Press R to Register or Press L to Login"}/>
                <TerminalText admin={false} value={value1}/>
                {step>=2&&<TerminalText admin={true} value={emailPromt}/>}
                {step>=2&&<TerminalText admin={false} value={value2}/>}
                {step>=3&&<TerminalText admin={true} value={"Please Enter Your Password"}/>}
                {step>=3&&<TerminalText admin={false} value={"*".repeat(value3.length)}/>}
                {step>=4&&<TerminalText admin={true} value={confirmPasswordPrompt}/>}
                {step>=4&&<TerminalText admin={false} value={"*".repeat(value4.length)}/>}
                {step>=5&&<TerminalText admin={true} value={"Please Enter Your Name"}/>}
                {step>=5&&<TerminalText admin={false} value={value5}/>}
                {step>=6&&<TerminalText admin={true} value={"Please Enter Your College Name"}/>}
                {step>=6&&<TerminalText admin={false} value={value6}/>}
                {step>=7&&<TerminalText admin={true} value={"Please Enter Your College Roll Number"}/>}
                {step>=7&&<TerminalText admin={false} value={value7}/>}
                {step>=8&&<TerminalText admin={true} value={"Please Enter Your Year [1st/2nd/3rd/4th]"}/>}
                {step>=8&&<TerminalText admin={false} value={value8}/>}
                {step>=9&&<TerminalText admin={true} value={"Please Enter Your Contact Number"}/>}
                {step>=9&&<TerminalText admin={false} value={value9}/>}
                <div className='w-full absolute bottom-0 flex flex-row h-[50px]'>
                    <input placeholder="Type Here..." value={step==1?value1:step==2?value2:step==3?value3:step==4?value4:step==5?value5:step==6?value6:step==7?value7:step==8?value8:step==9?value9:""} onChange={(e)=>{
                        
                        if(step==1&&(e.target.value.toLowerCase()=="l"||e.target.value.toLowerCase()=="r"||e.target.value.toLowerCase()=="")&&e.target.value.length<=1)
                        {
                            setValue1(e.target.value)
                        }
                        else if(step==2)
                        {
                            setValue2(e.target.value)
                        }
                        else if(step==3)
                        {
                            setValue3(e.target.value)
                        }
                        else if(step==4)
                        {
                            setValue4(e.target.value)
                        }
                        else if(step==5)
                        {
                            setValue5(e.target.value)
                        }
                        else if(step==6)
                        {
                            setValue6(e.target.value)
                        }
                        else if(step==7)
                        {
                            setValue7(e.target.value)
                        }
                        else if(step==8)
                        {
                            setValue8(e.target.value)
                        }
                        else if(step==9&&e.target.value.length<=10&&!isNaN(e.target.value))
                        {
                            setValue9(e.target.value)
                        }
                        }} className='min-[1150px]:w-[70%] w-[40%] focus:outline-none pl-5' 

                        type={(step==3||step==4)?"password":step==2?"email":step==9?"number":"text"}
                        
                        />
                    <div className='min-[1150px]:w-[10%] w-[20%] py-2 min[425px]:px-5 px-1 bg-white flex flex-col justify-center items-center' onClick={stepFunction}>

                        <p className="border border-black px-3 py-1 cursor-pointer min-[425px]:scale-100 scale-75">ENTER</p>
                    </div>
                    <div className='min-[1150px]:w-[10%] w-[20%] py-2 min[425px]:px-5 px-1 bg-white flex flex-col justify-center items-center'>

                    <p className="border border-black px-3 py-1 cursor-pointer min-[425px]:scale-100 scale-75" onClick={()=>{if(step>=2)setStep(step-1)}}>BACK</p>
                    </div>
                    <div className='min-[1150px]:w-[10%] w-[20%] py-2 min[425px]:px-5 px-1 bg-white flex flex-col justify-center items-center'>

                    <p className="border border-black px-3 py-1 cursor-pointer min-[425px]:scale-100 scale-75" onClick={()=>{setTerminalUI(!terminalUI)}}>CLOSE</p>
                    </div>
                </div>
            </div>}
            {!terminalUI&&<div className={`authSize bg-black min-[930px]:w-2/3 w-[95%] h-[600px] bg-opacity-50 z-10 relative ${showRegister?"grid":"flex flex-col justify-center items-center gap-5"} grid-cols-2`}>
                <div className="col-span-2">
                    <p className=" text-center text-white text-4xl font-mono">{showRegister?"Register":"Login"}</p>
                </div>   
                <InputField label={"Email"} value={value2} setValue={setValue2}/>
                <InputField label={"Password"} value={value3} setValue={setValue3} type={"password"}/>
                {showRegister&&<><InputField label={"Confirm Password"} value={value4} setValue={setValue4} type={"password"}/>
                <InputField label={"Name"} value={value5} setValue={setValue5}/>
                <InputField label={"College"} value={value6} setValue={setValue6}/>
                <InputField label={"College Roll No."} value={value7} setValue={setValue7}/>
                <InputField label={"Year"} value={value8} setValue={setValue8}/>
                <InputField label={"Contact"} value={value9} setValue={setValue9} type={"number"}/></>}
                <div className="col-span-2">
                    <p className={`text-center text-white text-2xl font-mono border-white border ${showRegister?"w-1/2":"w-[200px]"} mx-auto mt-5 cursor-pointer`} onClick={submit}>{loading?"Loading...":"Submit"}</p>
                </div>  
                <div className="col-span-2">
                    <p onClick={()=>{setShowRegister(!showRegister)}} className=" text-center text-white font-mono">{showRegister?"Already Have An Account?":"No Account?"} <span className=" text-violet-600 cursor-pointer">{showRegister?"Login":"Register"}</span></p>
                </div> 
                <div className="col-span-2">
                    <p onClick={()=>{setTerminalUI(!terminalUI)}} className=" text-center text-cyan-500 font-mono">Show Terminal UI</p>
                </div>  




                </div>}
        </div>
        </>
    )
}

export default Auth