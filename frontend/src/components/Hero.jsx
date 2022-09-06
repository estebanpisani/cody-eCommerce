import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import codyven from '../media/cody5.png'
import '../styles/hero.css'

const Hero = () => {
  return (
      <div className="first-container rounded-lg flex flex-col justify-center items-center md:items-end px-12">
        <div className='text-container w-3/4 sm:w-2/4 xl:w-2/5 flex flex-col justify-around'>
            <h1 className="text-box text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center text-white font-bold leading-tight">Ven a compartir</h1>
            <img className='codyhero' src={codyven} alt="Cody Developer" />
            <LinkRouter 
            className = "button-hero py-2 px-2 sm:py-3 sm:px-5 ring-offset-indigo-700 border rounded text-base lg:text-xl break-normal transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white "
            to='/store'
            >
              Visita nuestra tienda <span><ArrowRightAltIcon/></span>
            </LinkRouter>
        </div>
      </div>
  )
}

export default Hero