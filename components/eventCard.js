/* eslint-disable @next/next/no-img-element */
import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import {toast} from "react-toastify"

import { firestore } from '../firebase/config'
import {doc,onSnapshot,updateDoc} from "firebase/firestore"

const EventCard = ({eventName,eventImage,eventTagline,index}) => {

  const router=useRouter()

  const [loggedIn,setLoggedIn]=useState(false)
  const [eventRegistered,setEventRegistered]=useState([])
  const [isPaid,setIsPaid]=useState(false)
  const [uid,setUid]=useState("")

  useEffect(()=>{
    let s=sessionStorage.getItem("token")
    if(s)
    {
        setLoggedIn(true)
        let u=sessionStorage.getItem("id")
        setUid(u)
        onSnapshot(doc(firestore, "Users", u), (doc) => {
            console.log(doc.data())
            setEventRegistered(doc.data().events) 
            if(doc.data().payment.length>0)
            {
                setIsPaid(true)
            }            
        });
    }
  },[])

  const addEvent=async ()=>{
    console.log("Adding")
    let e=eventRegistered
    e.push(index)
    setEventRegistered(e)
    await updateDoc(doc(firestore,"Users",uid),{
        events:e
    })
    toast.success("Successfully Added An Event")
}

const removeEvent=async ()=>{
    console.log("Removing")
    let e=eventRegistered
    let a=[]
    for(let i=0;i<e.length;i++)
    {
        if(e[i]!=index)
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

 

  return (
    <div className="card-border cursor-pointer eventcard">
    <div className="card-bg"> 
      <div >
        <div>
          <img src={"assets/images/events/"+eventImage+".jpg"} alt='event' className='h-[220px]' onClick={()=>{router.push("/events/"+index)}}/>
        </div>
      </div>
    </div>
    <div className="mist-container">
      <div className="mist"></div>
    </div>
    <strong id="text-ext">{eventName}</strong>
    <strong id="text-border">{eventName}</strong>
    <p className='text-white -translate-y-16 text-sm gravity tracking-wider font-[50]'>{eventTagline}</p>
    <p className='text-white -translate-y-[60px] text-sm uppercase border border-white text-center py-1 tracking-wider font-[50]' onClick={()=>{

      if(!loggedIn)
      {
        toast.error("Please Login First")
        router.push("/auth")
      }
      else
      {
        if(isPaid)
        {
          toast.error("You have Already Registered for the Events")
        }
        else
        {
          if(eventRegistered.includes(index))
          {
            removeEvent()
          }
          else
          {
            addEvent()
          }
        }
      }

    }}>{loggedIn?isPaid?"Registered":eventRegistered.includes(index)?"Remove Event":"Add Event":"Please Login To Add"}</p>
  </div>
  )
}

export default EventCard