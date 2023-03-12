/* eslint-disable react/jsx-no-undef */
import React, { useRef } from 'react'


const Loading2 = () => {

    const audioRef = useRef(null)

    return (
        <div className="w-[100%]">
            <audio src={"assets/audios/welcome_sound.mp3"} autoPlay ref={audioRef} />
            <video
                onClick={() => { audioRef.current.play() }}
                src={"assets/videos/events_loading.mp4"}
                controls={false}
                autoPlay={true}
                muted
            />

        </div>
    )
}

export default Loading2