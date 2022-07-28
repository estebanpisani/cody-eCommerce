import React from 'react'
import Cody from '../media/cody3.png'
import '../styles/aboutus.css'
import CodeIcon from '@mui/icons-material/Code';

const AboutUs = () => {
  return (
    <div>
      <div className='about-container'>
        <div >
          <h2 className='abouttitle text-xl text-center font-bold py-5'>
            ¿Qué es <span className='coText'>CO</span><span className='dyText'>DY</span> ?
          </h2>
          <p className='aboutsub sm:text-lg text-center text-sm'>Cody combina 3 conceptos que viven dentro de cada uno de nosotros</p>
          <ul>
            <li><span className='item-list'><CodeIcon></CodeIcon>Code</span>, nuestra principal herramienta como desarrolladores y que continua en crecimiento.</li>
            <li><span className='item-list2'><CodeIcon></CodeIcon>Coffee</span>, el cafe que tanto nos gusta y nos acompaña a ser constantes.</li>
            <li><span className='item-list'><CodeIcon></CodeIcon>Cody</span>, el nombre de nuestra mascota digital. Representante de aquel fiel compañero que está siempre con nosotros.</li>
          </ul>
        </div>
        <img className='img-cody' src={Cody} alt="Cody About Us" />

      </div>


    </div>
  )
}

export default AboutUs