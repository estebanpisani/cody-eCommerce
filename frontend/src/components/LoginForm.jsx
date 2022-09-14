import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions';
import GoogleSignUp from './GoogleSignUp';
import GoogleSignIn from './GoogleSignIn';

import '../styles/LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isSignUp, setSignUp] = useState(true);

  const signUpSubmit = async (event) => {
    event.preventDefault()
    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      image: event.target[4].value,
      method: "signUpForm"
    }
    await dispatch(userActions.signUpUsers(userData));

  }

  const loginSubmit = async (event) => {
    event.preventDefault()
    const logedUser = {
      email: event.target[0].value,
      password: event.target[1].value,
      from: "signUpForm"
    };
    await dispatch(userActions.signInUser(logedUser));
  }


  return (
    <div className='body-login'>
      <div className="container-login" id="container" >
        <div className="flex sm:hidden container-small-login">
          <div className="form-small-container p-5">
            {isSignUp ?
              <>
                <h5 className='font-bold text-lg m-0'>Crear una cuenta</h5>
                <form onSubmit={signUpSubmit} className='forms-small-register'>
                  <label className='my-1' for="first-name-input">Nombre:</label>
                  <input className='my-1 rounded p-2' type="text" id='first-name-input' name='first-name-input"' placeholder="Nombre" />
                  <label className='my-1' for="last-name-input">Apellido:</label>
                  <input className='my-1 rounded p-2' type="text" id='last-name-input' name='last-name-input' placeholder="Apellido" />
                  <label className='my-1' for="email-input">Email:</label>
                  <input className='my-1 rounded p-2' type="email" id='email-input' name='email-input' placeholder="Email" />
                  <label className='my-1' for="password-input">Contraseña:</label>
                  <input className='my-1 rounded p-2' type="password" id='password-input' name='password-input' placeholder="Contraseña" />
                  <label className='my-1' for="profile-photo">Foto de perfil:</label>
                  {/* <input className='my-1' type="file" name='profile-photo' id="profile-photo" placeholder="Foto de perfil" /> */}
                  <input className='my-1 rounded p-2' type="text" id='profile-photo' name='profile-photo' placeholder="Foto URL" />
                  <button className='btn-form my-3'>Registrarse</button>
                  <p className='text-center my-3'>o utiliza tu cuenta de Google</p>
                  <GoogleSignUp />
                </form>
                <div className='my-3 flex flex-col justify-center'>
                  <p className='text-center my-1'>¿Ya tienes cuenta?</p>
                  <button className='btn-form my-1' onClick={() => setSignUp(!isSignUp)}>Ingresar</button>
                </div>
              </>
              :
              <>
                <h5 className='font-bold m-0 text-lg'>Ingresar</h5>
                <form onSubmit={loginSubmit} className='forms-small-register'>
                  <label className='my-1' for="email-input">Email:</label>
                  <input className='my-1 rounded p-2' type="email" id='email-input' name='email-input' placeholder="Email" />
                  <label className='my-1' for="password-input">Contraseña:</label>
                  <input className='my-1 rounded p-2' type="password" id='password-input' name='password-input' placeholder="Contraseña" />
                  <button className='btn-form my-3'>Ingresar</button>
                  <p className='text-center my-3'>o utiliza tu cuenta de Google</p>
                  <GoogleSignIn />
                </form>
                <div className='my-3 flex flex-col justify-center'>
                  <p className='text-center my-1'>¿No tienes cuenta?</p>
                  <button className='btn-form my-1' onClick={() => setSignUp(!isSignUp)}>Registrarse</button>
                </div>
              </>
            }
          </div>
        </div>
        <div className={isSignUp ? "hidden sm:flex container-login right-panel-active" : "hidden sm:flex"}  >
          <div className="form-container sign-up-container">
            <div className='form-box'>
              <h5 className='font-bold m-0 text-lg'>Crear una cuenta</h5>
              <form onSubmit={signUpSubmit} className='forms-register'>
                <label className='my-1' for="first-name-input">Nombre:</label>
                <input className='my-1 rounded p-2' type="text" id='first-name-input' name='first-name-input"' placeholder="Nombre" />
                <label className='my-1' for="last-name-input">Apellido:</label>
                <input className='my-1 rounded p-2' type="text" id='last-name-input' name='last-name-input' placeholder="Apellido" />
                <label className='my-1' for="email-input">Email:</label>
                <input className='my-1 rounded p-2' type="email" id='email-input' name='email-input' placeholder="Email" />
                <label className='my-1' for="password-input">Contraseña:</label>
                <input className='my-1 rounded p-2' type="password" id='password-input' name='password-input' placeholder="Contraseña" />
                <label className='my-1' for="profile-photo">Foto de perfil:</label>
                {/* <input className='my-1' type="file" name='profile-photo' id="profile-photo" placeholder="Foto de perfil" /> */}
                <input className='my-1 rounded p-2' type="text" id='profile-photo' name='profile-photo' placeholder="Foto URL" />
                <button className='btn-form my-3'>Registrarse</button>
              </form>
              <p className='text-center my-3'>o utiliza tu cuenta de Google</p>
              <GoogleSignUp />
            </div>
          </div>
          <div className="form-container sign-in-container">
            <div className='form-box'>
              <h5 className='font-bold text-lg'>Ingresar</h5>
              <form onSubmit={loginSubmit} className='forms-register mt-2'>
                <label className='my-1' for="email-input">Email:</label>
                <input className='my-1 rounded p-2' type="email" id='email-input' name='email-input' placeholder="Email" />
                <label className='my-1' for="password-input">Contraseña:</label>
                <input className='my-1 rounded p-2' type="password" id='password-input' name='password-input' placeholder="Contraseña" />
                <button className='btn-form my-3'>Ingresar</button>
              </form>
              <p className='text-center my-3'>o utiliza tu cuenta de Google</p>
              <GoogleSignIn />
            </div>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className='font-bold m-0'>¿Ya tienes cuenta?</h1>
                <p className='text-p'>Ingresa ahora y disfuta de nuestros servicios</p>
                <button onClick={() => setSignUp(false)} className="ghost btn-form" id="signIn"  >Ingresar</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className='font-bold m-0'>¿Primera vez por aquí?</h1>
                <p className='text-p'>Te invitamos a registrarte para empezar a disfrutar de nuestros servicios</p>
                <button onClick={() => setSignUp(true)} className="ghost btn-form" id="signUp" >Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm