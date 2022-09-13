import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions';
import GoogleSignUp from './GoogleSignUp';
import GoogleSignIn from './GoogleSignIn';

import '../styles/LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch()
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
      {/* <div className="container-login" id="container" > */}
      <div className="flex sm:hidden container-small-login">
        <div className="form-small-container p-5">
          {isSignUp ?
            <>
              <h5 className='font-bold m-0'>Crear una cuenta</h5>
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
              </form>
              <p className='text-center my-3'>o utiliza tu cuenta de Google</p>
              <GoogleSignUp />
              <p className='text-center my-3'>¿Ya tienes cuenta?</p>
              <button className='btn-form my-3' onClick={() => setSignUp(!isSignUp)}>Ingresar</button>
            </>
            :
            <>
              <h5 className='font-bold m-0'>Ingresar</h5>
              <form onSubmit={loginSubmit} className='forms-small-register'>
                <label className='my-1' for="email-input">Email:</label>
                <input className='my-1 rounded p-2' type="email" id='email-input' name='email-input' placeholder="Email" />
                <label className='my-1' for="password-input">Contraseña:</label>
                <input className='my-1 rounded p-2' type="password" id='password-input' name='password-input' placeholder="Contraseña" />
                <button className='btn-form my-3'>Ingresar</button>
              </form>
              <p className='text-center my-3'>o utiliza tu cuenta de Google</p>
              <GoogleSignIn />
              <p className='text-center my-3'>¿No tienes cuenta?</p>
              <button className='btn-form my-3' onClick={() => setSignUp(!isSignUp)}>Registrarse</button>
            </>
          }
        </div>
        {/* <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h3 className='font-bold m-0'>Hola de nuevo!!!</h3>
                <p className='text-p'>Para mantenerte en contacto con nosotros ingresa con tu informacion personal</p>
                <button onClick={() => setSignUp(false)} className="ghost btn-form" id="signIn"  >Ingresar</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h3 className='font-bold m-0'>Bienvenido! </h3>
                <p className='text-p'>Ingresa tu informacion personal y disfruta de nuestros servicios</p>
                <button onClick={() => setSignUp(true)} className="ghost btn-form" id="signUp" >Registrarse</button>
              </div>
            </div>
          </div> */}
      </div>
      <div className={isSignUp ? "hidden sm:flex container-login right-panel-active" : "hidden sm:flex"}  >
        <div className="form-container sign-up-container">
          <form onSubmit={signUpSubmit} className='forms-register'>
            <h3 className='font-bold m-0'>Crear una cuenta</h3>
            <div className="social-container">
              <GoogleSignUp />
            </div>
            <span>o registrate con tu correo electronico</span>
            <input type="text" name='firstName' placeholder="Nombre" />
            <input type="text" name='lastName' placeholder="Apellido" />
            <input type="email" name='email' placeholder="Email" />
            <input type="password" name='password' placeholder="Contraseña" />
            <input type="file" name='image' placeholder="Foto de perfil" />
            <button className='btn-form'>Registrarse</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={loginSubmit} className='forms-register'>
            <h1 className='font-bold m-0'>Ingresar</h1>
            <div className="social-container">
              <GoogleSignIn />
            </div>
            <span>o utiliza tu cuenta</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            {/* <a href="#">Forgot your password?</a> */}
            <button className='btn-form'>Ingresar</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='font-bold m-0'>Hola de nuevo!!!</h1>
              <p className='text-p'>Para mantenerte en contacto con nosotros ingresa con tu informacion personal</p>
              <button onClick={() => setSignUp(false)} className="ghost btn-form" id="signIn"  >Ingresar</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='font-bold m-0'>Bienvenido! </h1>
              <p className='text-p'>Ingresa tu informacion personal y disfruta de nuestros servicios</p>
              <button onClick={() => setSignUp(true)} className="ghost btn-form" id="signUp" >Registrarse</button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default LoginForm