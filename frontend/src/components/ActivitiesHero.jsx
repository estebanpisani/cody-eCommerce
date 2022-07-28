import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/activitiesHero.css'
import CarouselHome from './CarouselHome'

const ActivitiesHero = () => {
  return (


    <div className='container-activities'>
      {/* <div className="flex justify-center items-center flex-col px-4 md:px-6 xl:px-20 py-9 md:py-12 xl:py-10 "> */}
      <section className='flex '>
        <div className='hero-act-box flex flex-col w-1/2 justify-center'>
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
          
          <section className="hero-btn-box flex justify-center mt-5">
            <LinkRouter className="
          button-hero
          px-6
          h-11
          text-gray-800 text-base
          font-medium
          flex
          items-center
          border border-gray-600
          hover:bg-gray-200
        " to='/events'>

              <span> Nuestras Actividades </span>
              <img alt="arrow-right" className="ml-2" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Banner10_leftToRightArrow.svg" />
            </LinkRouter>
          </section>
        </div>

        <div className='carrusel-home-bg flex flex-col w-1/2 justify-center p-16'>
          <CarouselHome />
        </div>
      </section>
      {/* <section className="
        grid grid-cols-2
        xl:grid-cols-3
        gap-4
        md:gap-6
        xl:gap-8
        mt-8
        md:mt-10
        xl:mt-12
        mb-6 mb-8
      ">
          <div className="w-full ">
            <img className='w-full h-full' src="https://diegoboscan.com/static/738155fe5ef8b31a8de213cbd0295fc8/743e0/js-1.png" />
          </div>
          <div className="w-full ">
            <img className='w-full h-full' src="https://i0.wp.com/unprogramador.com/wp-content/uploads/2019/09/REACTBLOG.png?fit=1280%2C720&ssl=1" />
          </div>
          <div className="w-full ">
            <img className='w-full h-full' src="https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png" />
          </div>
        </section> */}

      {/* </div> */}
    </div>

  )
}

export default ActivitiesHero