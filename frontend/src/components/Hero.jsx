import React from 'react'
import '../styles/hero.css'
import Video from '../media/video-hero2.mp4'

const Hero = () => {

  return (


    <div className='hero-container'>
      {/* Code block starts */}


      <div className="first-container mt-8 relative rounded-lg bg-blue-900 container mx-auto flex flex-col items-end pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
        <div className='text-container'>
          <div className=" w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">The Freedom to Create the Pages You Want</h1>
          </div>
          <div className="flex justify-items-end items-end mb-10 sm:mb-20 pr-16">
            <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
            {/* <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Learn More</button> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
        <div className="relative sm:w-2/3 w-11/12 ">
          <div>
            {/* <video className='rounded-md' src={Video} autoPlay loop muted playsInline /> */}
            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png" alt="Sample Page" />

          </div>
        </div>
      </div>



    </div >
  )
}

export default Hero