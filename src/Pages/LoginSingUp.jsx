import React from 'react'
import './LoginSingUp.css'

const LoginSingUp = () => {
  return (
    <div className='login-sinup'>
      <div className="login-signup-container">
        <h1>sing Up</h1>
        <div className="login-signup-fild">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button className='btn'>Continue</button>
        <div className="area">
        <p className="loginsingup-login">Already have an account ? <span>Login here</span></p>
        </div>
        <div className="login-singup-area">
          <input type="checkbox" name='' id='' />
          <p>by continuing , i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingUp