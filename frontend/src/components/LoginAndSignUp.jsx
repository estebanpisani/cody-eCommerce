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
              <h1 className='font-bold m-0'>Create Account</h1>
              <div className="social-container">
                <GoogleSignUp />
              </div>
              <span>or use your email for registration</span>
              <input type="text" name='firstName' placeholder="Nombre" />
              <input type="text" name='lastName' placeholder="Apellido" />
              <input type="email" name='email' placeholder="Email" />
              <input type="password" name='password' placeholder="Password" />
              <input type="file" name='image' placeholder="Foto de perfil" />
              <button className='btn-form'>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={loginSubmit} className='forms-register'>
              <h1 className='font-bold m-0'>Sign in</h1>
              <div className="social-container">
                <GoogleSignIn />
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              {/* <a href="#">Forgot your password?</a> */}
              <button className='btn-form'>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className='font-bold m-0'>Welcome Back!</h1>
                <p className='text-p'>To keep connected with us please login with your personal info</p>
                <button onClick={() => setSignUp(false)} className="ghost btn-form" id="signIn"  >Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className='font-bold m-0'>Hello, Friend!</h1>
                <p className='text-p'>Enter your personal details and start journey with us</p>
                <button onClick={() => setSignUp(true)} className="ghost btn-form" id="signUp" >Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPrueba