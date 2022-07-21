import React from 'react'
import Cody from '../media/cody3.png'
import '../styles/aboutus.css'

const AboutUs = () => {
  return (
    <div>
      <div className='about-container'>
        <div >
          <h2 className='text-xl text-center font-bold py-5'>
            ¿Quienes Somos?
          </h2>
          <p className='sm:text-lg text-center text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita quam commodi reprehenderit nemo ipsa natus nostrum eveniet.</p>
        </div>
        <img className='img-cody' src={Cody} alt="Cody About Us" />

      </div>


    </div>
  )
}

export default AboutUs