import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import CarouselHome from './CarouselHome'
import '../styles/activitiesHero.css'

const ActivitiesHero = () => {
  return (
    <section id='hero-activities-section' className='container-activities flex flex-col w-full md:flex-row items-center justify-between'>
      <div className='hero-act-box flex flex-col w-full justify-around items-center h-full md:w-1/2 md:h-full'>
        <h1 className="hero-act-title 
          leading-5 md:leading-6 xl:leading-9
          text-gray-800 text-xl
          md:text-2xl
          xl:text-4xl
          font-semibold
          text-center
          text-white
        ">
          Espacio Co-Working & Eventos
        </h1>

        <LinkRouter className="cta-activities h-11 flex items-center border border-gray-600" to='/events'>
          <span className='text-sm md:text-md'> Nuestras Actividades </span>
          <img alt="arrow-right" className="ml-2" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Banner10_leftToRightArrow.svg" />
        </LinkRouter>
      </div>

      <div className='carrusel-home-bg hidden md:flex flex-col w-full h-1/2 md:w-1/2 md:h-full justify-center p-2'>
        <CarouselHome />
      </div>
    </section>

  )
}

export default ActivitiesHero