
import React from 'react';

import mylogo from '../Images/mylogo.svg.png';

import { useNavigate } from 'react-router-dom';

import fighter from '../Images/fighters.png';

import flower from '../Images/halfflowerr.svg.png';

import axios from 'axios';

import { useState } from 'react';

import { toast, Toaster } from 'react-hot-toast';

import { useLocation } from 'react-router-dom';

const Reg = () => {

    const location = useLocation();
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        date: '',
        password: '',
        email:  localStorage.getItem('email') || '',
        phone:  localStorage.getItem('phone') || ''
    });
    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!formData.username || !formData.password || !formData.date || !formData.name) {
            console.error('Missing form data:', formData);
            window.alert('Please enter valid data' )
            

            return;

        }

        // Convert data to JSON
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);

        // 
        

        try {
            const response = await axios.post('http://127.0.0.1:9889/reg', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },email:'',Phone:'',
            });
            
            console.log(response.data); // Log the response data
            // Redirect to home page or handle success as needed
            navigate('/Login');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Handle 404 error (user not found)
                console.error('Server responded with 400 error:', error.response.data);
                window.alert('provide valid data');
            } else if (error.response && error.response.status === 201) {
                // Handle 401 error (incorrect password)
                console.error('added successfully');
                window.alert('added successfully');
            } else if (error.response && error.response.status === 409) {
                // Handle 409 error (username already exists)
                console.error('Username / phone / email already exists');
                window.alert('Username / phone / email already exists');
            } 

        }



    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

     const navigate = useNavigate();
    return (

        <section className="body-signup">

            <Toaster position='top-right' />

            <section className="body-part1">

                <img className='logo-sign' src={mylogo} alt="" />

                <img src={fighter} alt="" className='fighter' />

                <div className="closebtndiv">

                    <button onClick={() => navigate('/Signup')} className='closebtn'><i className='fa-solid fa-arrow-left'></i></button>

                </div>

            </section>

            <section className="body-part2">

                <img className='flower' src={flower} alt="" />

                <div className="part2-titlediv-reg">

                    <p className='part2-title'>Welcome to   </p> <p className='colorkarona'>Karona</p>

                </div>

                <div className="part2-formdivreg">

                    <form onSubmit={handleSubmit} className="part2-form">

                        <input className='form-input-reg' type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} />

                        <input className='form-input-reg' type="text" name="username" placeholder='Username' value={formData.username} onChange={handleChange} />

                        <input className='form-input-reg' type="date" name="date" value={formData.date} onChange={handleChange} />

                        <input className='form-input-reg' type="password" name="password" placeholder='password' value={formData.password} onChange={handleChange} />

                        <input className='form-input-reg' type="password" placeholder='Confirm password' />

                        <a className='loginlink' href="http://localhost:3000/Verifyemail">verify Email </a>

                        <button type="submit" className='from-nextbtn'  >Submit</button>

                    </form>

                    <div className="part2-alredy">

                        <p>Alredy have an account ? <a href="http://localhost:3000/Login" className='loginlink'>Login</a></p>

                    </div>

                    <div className='loginmobilepic'>

                        <img src={fighter} alt="" className='women1' />

                    </div>

                </div>

            </section>

        </section>

    );

}


export default Reg;

