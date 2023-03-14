/* eslint-disable react/jsx-no-undef */
import React, { useRef } from 'react'


const Loading2 = () => {

    const audioRef = useRef(null)

    return (
        <div className="min-h-screen flex flex-col justify-center items-stretch">
            <audio src={"assets/audios/welcome_sound.mp3"} autoPlay ref={audioRef} />
            <video
                onClick={() => { audioRef.current.play() }}
                src={"assets/videos/events_loading.mp4"}
                controls={false}
                autoPlay={true}
                muted
                className='video'
            />
        </div>
    )
}

export default Loading2