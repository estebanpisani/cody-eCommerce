import React from 'react'
import { useState } from "react";
import Logo from '../media/logo.png'
import '../styles/navbar.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem"


const Navbar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const user = useSelector(store => store.userReducer.user)

  return (
    <div className='navbar py-12 bg-gray-100 overflow-y-hidden'>
      <dh-component>
        <nav className="w-full nav">
          <div className="container mx-auto px-6 flex items-center justify-between ">
          <LinkRouter to='/home'>
            <div className="flex items-center  " aria-label="Home" role="img">
            
              <img className="logo-navbar cursor-pointer w-8 sm:w-auto"  src={Logo} alt="logo" />
           
            </div>
            </LinkRouter>



            <div>
              <button onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg" alt="show" />
              </button>
              <div id="menu" className={`md:block lg:block ${show ? '' : 'hidden'}`}>
                <button onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-50 top-0 mt-3">
                  <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg" alt="hide" />
                </button>
                <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                  <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <LinkRouter to='/home'>Inicio</LinkRouter>

                  </li>
                  <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <LinkRouter to='/store'>Tienda</LinkRouter>

                  </li>
                  <li className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <LinkRouter to='/events'>Eventos</LinkRouter>
                  </li>

                  <div className="border w-fit rounded-xl m-5 shadow-sm ">

                    {user ?
                      <div className='border-avatar'>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt="imageUser" style={{ border: 'none', height: '60px', width: "100%", backgroundColor: 'white', borderRadius: '4rem', mx: 5 }} src={user?.user.image} />
                        </IconButton>
                        <Menu
                          sx={{ mt: "60px", display: 'flex', flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          open={Boolean(anchorElUser)}
                          onClick={handleCloseUserMenu}
                        >
                          <LinkRouter to='/profile'>
                            <MenuItem className="button-login px-4 py-2 rounded-l-xl text-white m-0 bg-red-500 hover:text-red-500 hover:bg-neutral-50 transition">Mi Perfil</MenuItem>
                          </LinkRouter>
                          <LinkRouter to='/login' onClick={() => dispatch(userActions.signOutUser())} >
                            <MenuItem className="button-login px-4 py-2 rounded-l-xl text-white m-0 bg-red-500 hover:text-red-500 hover:bg-neutral-50 transition">Cerrar Sesion</MenuItem>
                          </LinkRouter>
                        </Menu>
                      </div>
                      //   <LinkRouter to='/login' onClick={()=>dispatch(userActions.signOutUser())} >
                      //   <button className="button-login px-4 py-2 rounded-l-xl text-white m-0 bg-red-500 hover:text-red-500 hover:bg-neutral-50 transition">Cerrar Sesion</button>
                      // </LinkRouter>
                      :
                      <LinkRouter to='/login'>
                        <button className="button-login px-4 py-2 rounded-l-xl text-white m-0 bg-red-500 hover:text-red-500 hover:bg-neutral-50 transition">Iniciar Sesion</button>
                      </LinkRouter>
                    }
                  </div>

                </ul>

              </div>
            </div>
          </div>
        </nav>

      </dh-component>
    </div>

  )
}

export default Navbar
