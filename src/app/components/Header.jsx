"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import * as Icon from "@deemlol/next-icons";
import { Sidebar } from './Sidebar';
import { HomeIcon, InformationCircleIcon, UserGroupIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import AboutUs from '../about-us/page';
export default function Header() {
    let [show, setShow] = useState(false);
    let [scrollState, setScrollState] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
            setScrollState(true);
            } else {
            setScrollState(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event when the component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    let showHide=()=>{
        setShow(!show);
    }
  return (
    <>
            {/* aafter md: */}
        <header className={`lg:flex items-center justify-around p-2 hidden lg:text-[18px] fixed w-full text-white ${scrollState?'backdrop-blur-sm':'backdrop-blur-none'} z-50`}>
            <div>
                <Image src={"/assets/s01.png"} alt="Shaadi Logo" width={70} height={100}/>
            </div>
            <nav>
                <ul className='flex gap-4 font-poppins-200'> 
                    <Link href={'/'} className='cursor-pointer'><span>Home</span></Link>
                    <Link href={'/about-us'} className='cursor-pointer'><span>About Us</span></Link>
                    <Link href={'/members'} className='cursor-pointer'><span>Membership</span></Link>
                    <Link href={'/'} className='cursor-pointer'><span>Sign Up</span></Link>
                    <Link href={'/'} className='cursor-pointer'><span>Sign In</span></Link>
                </ul>
            </nav>
        </header>
            {/* mobli */}
            <header className={`lg:hidden items-center z-50 justify-between p-2 flex lg:text-[18px] fixed w-full text-white transition-all ${scrollState?'backdrop-blur-sm':'backdrop-blur-none'}`}>
              <div>
                <Image src={"/assets/s01.png"} alt="Shaadi Logo" width={50} height={100}/>
              </div>
              <div>
                <Icon.Menu size={36} onClick={showHide}/>
              </div>
            </header>
                <div className={`fixed inset-0 transition-all duration-300 ${show ? 'bg-black/50 backdrop-blur-md ' : 'bg-transparent pointer-events-none'}`}>
                    <div
                        className={`w-[80%] h-full flex flex-col justify-between bg-[#52010b] fixed top-0 right-0 px-4 py-2 transition-transform duration-300 ease-in-out ${
                        show ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className='flex items-center justify-end'>
                            <Icon.XSquare size={36} color='white' onClick={showHide} />
                        </div>

                        {/* login greetings */}
                        <div>
                            <div className="flex items-center space-x-3 p-4">
                                <img src="/assets/me.png" className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="text-white font-semibold">Hello, Puneet!</p>
                                    <p className="text-sm text-gray-300">View Profile</p>
                                </div>
                            </div>

                            {/* <div className="text-center py-4 border-b border-white/20">
                                <p className="text-white text-sm">Welcome Guest</p>
                                <p className="text-white text-xs">Sign up to get the best matches</p>
                            </div> */}
                        </div>

                        <div className='mt-4'>
                            <nav>
                                <ul className='flex flex-col gap-6 px-5 text-white font-poppins-200'> 
                                    <Link href={'/'} className='cursor-pointer'><span className='flex gap-2 items-center'><HomeIcon className="size-4"/> Home</span></Link>
                                    <Link href={'/about-us'} className='cursor-pointer'><span className='flex gap-2 items-center'><InformationCircleIcon className="size-4"/> About Us</span></Link>
                                    <Link href={'/members'} className='cursor-pointer'><span className='flex gap-2 items-center'><UserGroupIcon className="size-4"/> Membership</span></Link>
                                    <Link href={'/'} className='cursor-pointer'><span className='flex gap-2 items-center'><UserPlusIcon className="size-4"/> Sign Up</span></Link>
                                    <Link href={'/'} className='cursor-pointer'><span className='flex gap-2 items-center'><UserIcon className="size-4"/> Sign In</span></Link>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <Image loading='lazy' src={"/assets/lovelycouple.png"} alt="Lovely Couple" width={500} height={500} className='w-full h-auto mt-4 rounded-lg'>

                            </Image>
                        </div>

                        <div>
                            <button className='bg-[#852a30] rounded-2xl p-4 w-full text-white font-poppins-200'>Start Matching</button>
                        </div>
                    </div>
                    </div>

    </>
  )
}
