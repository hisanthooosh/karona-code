import React, { useState } from 'react'

import '../static/css/Signup.css'

import mylogo from '../Images/mylogo.svg.png'

import { useNavigate } from 'react-router-dom'

import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'

import { Button, TextField } from '@material-ui/core';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import { auth } from '../../firebase/Setup';

import Place from '../Images/indiaplace.png'

import flower from '../Images/halfflowerr.svg.png';

import { toast, Toaster } from 'react-hot-toast';

import axios from 'axios'

const Signup = () => {

    const notify = () => toast('Invaled OTP.');

    const [phone, setphone] = useState("")

    const [User, setUser] = useState(null)

    const [OTP, setOTP] = useState("")

    const [invalidOTP, setInvalidOTP] = useState(false);

    const sendOTP = async () => {

        try {

            const recap = new RecaptchaVerifier(auth, "recap", {})

            const confirmation = await signInWithPhoneNumber(auth, phone, recap)

            setUser(confirmation)

            const jsondata = { phone }
            console.log(jsondata)

            await axios.post('http://127.0.0.1:9889/phone', { phone });



            localStorage.setItem('phone', phone);

        }

        catch (error) {

            console.error(error)
        }
    }


    const VerifyOTP = async () => {

        try {

            const data = await User.confirm(OTP)

            console.log(data)

            window.location.href = 'http://localhost:3000/Verifyemail';

        }
        catch (error) {

            console.error(error)

            setInvalidOTP(true);

        }

    }

    const navigate = useNavigate();

    return (

        <section className="body-signup">

            <Toaster position='top-right' />

            <section className="body-part1">

                <img className='logo-sign' src={mylogo} alt="" />

                <img src={Place} alt="" className='indiaplace' />


                <div className="closebtndiv">

                    <button onClick={() => navigate('/')} className='closebtn'><i className='fa-solid fa-arrow-left'></i></button>

                </div>

            </section>

            <section className="body-part2">

                <div className="part2-titlediv">

                    <p className='part2-title'>Signup to   </p> <p className='colorkarona'>Karona</p>

                </div>

                <div className="part2-formdiv11">

                    <img className='flower' src={flower} alt="" />

                    <form action="" className="part2-form">

                        <div className='db-numberinputdiv'>

                            <PhoneInput className="db-numberinput" country={"in"} style={{ marginTop: '5%' }} value={phone} onChange={(phone) => setphone("+" + phone)} />

                        </div>

                        <div className="dbotpdiv">

                            <div className="dbsecndcode">

                                <Button onClick={sendOTP} className='dbsendcodebtn' variant='contained' style={{ height: ' 35px', borderRadius: '30px', backgroundColor: '#1d9cf1cd', color: 'white' }}>  Get Code</Button>


                            </div>

                            <div className="dbotpinput">

                                <TextField onChange={(e) => setOTP(e.target.value)} style={{ height: '30px' }} variant='outlined' size="small" label="O T P" fullWidth />

                            </div>

                        </div>



                        <div id='recap'>

                        </div>

                        <div className='dbinvelid'>

                            {invalidOTP && toast.error('Invalid OTP')}




                        </div>



                        <div className="dbverifyotp">

                            <Button onClick={VerifyOTP} style={{ height: ' 35px', borderRadius: '30px', backgroundColor: '#1d9cf1cd', color: 'white', marginBottom: '5%' }} variant='contained' >Next</Button>


                        </div>



                    </form>



                    <div className="part2-alredy">

                        <p>Alredy have an account ? <a href="http://localhost:3000/Login" className='loginlink'>Login</a></p>

                    </div>

                </div>

                <div className='loginmobilepic1'>

                    <img src={Place} alt="" className='women11' />


                </div>

            </section>

        </section>

    )
}

export default Signup

