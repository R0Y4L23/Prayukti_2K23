import React from 'react'
import Head from 'next/head'

const Prizes = () => {

    const details=[
        {
         "Event Name": "Requizzit",
         "Total Prize Money*": 13000,
         "1st Prize Worth": 5000,
         "2nd Prize  Worth": 4000,
         "3rd Prize Worth": 3000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "Robowar",
         "Total Prize Money*": 31000,
         "1st Prize Worth": 12000,
         "2nd Prize  Worth": 10000,
         "3rd Prize Worth": 8000,
         "4th Prize Worth": 1000,
         "5th Prize Worth": 0
        },
        {
         "Event Name": "Lakshya",
         "Total Prize Money*": 25000,
         "1st Prize Worth": 10000,
         "2nd Prize  Worth": 8000,
         "3rd Prize Worth": 6000,
         "4th Prize Worth": 1000,
         "5th Prize Worth": 0
        },
        {
         "Event Name": "Udaan",
         "Total Prize Money*": 31000,
         "1st Prize Worth": 12000,
         "2nd Prize  Worth": 10000,
         "3rd Prize Worth": 8000,
         "4th Prize Worth": 1000,
         "5th Prize Worth": 0
        },
        {
         "Event Name": "B-Plan",
         "Total Prize Money*": 13000,
         "1st Prize Worth": 5000,
         "2nd Prize  Worth": 4000,
         "3rd Prize Worth": 3000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "House Of Hogwarts",
         "Total Prize Money*": 22000,
         "1st Prize Worth": 8000,
         "2nd Prize  Worth": 7000,
         "3rd Prize Worth": 6000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "Code-Blooded",
         "Total Prize Money*": 13000,
         "1st Prize Worth": 5000,
         "2nd Prize  Worth": 4000,
         "3rd Prize Worth": 3000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "Overnite",
         "Total Prize Money*": 13000,
         "1st Prize Worth": 5000,
         "2nd Prize  Worth": 4000,
         "3rd Prize Worth": 3000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "DE-Movier",
         "Total Prize Money*": 28000,
         "1st Prize Worth": 10000,
         "2nd Prize  Worth": 8000,
         "3rd Prize Worth": 6000,
         "4th Prize Worth": 2000,
         "5th Prize Worth": 2000
        },
        {
         "Event Name": "LA-Photography",
         "Total Prize Money*": 7000,
         "1st Prize Worth": 3000,
         "2nd Prize  Worth": 2000,
         "3rd Prize Worth": 1000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "Pradarshan",
         "Total Prize Money*": 14000,
         "1st Prize Worth": 5000,
         "2nd Prize  Worth": 4000,
         "3rd Prize Worth": 3000,
         "4th Prize Worth": 1000,
         "5th Prize Worth": 1000
        },
        {
         "Event Name": "Crescent",
         "Total Prize Money*": 10000,
         "1st Prize Worth": 4000,
         "2nd Prize  Worth": 3000,
         "3rd Prize Worth": 2000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "Squaroscope",
         "Total Prize Money*": 5700,
         "1st Prize Worth": 2000,
         "2nd Prize  Worth": 1500,
         "3rd Prize Worth": 1000,
         "4th Prize Worth": 700,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "Naturgenix",
         "Total Prize Money*": 7000,
         "1st Prize Worth": 3000,
         "2nd Prize  Worth": 2000,
         "3rd Prize Worth": 1000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "HiTaTHON",
         "Total Prize Money*": 7000,
         "1st Prize Worth": 3000,
         "2nd Prize  Worth": 2000,
         "3rd Prize Worth": 1000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": "See-QL",
         "Total Prize Money*": 7000,
         "1st Prize Worth": 3000,
         "2nd Prize  Worth": 2000,
         "3rd Prize Worth": 1000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        },
        {
         "Event Name": " Valorant ",
         "Total Prize Money*": 22500,
         "1st Prize Worth": 10000,
         "2nd Prize  Worth": 7500,
         "3rd Prize Worth": 5000,
         "4th Prize Worth": 0,
         "5th Prize Worth": 0
        },
        {
         "Event Name": "COD Mobile ",
         "Total Prize Money*": 18000,
         "1st Prize Worth": 8000,
         "2nd Prize  Worth": 6000,
         "3rd Prize Worth": 4000,
         "4th Prize Worth": 0,
         "5th Prize Worth": 0
        },
        {
         "Event Name": "IoT Tech Expo",
         "Total Prize Money*": 10000,
         "1st Prize Worth": 4000,
         "2nd Prize  Worth": 3000,
         "3rd Prize Worth": 2000,
         "4th Prize Worth": 500,
         "5th Prize Worth": 500
        }
       ]

return (

<>

    <Head>
        <title>Prizes</title>
    </Head>
    <div className="slide-in-bck-center relative">
        <div
            className='min-[1690px]:w-[100%] min-[1125px]:w-[150%] min-[845px]:w-[200%] min-[675px]:w-[250%] min-[550px]:w-[300%] min-[482px]:w-[350%] min-[375px]:w-[450%] w-[550%]'>
            <video className="z-0 video" src={"assets/videos/events_background.mp4"} controls={false} autoPlay={true}
                loop muted />
        </div>
        <div className="absolute top-0 left-0 h-[100vh] w-full bg-black opacity-70 z-10">
        </div>
        <div className="absolute top-0 left-0 h-[100vh] w-full z-20">

            <div className="flex flex-col justify-center items-center gap-5">
                <p className='text-3xl glitch text-center text-white font-bold mt-5'>Prizes</p>
                <div className='overflow-y-scroll prizeTable min-[768px]:w-auto min-[768px]:overflow-x-hidden min-[550px]:w-[550px] min-[350px]:w-[350px] w-[300px] overflow-x-scroll'>
                <table className="text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-hidden">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                Event name
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                Total Prize Money
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                1st Prize
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                2nd Prize
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                3rd Prize
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                4th Prize
                            </th>
                            <th scope="col" className="min-[550px]:px-6 px-2 min-[550px]:py-3 py-2">
                                5th Prize
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((item,index)=>{
                            return(
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item['Event Name']}
                            </th>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2 font-semibold">
                            ₹ {item['Total Prize Money*']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2">
                            ₹ {item['1st Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2">
                            ₹ {item['2nd Prize  Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2">
                            ₹ {item['3rd Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2">
                            ₹ {item['4th Prize Worth']}
                            </td>
                            <td className="min-[550px]:px-6 px-2 min-[550px]:py-4 py-2">
                            ₹ {item['5th Prize Worth']}
                            </td>
                        </tr>
                            )

                        })}
                        
                    </tbody>
                </table>
                </div>
                <div className='min-[700px]:px-0 px-5'>
                <p className='text-white text-center text-[15px]'>* Prize Money can be increased depending on the total number of participants in a particular Event.</p>
                <p className='text-white text-center text-[10px] min-[550px]:my-0 my-2'>N. B: The above mention amount is total tentative prize value. This contains Cash Prize, Coupons and Goodies. The committee has every rights to change the amount considering the current situation.</p>
                <p className='text-white text-center text-[12px]'>Above mentioned prizes are valid for Minimum 10 No of Groups participating in the particular events.</p>
                </div> 
            </div>
        </div>
    </div>
</>
)
}

export default Prizes