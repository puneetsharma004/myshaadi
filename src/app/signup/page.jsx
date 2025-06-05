"use client"
import { useFormik } from 'formik'
import Image from 'next/image'
import React from 'react'

export default function SignUpIn() {

  let formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      city:"",
      state:"",
      zip:"",
    },
    onSubmit: ()=>{console.log(formik.values)},

  })
  return (
    <>
        <div className='bg-theme py-5 min-h-screen flex items-center px-4 sm:px-6'>
          <div className='w-full sm:w-[90%] md:w-[85%] lg:w-[70%] bg-white flex flex-col lg:flex-row items-center justify-evenly gap-4 lg:gap-6 mx-auto mt-[100px] lg:mt-0 rounded-2xl py-6 lg:py-10'>
            <div className='w-full px-4 sm:px-6 md:w-[500px] lg:w-[450px]'>
              <h2 className="text-2xl sm:text-3xl text-theme font-playfair font-semibold mb-2 text-center">Begin Your Forever</h2>
              <p className="text-gray-600 text-[13px] sm:text-[14px] text-center mt-[20px] sm:mt-[30px]">
                Join us in celebrating love — create your wedding profile and take the first step toward your happily ever after.
              </p>
              <Image 
                src="/assets/signup.jpg" 
                alt="Shaadi Logo" 
                width={500} 
                height={100} 
                className='mx-auto my-4 lg:mb-6 w-full sm:w-[90%] md:w-[450px] rounded hidden lg:block' 
              />
            </div>

            <form className="w-full max-w-lg bg-white rounded px-4 sm:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8" onSubmit={formik.handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4 sm:mb-6">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 sm:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Krishna" name='first' onChange={(e)=>{formik.setFieldValue("firstName",e.target.value)}}/>
                  <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Yadav" name='last' onChange={(e)=>{formik.setFieldValue("lasttName",e.target.value)}}/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4 sm:mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="work@example.com" name='first' onChange={(e)=>{formik.setFieldValue("email",e.target.value)}}/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4 sm:mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Password
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" name='password' onChange={(e)=>{formik.setFieldValue("password",e.target.value)}}/>
                  <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
              </div>

              

              <div className="flex flex-wrap -mx-3 mb-4 sm:mb-6">
                <div className="w-full sm:w-1/3 px-3 mb-4 sm:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    City
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" name='city' onChange={(e)=>{formik.setFieldValue("city",e.target.value)}}/>
                </div>
                <div className="w-full sm:w-1/3 px-3 mb-4 sm:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    State
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 sm:py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='state' onChange={(e)=>{formik.setFieldValue("firstName",e.target.value)}}>
                      <option>Rajasthan</option>
                      <option>Banglore</option>
                      <option>Punjab</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/3 px-3 mb-4 sm:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    Zip
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" name='zip' onChange={(e)=>{formik.setFieldValue("zip",e.target.value)}}/>
                </div>
              </div>

              <div className='flex justify-center items-center mt-4 sm:mt-6'>
                <button className='bg-[#52010b] p-2 text-white rounded w-full sm:w-[50%] lg:w-[30%] hover:bg-[#c42e3f] transition-all cursor-pointer' type='submit'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}
