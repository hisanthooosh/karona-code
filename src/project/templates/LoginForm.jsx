import React, { useState } from 'react'

import '../static/css/LoginForm.css'

import mylogo from '../Images/mylogo.svg.png'

import { useNavigate } from 'react-router-dom';

const LoginForm = () => { 

  const navigate = useNavigate();

  const gotosignup = () => 

  {

     navigate('./Signup');

  }

  const gotologin = () => 

  {

     navigate ('./Login')

  }
   
   return (

      <section className='main'>

         <section className='m1'>

            <img  src={mylogo} alt="" className='image' />

         </section>

         <section className='m2'>

            <div className="title">

               <h1 className='title-1'>Lorem ipsum dolor king sit.</h1>

            </div>

            <div className="form">

               <form action="">

                  <h2>Join today</h2>

                  <button className='button'><h4 className='content'><i className='fa-brands fa-google'></i> Sign up with Google</h4></button><br />

                  <button className='button'><h4 className='content'> <i className='fa-brands fa-apple'></i> Sign up with Apple</h4></button>

                  <div className="orline">

                     <div className="lineor">

                        <p className='linep'><span className='span'>or</span></p>

                     </div>

                  </div>

                  <button  onClick={gotosignup} className='button1'   ><h4 className='content'>Create an Account</h4></button>

               </form>

            </div>

            <div className="alredyd">

               <h4 className='alredy'>Alredy have an account?</h4>

               <button onClick={gotologin} className='button2'  ><h4 className='content2'>Login</h4></button>

            </div>

         </section>

      </section >
   )
}

export default LoginForm
