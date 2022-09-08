import React from 'react'
import Cody from '../media/cody3.png'
import CodeIcon from '@mui/icons-material/Code';
import '../styles/aboutus.css'

const AboutUs = () => {
  return (
    <div className='about-container flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-around'>
      <img className='cody-about' src={Cody} alt="Cody About Us" />
      <div className='about-content container lg:w-3/5 flex flex-col items-center justify-center p-2' >
        <h2 className='about-title text-xl text-center font-bold'>
          ¿Qué es <span className='coText'>CO</span><span className='dyText'>DY</span> ?
        </h2>
        <p className='about-sub sm:text-lg text-center text-sm'>Cody combina 3 conceptos que viven dentro de cada uno de nosotros</p>
        <ul className='about-list flex flex-col flex-wrap'>
          <li><span className='about-item-list'><CodeIcon></CodeIcon>Code</span>, nuestra principal herramienta como desarrolladores y que continua en crecimiento.</li>
          <li><span className='about-item-list2'><CodeIcon></CodeIcon>Coffee</span>, el cafe que tanto nos gusta y nos acompaña a ser constantes.</li>
          <li><span className='about-item-list'><CodeIcon></CodeIcon>Cody</span>, el nombre de nuestra mascota digital. Representante de aquel fiel compañero que está siempre con nosotros.</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs