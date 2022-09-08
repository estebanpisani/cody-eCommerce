import React from 'react'
import '../styles/footer.css'
import Logo from '../media/cody2.png'
import { Link as LinkRouter } from 'react-router-dom'
import heroapp from '../media/apphero.png'

const Footer = () => {
  return (
    <footer className="w-full footer-container flex flex-col md:flex-row items-center md:items-end md:justify-center">
        <div className='container-heroapp hidden max-h-full flex flex-row md:flex-col md:justify-end items-center justify-center md:w-2/6 '>
          <h5 className='pedido-text'>¡Haz tu pedido desde la <span className='app-text'>APP!</span></h5>
          <img className='heroapp hidden md:block  w-full' src={heroapp} alt="" />
        </div>
        <div className="container-foot flex flex-col items-center text-gray-600">
          <img src={Logo} alt="logo tailus" className="w-40 cody-footer" />
          <ul className="py-4 flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-8">
            <li>
              <LinkRouter to='/home' className="hover:text-cyan-500">Home</LinkRouter>
            </li>
            <li>
              <LinkRouter to='/store' className="hover:text-cyan-500">
                Tienda
              </LinkRouter>
            </li>
            <li>
              <LinkRouter to='/events' className="hover:text-cyan-500">
                Eventos
              </LinkRouter>
            </li>
            <li>
              <LinkRouter to='/login' className="hover:text-cyan-500">
                Registro
              </LinkRouter>
            </li>
          </ul>
          <div className="w-max flex items-center flex-wrap justify-between space-x-4">
            <a href="tel:+243996660436" aria-label="call">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
              </svg>
            </a>
            <a href="mailto:codycoffeteam@gmail.com" aria-label="send mail">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/" title="facebook" target="blank" aria-label="facebook">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/" title="linkedin" target="blank" aria-label="linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
          </div>
          <div className="text-center">
            <span className="text-sm tracking-wide">Copyright © Cody <span id="year"></span> | All right reserved</span>
          </div>
        </div>
    </footer>

  )
}

export default Footer;
