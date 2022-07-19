import React from 'react'
import { useState } from "react";
import Logo from '../media/logo.png'
import '../styles/navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full relative pb-10 px-6 xl:px-0">
      <nav className="lg:hidden relative z-40">
        <div className="flex py-6 justify-between items-center px-4">
          <div className='container-logo' >
            <img className='logo-navbar' src={Logo} alt="logo" />
          </div>
          <div className=" flex items-center  ">
            <ul id="list" className={`${menu ? '' : 'hidden'} menu-h p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}>
              <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <a href="javascript:void(0)">
                  <span className="ml-2 font-bold">Inicio</span>
                </a>
              </li>
              <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                <a href="javascript:void(0)">
                  <span className="ml-2 font-bold">Tienda</span>
                </a>
              </li>
              <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                <a href="javascript:void(0)">
                  <span className="ml-2 font-bold">Eventos</span>
                </a>
              </li>
              <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                <a href="javascript:void(0)">
                  <span className="ml-2 font-bold">Contacto</span>
                </a>
              </li>
            </ul>
            <div className="xl:hidden ">
              <img id="open" className={` ${menu ? 'hidden' : ''} close-m-menu`} onClick={() => setMenu(!menu)} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg" alt="menu" />
              <div id="close" className={` ${menu ? '' : 'hidden'} close-m-menu`} onClick={() => setMenu(!menu)}>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg" alt="cross" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav role="navigation" aria-label="Main" tabIndex="0" className="hidden relative z-10 w-full lg:flex justify-between items-center p-20">
        <div className="w-1/6 ">
          <a tabIndex="0" aria-label="we care company logo" href="javascript:void(0)">
            <img className='logo-navbar-menu' src={Logo} alt="logo" />
          </a>
        </div>
        <div className="w-5/6 ">
          <div className="flex items-center justify-end">
            <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
              <li>
                <a className="hover:text-indigo-500 text-lg focus:text-indigo-500" href="#">Products</a>
              </li>
              <li className="ml-4 hover:text-indigo-500 ">
                <a className="focus:text-indigo-500 text-lg" href="javascript:void(0)">Claims</a>
              </li>
              <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                <a className="focus:text-indigo-500 text-lg" href="javascript:void(0)">Renewal</a>
              </li>
              <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                <a className="focus:text-indigo-500 text-lg" href="javascript:void(0)">Support</a>
              </li>
            </ul>
            <div className="pl-40 ">
              <button aria-label="live chat" className="focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 font-semibold rounded focus:outline-none">Live Chat</button>
            </div>
          </div>
        </div>
      </nav>
      <style>
        {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
      </style>
    </div>
  )
}

export default Navbar