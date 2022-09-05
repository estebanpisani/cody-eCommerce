import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import codyven from '../media/cody5.png'
import '../styles/hero.css'

// Clases quitadas
// first-container=> pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64

const Hero = () => {
  return (
      <div className="first-container rounded-lg flex flex-col justify-center items-center md:items-end px-12">
        <div className='text-container w-3/4 sm:w-2/4 xl:w-2/5 flex flex-col justify-around'>
          {/* <div className="div-intermedio w-11/12 sm:w-2/3 mb-5 sm:mb-10"> */}
            <h1 className="text-box text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center text-white font-bold leading-tight">Ven a compartir</h1>
            <img className='codyhero' src={codyven} alt="Cody Developer" />
          {/* </div> */}
          {/* <div className="flex justify-items-end items-end mb-10 sm:mb-20"> */}
            <LinkRouter 
            className = "button-hero py-2 px-2 sm:py-3 sm:px-5 bg-white ring-offset-indigo-700 border rounded text-base lg:text-xl break-normal transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white hover:bg-transparent hover:border-white"
            to='/store'
            >
              Visita nuestra tienda <span><ArrowRightAltIcon/></span>
            </LinkRouter>
          {/* </div> */}
        </div>
      </div>

  )
}

export default Hero