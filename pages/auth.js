/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState,useEffect } from "react"
import React from 'react'
import { useRouter } from "next/router"
import { auth,firestore } from "../firebase/config"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"; 


const TerminalText=({value,admin})=>{
    return(
        <p className="min-[425px]:text-base text-sm break-words"><span className="Ter_Green">{admin?"Admin":'User'}</span>
    <span className="Ter_Gray">:</span>
    <span className="Ter_Blue">~/Prayukti/Website</span>
    <span className="Ter_Gray mr-1">$</span ><span className='text-white'>{value}</span></p>

    )
}

const Auth = () => {

    const router=useRouter()

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

    const authFunction=()=>{
        if(value1.toLowerCase()=="l")
        {
            signInWithEmailAndPassword(auth,value2,value3).then((u)=>{
                sessionStorage.setItem("user",JSON.stringify(u.user))
                sessionStorage.setItem("token",u.user.refreshToken)
                sessionStorage.setItem("id",u.user.uid)
                router.replace("/events")
            }).catch((e)=>{
                console.log(e.message)
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
                    contact:value9
                })

                router.replace("/events")

            }).catch((e)=>{
                console.log(e.message)
            })

        }
        router.replace("/events")
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


    return (
        <div className='authBg min-h-screen w-full relative flex flex-col justify-center items-center'>
            <div className='absolute top-0 bg-black h-screen w-full bg-opacity-40'>
            </div>
            <div className='bg-black min-[768px]:w-2/3 min-[535px]:w-4/5 w-[95%] h-[650px] bg-opacity-50 z-10 relative'>
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
                <div className='w-full absolute bottom-0 flex flex-row h-[70px]'>
                    <input value={step==1?value1:step==2?value2:step==3?value3:step==4?value4:step==5?value5:step==6?value6:step==7?value7:step==8?value8:step==9?value9:""} onChange={(e)=>{
                        
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
                        }} className='w-[80%] focus:outline-none pl-5' 

                        type={(step==3||step==4)?"password":step==2?"email":step==9?"number":"text"}
                        
                        />
                    <div className='w-[20%] py-2 min[425px]:px-5 px-1 bg-white' onClick={stepFunction}>

                        <img src='assets/images/enter_icon.jpg' alt="enter icon" className=' h-[50px] w-[150px] cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth