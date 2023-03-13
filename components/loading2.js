/* eslint-disable react/jsx-no-undef */
import React, { useRef } from 'react'


const Loading2 = () => {

    const audioRef = useRef(null)

    return (
        <div className="min-[1690px]:w-[100%] min-[1125px]:w-[150%] min-[845px]:w-[200%] min-[675px]:w-[250%] min-[675px]:w-[300%] min-[482px]:w-[350%] min-[375px]:w-[450%] w-[550%]">
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