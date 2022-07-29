import React from 'react'
import '../styles/loginprueba.css';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions';
import GoogleSignUp from './GoogleSignUp';
import GoogleSignIn from './GoogleSignIn';

const LoginPrueba = () => {
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

      <div className="container-loginprueba" id="container" >
        <div className={isSignUp ? "container-loginprueba right-panel-active" : ""}  >
          <div className="form-container sign-up-container">
            <form onSubmit={signUpSubmit} className='forms-register'>
              <h1 className='font-bold m-0'>Crear una cuenta</h1>
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
      </div>
    </div>
  )
}

export default LoginPrueba