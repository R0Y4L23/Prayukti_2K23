/* eslint-disable @next/next/no-img-element */
import React,{useEffect,useState} from 'react'

const EventCard = ({eventName,eventImage,eventTagline}) => {


  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div className="card-border cursor-pointer">
    <div className="card-bg"> 
      <div >
        <div>
          {/* <span className="Loading">Loading Loading Loading Loading</span>
          <span className="Loading">Loading Loading Loading Loading</span>
          <span className="Loading">Loading Loading Loading Loading</span> */}
          <img src={"assets/images/events/"+eventImage+".jpg"} alt='event' className=''/>
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