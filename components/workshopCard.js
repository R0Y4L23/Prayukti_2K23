/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const WorkshopCard = ({name,date,time,image,pdf}) => {
  return (
    <div className="flex justify-center">
  <div
    className="block max-w-sm rounded-lg bg-purple-900 shadow-lg">
      <img
        className="rounded-t-lg h-[200px]"
        src={"assets/workshops/"+image}
        alt="" />
    <div className="p-6">
      <h5
        className="mb-2 min-[1095px]:text-xl text-base font-medium leading-tight text-white">
        {name}
      </h5>
      <p className="min-[1095px]:text-base text-[10px] text-white">
      <i className="fa-solid fa-calendar-days text-xl translate-y-2"></i> {date}
      </p>
      <p className="min-[1095px]:mb-6 mb-2 min-[1095px]:text-base text-[10px] text-white">
      <i className="fa-solid fa-clock text-xl translate-y-2"></i> {time}
      </p>
      <Link href={"/workshops/"+pdf}>
      <button
        type="button"
        className="inline-block rounded bg-blue-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        View Details
      </button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default WorkshopCard