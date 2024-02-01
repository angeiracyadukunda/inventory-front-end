import React, { useEffect,useState } from 'react'
import  vector from '../assets/login.jpg'
import { Link} from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/index.css'
  
    const Login = () => {
      useEffect(()=>{
        AOS.init({duration:2000})
    },
    [])
      const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: '',
      });
    
      
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
    
  
      const { username, password, role } = formData;
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };
    
   
      const handleSubmit = (e) => {
        e.preventDefault();
    
       
        if (username.trim() === '' || password.trim() === '' || role.trim() === '') {
          setErrorMessage('Please fill in all fields');
          setSuccessMessage('');

          return;
        }
    
   
        if (username != '' && password != '' && role != '') {
          setSuccessMessage('Login successful!');
          setErrorMessage('');
       
          setTimeout(() => {
            window.location.href = '/Home'; 
          }, 2000);
        } 
      };
    
    return (
      <>
       {successMessage && <div className=" bg-green-500 text-gray-100  py-4 px-12 mb-4 text-bold ">{successMessage}</div>}
          {errorMessage && <div className="bg-red-500 text-gray-100  py-4 px-12 mb-4 text-bold">{errorMessage}</div>}
      <div className='main-div main-container w-full h-screen flex flex-col md:flex-row items-center justify-center'>
  <div className='vector basics-1/2 bg-white md:w-4/12 sm-4/12 min-h-40  shadow-lg shadow-black-500 hidden md:block'>

    <img src={vector} className='basics-1/2 size-min  md:mt-24 mx-auto md:ml-0 md:mr-auto ' alt='home vector' data-aos="fade-right" />
  </div>
  <div className='login-form  basics-1/2 w-full md:w-5/12  bg-gradient-to-r from-blue-900 to-blue-999 p-8 md:p-12 shadow-lg'>
    <h1 className='text-white mt-8 font-bold text-3xl md:text-4xl mb-4 md:mb-8 delay-[400ms] duration-[600ms]' data-aos="fade-down">
      Login Form
    </h1>  
    <form className='form mx-4 md:mx-0' onSubmit={handleSubmit}>
      <input
        className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="username"
        type="text"
        placeholder="Username"
        data-aos="fade-down"
        value={username}
        onChange={handleChange}
        required
      />
      <input
        className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="password"
        type="password"
        placeholder="Password"
        data-aos="fade-down"
        value={password}
        onChange={handleChange}
        required
      />
      <input
        className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        id="role"
        type="text"
        placeholder="Role"
        data-aos="fade-down"
        value={role}
        onChange={handleChange}
        required
      />
     <button
        type="submit"
        className='home-button mb-6 bg-white text-blue-800 rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300'
        data-aos="fade-down" 
      >
        Login
      </button>
      <p className='text-white mb-6'>
        Forgot your password? <Link to="/register" className='text-blue-300 hover:underline'>Reset your password</Link>
      </p>
    </form>
   
  </div>
</div>
      </>
    )
  }
  export default Login
