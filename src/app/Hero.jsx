
import React from 'react'

export default function Hero() {
  return (
    <>
        <div className='bg-[url(/assets/s02.jpg)] bg-center bg-cover h-screen overflow-hidden'>
            <div className='bg-black/50 h-full flex items-center justify-center text-white p-4'>
                <div className=''>
                    <h1 className='text-2xl lg:text-5xl font-bold font-playfair'>Find Your Perfect <br className='block lg:hidden' /> Match With Confidence</h1>
                    <h2 className='mt-4 text-left lg:text-center text-[16px] lg:text-base font-poppins'>Join millions of happy couples who found their soulmate through our trusted platform</h2>
                    <div className='flex gap-4 mt-4 items-center justify-start lg:justify-center'>
                        <button className='bg-red-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded cursor-pointer font-poppins'>Start your journey </button>
                        <button className='bg-red-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded cursor-pointer font-poppins'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
        

    </>
  )
}
