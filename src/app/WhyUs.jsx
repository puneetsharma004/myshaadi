"use client"
import Image from 'next/image'
import React, { useState } from 'react'

let whyData =[
    {
        id:1,
        title:"Verified Profiles Only",
        desc : "Every profile is meticulously verified to ensure authenticity, allowing you to connect with genuine individuals seeking meaningful relationships. Flaticon +5 IconScout +5 DigitalOcean",
        img: "s03.png"
    },
    {
        id:2,
        title:"Intelligent Matchmaking",
        desc : "Our advanced algorithms consider your preferences and values to provide highly compatible match suggestions.",
        img: "s04.png"
    },
    {
        id:3,
        title:"Privacy & Security First",
        desc : "We prioritize your privacy, offering robust security measures and giving you full control over your personal information.",
        img: "s05.png"
    },
    {
        id:4,
        title:"Culturally Rooted, Modern Approach",
        desc : "ShaadiCenter respects traditional values while embracing modern matchmaking methods, catering to diverse cultural backgrounds.",
        img: "s06.png"
    }
]

export default function WhyUs() {

    let [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
        <div className='bg-[url(/assets/s02.jpg)] bg-center bg-cover h-screen'>
            <div className='bg-black/50 h-full flex flex-col gap-5 items-center justify-center text-white p-4'>
                <div className='text-center'>
                    <h1 className='text-2xl lg:text-5xl text-left lg:text-center font-bold font-playfair'>Why Choose Us?</h1>
                    <p className='mt-4 text-left lg:text-center text-[16px] lg:text-base font-poppins'>
                    Discover the unique features that set us apart in the world of matchmaking.
                    </p>
                </div>
            
                {/* here comes the cards for why us section */}
                <div className='mt-[50px]'>
                    <div>
                        <div className='flex gap-4'>
                            {
                                whyData.map((card, index)=>(
                                    <div key={card.id} className='bg-white shadow-2xl rounded-2xl p-4 max-w-[350px] transition-all'>
                                        <div>
                                            <Image className='rounded-2xl' src={`/assets/${card.img}`} alt='Why Image' width={100} height={100}/>
                                        </div>
                                        <div>
                                            <h2 className='text-theme text-[25px] font-bold'>{card.title}</h2>
                                            <p className={`text-theme text-[16px] ${isExpanded?"":"line-clamp-3"}`}>{card.desc}</p>
                                            <button className='text-offWhite bg-theme p-2 text-[14px] rounded-lg' onClick={()=>setIsExpanded(!isExpanded)}>Read More</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
