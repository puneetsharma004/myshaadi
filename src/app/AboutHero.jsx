import React from 'react';

export default function AboutHero() {
  return (
    <div className='bg-[url(/assets/s02.jpg)] bg-center bg-cover h-screen overflow-hidden'>
      <div className='bg-black/50 h-full flex items-center justify-center text-white p-4'>
        <div className='text-center max-w-3xl'>
          <h1 className='text-3xl lg:text-5xl font-bold font-playfair leading-tight'>
            Discover the Journey to Your <br className='block lg:hidden' />
            <span className="text-red-400">Happily Ever After</span>
          </h1>

          <h2 className='mt-4 text-[15px] lg:text-base font-poppins'>
            At <strong>MyShadi.com</strong>, we bring hearts together. Join countless happy couples who began their love story right here.
          </h2>

          <div className='flex flex-wrap gap-4 mt-6 justify-center'>
            <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-poppins transition'>
              Start Your Journey
            </button>
            <button className='border border-white text-white px-4 py-2 rounded font-poppins hover:bg-white hover:text-red-500 transition'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
