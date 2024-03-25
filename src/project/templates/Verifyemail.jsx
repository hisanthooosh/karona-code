import React from 'react'

import mylogo from '../Images/mylogo.svg.png'

import { Button, TextField } from '@material-ui/core';

import king from '../Images/king.png'

import flower from '../Images/halfflowerr.svg.png'

import { sendSignInLinkToEmail } from 'firebase/auth';

import { auth } from '../../firebase/Setup';

import axios from 'axios';

import { useState } from 'react';

const Verifyemail = () => {

  const [email, setEmail] = useState({ email: '' });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {

      await axios.post('http://127.0.0.1:9889/verify-email', { email });


      const jsonData = { email };
      console.log(jsonData);

      localStorage.setItem('email', email);

      await sendSignInLinkToEmail(auth, email, {
        url: 'http://localhost:3000/reg', // URL to redirect after email verification
        handleCodeInApp: true,
      });


      setInfoMsg('We have sent you an email with a link to sign in');



    } catch (error) {
      setLoginError(error.message);
    }
    setLoginLoading(false);
  };

  return (

    <section className="body-signup">

      <section className="body-part1">

        <img className='logo-sign' src={mylogo} alt="" />

        <img src={king} alt="" className='king' />

        <div className="closebtndiv">

          <button className='closebtn'><i className='fa-solid fa-arrow-left'></i></button>

        </div>

      </section>

      <section className="body-part2">

        <img className='flower' src={flower} alt="" />

        <div className="part2-titledi">

          <p className='part2-titleverify'>Verify your Email with   </p> <p className='colorkaronaverify'>Karona</p>

        </div>

        <div className="part2-formdiv11">

          <form action="" className="part2-form" onSubmit={handleSubmit}>

            <div className='db-numberinputdivverify'>

              <TextField style={{ height: '30px' }} variant='outlined' size="small" label="Email" fullWidth value={email.email} onChange={(e) => setEmail(e.target.value)} />

            </div>

            <div className="dbotpdiv">

              <div className="dbsecndcode">

                
                <Button
                  type="submit"
                  style={{ marginTop: 15 , height:"40%"}}
                  variant="contained"
                  color="primary"
                  disabled={loginLoading}
                >
                  {loginLoading ? 'Sending...' : ' Send  Link'} 
                </Button>

              </div>

              

            </div>



            <div id='recap'>

            </div>

            <div className='dbinvelid'>

              {/* {invalidOTP && <div className="popup">Invalid OTP!</div>} */}

            </div>

            



          </form>

          {loginError && <div className="error-msg">{loginError}</div>}
          {infoMsg && <div className="info-msg">{infoMsg}</div>}



          <div className="part2-alredy">

            <p>Alredy have an account ? <a href="http://localhost:3000/Login" className='loginlink'>Login</a></p>

          </div>

          <div className='loginmobilepic'>

            <img src={king} alt="" className='women1king' />


          </div>

        </div>

      </section>

    </section>
  )
}

export default Verifyemail

