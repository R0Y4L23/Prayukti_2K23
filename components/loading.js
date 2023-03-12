/* eslint-disable react/jsx-no-undef */
import React,{useRef} from 'react'


const Loading = () => {

    const audioRef=useRef(null)

  return (
    <div className="w-[100%]"> 
    <audio src={"assets/audios/glitch_audio.mp3"} autoPlay ref={audioRef} /> 
    <video
        onClick={()=>{audioRef.current.play()}}
        src={"assets/videos/glitch_effect.mp4"}
        controls={false}
        autoPlay={true}
        muted
    />
    
    </div>
  )
}

export default Loading