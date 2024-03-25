
import React, { useState } from 'react';

import mylogo from '../Images/mylogo.svg.png';

import women from '../Images/women.png.png';

import flower from '../Images/halfflowerr.svg.png';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import {  toast ,Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate();
    
    const [logindata, setLogindata] = useState({

        identifier: '',

        password: ''

    });

    const handleChange = (e) => {
        
        

        setLogindata({ ...logindata, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if username and password are provided
        if ( !logindata.password) {
            toast.error('Please enter username and password');
            return;
        }
    
        try {

              const data=JSON.stringify(logindata);
              console.log(data);

            const response = await axios.post(' http://127.0.0.1:9889/login', logindata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            console.log(response.data);
            
            localStorage.setItem('username',response.data.username)
            
            navigate('/Home');
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    console.error('incorrect password');
                    toast.error('Incorrect password');
                } else if (error.response.status === 404) {
                    console.error('user not found');
                    toast.error('User not found');
                } else if (error.response.status === 204) {
                    console.error('empty data');
                    toast.error('Empty data');
                }
            } else {
                console.error('Error:', error.message);
            }
        }
    };
    

    return (

        <section className="body-signup">

            <Toaster position='top-right' />

            <section className="body-part1">

                <img className='logo-sign' src={mylogo} alt="" />

                <img src={women} alt="" className='women' />

                <div className="closebtndiv">

                    <button onClick={() => navigate('/')} className='closebtn'><i className='fa-solid fa-arrow-left'></i></button>

                </div>

            </section>

            <section className="body-part2">

                <img className='flower' src={flower} alt="" />

                <div className="part2-titlediv">

                    <p className='part2-title'>Login to   </p> <p className='colorkarona'>Karona</p>

                </div>

                <div className="part2-formdiv">

                    <form onSubmit={handleSubmit} className="part2-form">

                        <input className='form-input' type="text" name="identifier" placeholder='Username' value={logindata.identifier} onChange={handleChange}/>

                        <input className='form-input11' type="password" name="password" placeholder='Password' value={logindata.password} onChange={handleChange} />

                        <div className="loginlinkdiv">

                            <a className='loginlink' href="http://localhost:3000/Forgotpassword">Forgot Password ?</a>

                        </div>

                        <button type="submit" className='from-nextbtn'>Next</button>

                    </form>

                    <div className="part2-alredy">

                        <p>Don't have an account ? <a href="http://localhost:3000/Signup" className='loginlink'>Signup</a></p>

                    </div>

                    <div className='loginmobilepic'>

                        <img src={women} alt="" className='women1' />

                    </div>

                </div>

            </section>

        </section>

    )

}

export default Login;
