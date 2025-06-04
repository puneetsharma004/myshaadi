import Image from 'next/image'
import React from 'react'

export default function SignUpIn() {
  return (
    <>
        <div className=' bg-theme py-10 h-screen flex items-center'>
          <div className=' w-[70%] bg-white flex flex-row-reverse items-center justify-evenly gap-6 mx-auto mt-10 rounded-2xl py-10'>
            <div className='mx-auto w-[450px]'>
              <h2 className="text-3xl text-theme font-playfair font-semibold mb-2 text-center">Welcome Back</h2>
                <p className="text-gray-600 text-[14px] text-center mt-[30px]">
                Sign in to continue your journey of love — your special moments are just a click away.
                </p>


              <Image src="/assets/signin.jpg" alt="Shaadi Logo" width={500} height={100} className='mx-auto mb-6 w-[450px] rounded' />
            </div>
            <form class="w-full max-w-lg bg-white rounded px-8 pt-6 pb-8 mb-4">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Email
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="work@example.com"/>
                  {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Password
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
                  <p class="text-gray-600 text-xs text-red-600">Forget password</p>
                </div>
              </div>
              <div className='flex justify-center items-center mt-6'>
                <button className='bg-[#52010b] p-2 text-white rounded w-[30%] hover:bg-[#c42e3f] transition-all cursor-pointer'>Submit</button>
              </div>           
            </form>
          </div>
        </div>
    </>
  )
}
