"use client"
import React, { useState, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import { UserPlusIcon, ChatBubbleLeftRight } from '@heroicons/react/24/solid';

let profile = [
    {
        id: 1,
        img: "/assets/s07.jpg",
        name: "Aript Sharma",
        title: "Website Developer",
        exp: 20
    },
    {
        id: 2,
        img: "/assets/s08.jpg",
        name: "Madan Singh",
        title: "Software Engineer",
        exp: 25
    },
    {
        id: 3,
        img: "/assets/s09.jpg",
        name: "Sneha Verma",
        title: "UI/UX Designer",
        exp: 18
    },
    {
        id: 4,
        img: "/assets/s10.jpg",
        name: "Rohit Patel",
        title: "Full Stack Developer",
        exp: 22
    },
    {
        id: 5,
        img: "/assets/s10.jpg",
        name: "Kavita Joshi",
        title: "Cloud Solutions Architect",
        exp: 24
    },
];



export default function ShaadiSlider() {
  return (
    <>
    <div className='my-[80px]'>
      <h2 className='mx-auto text-center my-[30px] text-2xl lg:text-5xl font-bold font-playfair text-theme'>Featured Proflie</h2>
    
     <Swiper
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper w-[80%]"
      >
        {profile.map((item) => (
          <SwiperSlide key={item.id} className='p-4'>
            <div>
              <div>
                <Image src={item.img} width={432} height={100} alt='Employee' className='rounded-2xl drop-shadow-[10px_10px_0px_rgba(82,1,11,1)] cursor-default'/>
              </div>
              <div className='mt-[22px] p-2'>
                <h2 className='text-lg hover:text-theme cursor-default'>{item.name}</h2>
                <p className='text-sm mt-2 hover:text-theme cursor-default'>{item.title}</p>
                <p className='text-xs hover:text-theme cursor-default'>{item.exp}+ years experience</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
        {/* how it works */}
      <div className='bg-theme text-white py-[80px] mt-[30px]'>
        <h2 className='mx-auto text-center mb-[50px] text-2xl lg:text-3xl font-bold font-playfair text-white'>How It Works</h2>
        <div className='mx-auto grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div className='flex flex-col justify-center items-center '>
            <div className='flex justify-center items-center bg-white'>
              <UserPlusIcon className="size-8 bg-theme"/>
            </div>
            <h3 className='font-bold font-playfair'>Create Profile</h3>
            <p className='text-center'>Sign up and create your <br/> detailed profile</p>
          </div>
          <div className='flex flex-col justify-center items-center mt-4 '>
            <div className='flex justify-center items-center bg-white'>
              <UserPlusIcon className="size-8 bg-theme"/>
            </div>
            <h3 className='font-bold font-playfair'>Find Matches</h3>
            <p className='text-center'>Browse profiles and <br/> find your perfect match</p>
          </div>
          <div className='flex flex-col justify-center items-center mt-4'>
            <div className='flex justify-center items-center bg-white'>
              {/* <ChatBubbleLeftRight className="size-8 bg-theme"/> */}
            </div>
            <h3 className='font-bold font-playfair'>Connect</h3>
            <p className='text-center'>Start conversation and <br/> meet in person</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
