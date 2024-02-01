import React, { useEffect } from 'react'
import vector from '../assets/home-vector.png'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { Link } from 'react-router-dom'
const Register = () =>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },
    [])
  
    return (
      <>
   <div className='main-div main-container w-full h-screen flex flex-col md:flex-row items-center justify-center  '>
  <div className='vector basics-1/2 bg-white md:w-4/12 sm-4/12 min-h-40 shadow-lg shadow-blue-900 hidden md:block'>
    <img src={vector} className='basics-1/2 size-min md:mt-36 mx-auto md:ml-0 md:mr-auto' alt='home vector' data-aos="fade-right" />
  </div>
  <div className='register-form basics-1/2 w-full md:w-5/12 min-h-40 shadow-2xl bg-gradient-to-r from-blue-900 to-blue-999 p-8 md:p-12'>
    <h1 className='text-white font-bold text-3xl md:text-4xl mb-4 md:mb-8 ml-4 md:ml-1 delay-[400ms] duration-[600ms]' data-aos="fade-down">
      Register Form
    </h1>
    <form className='form mx-4 md:mx-0'>
      <input
        className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="username"
        type="text"
        placeholder="Username"
        data-aos="fade-down"
      />
      <input
        className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="email"
        type="text"
        placeholder="Email"
        data-aos="fade-down"
      />
      <input
        className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="password"
        type="password"
        placeholder="Password"
        data-aos="fade-down"
      />
    
      <Link to='/Login'>
        <button className='home-button mb-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 font-bold transition duration-300' data-aos="fade-down">
          Register
        </button>
      </Link>
      <p className='text-white mb-6'>
        Already Registered? <Link to="/Login" className='text-blue-300 hover:underline'>Click here to Login</Link>
      </p>
    </form>
  </div>
</div>
      </>
    )
  }
  
  export default Register
