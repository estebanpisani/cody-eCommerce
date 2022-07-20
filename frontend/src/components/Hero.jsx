import React from 'react'
import '../styles/hero.css'


const Hero = () => {

  return (
    <div className='hero-container'>
      <div className="first-container mt-8 relative rounded-lg bg-blue-900 container mx-auto flex flex-col items-end pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
        <div className='text-container'>
          <div className=" w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">The Freedom to Create the Pages You Want</h1>
          </div>
          <div className="flex justify-items-end items-end mb-10 sm:mb-20 pr-16">
            <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero