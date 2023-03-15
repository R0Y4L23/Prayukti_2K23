/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import CyberpunkButton from '../../components/cyberpunkButton'

const EventsPage = () => {

        return (
           <div className='eventsPageBg w-full min-h-screen'>
           <div className='absolute top-0 bg-black h-screen w-full bg-opacity-60'>
            </div>
            <div className='w-[90%] mx-auto min-h-screen z-20 -translate-y-1 flex flex-row'>
                <div className='w-[40%] flex flex-col justify-center items-center min-h-screen gap-5'>
                    <img src='/assets/images/events/code.jpg' alt='event-page' className='mx-auto w-[80%] rounded-[15px]'/>
                    <p className='text-center text-white text-xl underline uppercase'>Co-Ordinators : </p>
                    <div>
                    <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                    <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                    <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                    <p className='text-center text-white text-lg'>Abcdefgh Abcdefgh : 1234567890</p>
                    </div>
                </div>
                <div className='w-[60%] flex flex-col justify-center items-center gap-10'>
                    <p className='text-4xl text-center text-white underline'>Code Blooded:</p>
                    <p className='text-xl text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, excepturi.</p>
                    <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aperiam? Cupiditate quia numquam, placeat itaque distinctio quibusdam ad perspiciatis ab nisi. Tempora, vero sequi nobis accusantium expedita facere. Sequi, fugiat corrupti? Cupiditate corrupti, mollitia animi sint id eum vel harum dolorem quisquam, nobis cumque. Cum, id illo facilis perspiciatis provident, quae, velit nihil voluptates cumque dicta dignissimos vero ex aut. Voluptate totam aliquid soluta? Nostrum harum culpa, officia optio illo eum voluptate tempora quibusdam quo ab, itaque consequuntur recusandae corrupti nobis. Accusantium recusandae optio ipsa modi repellendus eligendi nulla explicabo laboriosam, ea consequuntur cumque. Iure magni, dolorum debitis nam placeat iusto maxime, facere laboriosam, expedita optio sit id aperiam consequatur tenetur distinctio vel ab deleniti perspiciatis qui quia! Magnam eaque quod rem autem assumenda ea quos animi optio, sit cupiditate quas eius nemo recusandae. Deserunt cupiditate dolore nobis molestias repellat possimus quia velit quibusdam mollitia perferendis vel aut eveniet dolorum vitae tempore cum quis, unde ratione? Incidunt quam sint officiis, accusamus, eos ex neque sequi dolorum harum eaque explicabo, voluptates quaerat ratione a quo fugiat magnam illum odio iusto natus. Fugit deleniti culpa harum corporis iure incidunt, magni dolore distinctio esse iste perspiciatis facere error dignissimos dolor atque quod amet!</p>
                    <CyberpunkButton text={"Add Event"}/>

                </div>

            </div>
           </div>
        )
    
}

export default EventsPage