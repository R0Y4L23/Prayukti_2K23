/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'

const Navigation = () => {

    const router=useRouter()

    const [loggedIn,setLoggedIn]=useState(false)

    useEffect(()=>{
      let s=sessionStorage.getItem("token")
      if(s)
      {
          setLoggedIn(true)
      }
  },[])

  return (
    <div className='flex flex-row justify-between items-center z-20 translate-y-1 mt-2 min-[768px]:mx-40 min-[375px]:mx-10 mx-2'>
        <p className='text-white min-[768px]:text-xl text-[15px] cursor-pointer glitch' onClick={()=>{router.back()}}>{"<<"}Back</p>
        <p className='text-white cursor-pointer glitch' onClick={()=>{router.push("/")}}><i className="fa-solid fa-house text-white min-[768px]:text-xl text-[15px] min-[768px]:translate-y-1"></i> HOME</p>
        <p className='text-white min-[768px]:text-xl text-[15px] cursor-pointer glitch' 

        onClick={()=>{
          if(loggedIn)
          {
              sessionStorage.clear()
              router.push("/")
          }
          else
          {
          router.push("/auth") 
          }
        }}
        
        >{loggedIn?"Logout":"Login"} {loggedIn?<i className="fa-solid fa-right-from-bracket min-[768px]:text-xl text-[15px] min-[768px]:translate-y-1"></i>:null}</p>
    </div>
  )
}

export default Navigation