/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router'

const Navigation = () => {

    const router=useRouter()

  return (
    <div className='flex flex-row justify-between items-center z-20 translate-y-1 mt-2 min-[768px]:mx-40 min-[375px]:mx-10 mx-2'>
        <p className='text-white min-[768px]:text-xl text-[15px] cursor-pointer glitch' onClick={()=>{router.back()}}>{"<<"}Back</p>
        <p className='text-white cursor-pointer glitch' onClick={()=>{router.push("/")}}><i className="fa-solid fa-house text-white min-[768px]:text-xl text-[15px] min-[768px]:translate-y-1"></i> HOME</p>
        <p className='text-white min-[768px]:text-xl text-[15px] cursor-pointer glitch' >Next{">>"}</p>
    </div>
  )
}

export default Navigation