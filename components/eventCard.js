/* eslint-disable @next/next/no-img-element */
import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'

const EventCard = ({eventName,eventImage,eventTagline,index}) => {


  const [loading, setLoading] = useState(true)
  const router=useRouter()

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div className="card-border cursor-pointer" onClick={()=>{router.push("/events/"+index)}}>
    <div className="card-bg"> 
      <div >
        <div>
          <img src={"assets/images/events/"+eventImage+".jpg"} alt='event' className='h-[220px]'/>
        </div>
      </div>
    </div>
    <div className="mist-container">
      <div className="mist"></div>
    </div>
    <strong id="text-ext">{eventName}</strong>
    <strong id="text-border">{eventName}</strong>
    <p className='text-white -translate-y-12 text-sm gravity tracking-wider font-[50]'>{eventTagline}</p>
  </div>
  )
}

export default EventCard