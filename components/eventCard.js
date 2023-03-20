/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'

const EventCard = ({eventName,eventImage,eventTagline,index}) => {

  const router=useRouter()

 
  const [isAlumni,setIsAlumni]=useState(false)

  useEffect(()=>{
    let a=JSON.parse(sessionStorage.getItem("isAlumni"))
    if(a)
    {
        setIsAlumni(true)
    }
    else
    {
        setIsAlumni(false)
    }

},[])
 

  return (
    <div className="card-border cursor-pointer eventcard relative">
      {eventName=="Pradarshan"&&<img src='assets/icons/free.png' className='absolute left-0 top-0 z-20 w-[100px]' alt='free'/>}
    <div className="card-bg"> 
      <div >
        <div>
          <img src={"assets/images/events/"+eventImage+".jpg"} alt='event' className='h-[220px] w-full' onClick={()=>{router.push("/events/"+index)}}/>
        </div>
      </div>
    </div>
    <div className="mist-container">
      <div className="mist"></div>
    </div>
    <strong id="text-ext">{eventName}</strong>
    <strong id="text-border">{eventName}</strong>
    <p className='text-white -translate-y-16 text-sm gravity tracking-wider font-[50]'>{eventTagline}</p>
    {!isAlumni&&<p  onClick={()=>{router.push("/events/"+index)}} className='text-white -translate-y-[60px] text-sm uppercase border border-white text-center py-1 tracking-wider font-[50]'>View Event</p>}
  </div>
  )
}

export default EventCard