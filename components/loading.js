/* eslint-disable react/jsx-no-undef */
import React,{useRef} from 'react'


const Loading = () => {

    const audioRef=useRef(null)

  return (
    <div className="flex flex-col justify-center items-center w-[100%] min-h-screen"> 
    <audio src={"assets/audios/glitch_audio.mp3"} autoPlay ref={audioRef} /> 
    <video
        onClick={()=>{audioRef.current.play()}}
        src={"assets/videos/glitch_effect.mp4"}
        controls={false}
        autoPlay={true}
        muted
        className='video'
        style={{height:"100%"}}
    />
    
    </div>
  )
}

export default Loading