import React from 'react'
import './Login.css'
import { Link, NavLink } from 'react-router-dom'
const Login = () => {
  return (
    
    <>
      <header>
        <div className="main_header">
          <div className="logo_col">
            <img src="Logo.png" alt="logo" />
          </div>
          <div className="buttons_col">
            <NavLink to='/' className={({isActive})=> isActive?"text-xl font-semibold text-white font-roboto  border-b-2 border-white" : "w-[90px] bg-white inline-block h-[39px]  rounded-xl text-xl font-semibold  text-center leading-10" }>Login</NavLink>
            <NavLink to='/register' className={({isActive})=> isActive?"text-xl font-semibold text-white font-roboto  border-b-2 border-white" : "w-[90px] bg-white inline-block h-[39px]  rounded-xl text-xl font-semibold  text-center leading-10" }>Register</NavLink>
          </div>
        </div>
</header>

<div className="container">
    <div className="main_login">
          <div className="login_image">
            <img src="loginPicture.png" alt="Login" />
          </div>
    <div className="login_form">
        <form className='main_form'>
        <div className="form_head">
          <h2>Hello ! <br />welcome back</h2>
        </div>
        <input className='emailInput' placeholder='Enter Eamil' type="email" />
        <input className='passwordInput' placeholder='Enter Password' type="password" />

        <Link to='#' className='forgot_password'>forgot password ?</Link>

        <button className='login_button'>Sign in</button>
        </form>
        <div className="options"><h5>Or Continue With</h5></div>
        <div className="social_icons">
          <ul>
            <li><Link to='#' className='option_icons'><img src="google.png" alt="" /></Link></li>
            <li><Link to='#' className='option_icons'><img src="fb.png" alt="" /></Link></li>
            <li><Link to='#' className='option_icons'><img src="apple.png" alt="" /></Link></li>
          </ul>
        </div>
        <Link  to='/register' className="singUp">Don’t Have An Account ? <span>Create Account !</span></Link>
    </div>
    </div>
</div>



    </>
  )
}

export default Login