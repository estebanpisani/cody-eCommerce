import React from 'react'
import '../styles/activitiesHero.css'

const ActivitiesHero = () => {
  return (


    <div className='container-activities'>
      <div className="
      flex
      justify-center
      items-center
      flex-col
      px-4
      md:px-6
      xl:px-20
      py-9
      md:py-12
      xl:py-10
    ">
        <section>
          <h1 className="
          leading-5 md:leading-6 xl:leading-9
          text-gray-800 text-xl
          md:text-2xl
          xl:text-4xl
          font-semibold
          text-center
        ">
            Actividades
          </h1>
          <p className="text-gray-600 text-base text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat quis distinctio. Repudiandae, aliquam ab sit in corrupti officia, exercitationem, doloribus ipsam dicta cupiditate quod suscipit a? Ducimus, porro fuga?
          </p>
        </section>
        <section className="
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
        </section>
        <section className="flex justify-center">
          <button className="
          px-6
          h-11
          text-gray-800 text-base
          font-medium
          flex
          items-center
          border border-gray-600
          hover:bg-gray-200
        ">
            <span> Explore </span>
            <img className="ml-2" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Banner10_leftToRightArrow.svg" />
          </button>
        </section>
      </div>
    </div>

  )
}

export default ActivitiesHero