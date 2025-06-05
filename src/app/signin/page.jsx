"use client"
import { useFormik } from 'formik'
import Image from 'next/image'
import React from 'react'
import *as Yup from 'yup'

export default function SignUpIn() {
  let formik  = useFormik({
    initialValues:{
      email:"",
      password:"",
      remenberMe:""
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password required'),
    }),
    onSubmit:()=>{console.log(formik.values)}
  })

  return (
    <>
        <div className='bg-theme py-5 min-h-screen flex items-center px-4 sm:px-6'>
          <div className='w-full sm:w-[90%] md:w-[85%] lg:w-[70%] bg-white flex flex-col-reverse lg:flex-row-reverse items-center justify-evenly gap-4 lg:gap-6 mx-auto mt-[100px] lg:mt-0 rounded-2xl py-6 lg:py-10'>
            <div className='w-full px-4 sm:px-6 md:w-[500px] lg:w-[450px]'>
              <h2 className="text-2xl sm:text-3xl text-theme font-playfair font-semibold mb-2 text-center">Welcome Back</h2>
              <p className="text-gray-600 text-[13px] sm:text-[14px] text-center mt-[20px] sm:mt-[30px]">
                Sign in to continue your journey of love — your special moments are just a click away.
              </p>
              <Image 
                src="/assets/signin.jpg" 
                alt="Shaadi Logo" 
                width={500} 
                height={100} 
                className='mx-auto my-4 lg:mb-6 w-full sm:w-[90%] md:w-[450px] rounded' 
              />
            </div>

            <form className="w-full max-w-lg bg-white rounded px-4 sm:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8" onSubmit={formik.handleSubmit}>
              <h2 className="text-2xl sm:text-3xl text-theme font-playfair font-semibold mb-2 text-center">Your perfect match is just a heartbeat away.</h2>
              <p className="text-gray-600 text-[13px] sm:text-[14px] text-center mt-[20px] mb-[50px] sm:mt-[30px]">
                Join us in celebrating love — create your wedding profile and take the first step toward your happily ever after.
              </p>
              
              <div className="flex flex-wrap -mx-3 mb-4 sm:mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="email" 
                    type="email" 
                    placeholder="work@example.com"
                    onChange={(e)=>{formik.setFieldValue("email",e.target.value)}}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
        <p className="text-red-500 text-xs italic px-3">{formik.errors.email}</p>
      )}
              </div>

              <div className="flex flex-wrap -mx-3 mb-4 sm:mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="password" 
                    type="password" 
                    placeholder="******************"
                    onChange={(e)=>{formik.setFieldValue("password", e.target.value)}}
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
        <p className="text-red-500 text-xs italic px-3">{formik.errors.password}</p>
      )}
              </div>
                  

              <div className='flex gap-2 text-[13px] sm:text-[14px] justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  <input type='checkbox' className='cursor-pointer' id="remember" onChange={(e)=>{formik.setFieldValue("remenberMe", e.target.checked)}}/>
                <label htmlFor="remember">Remember Me</label>
                </div>

                <p className="text-xs text-red-600 cursor-pointer hover:text-red-700">Forget password</p>
              </div>

              <div className='flex justify-center items-center mt-4 sm:mt-6'>
                <button className='bg-[#52010b] p-2 text-white rounded w-full sm:w-[50%] lg:w-[30%] hover:bg-[#c42e3f] transition-all cursor-pointer'>
                  Submit
                </button>
              </div>           
            </form>
          </div>
        </div>
    </>
  )
}
