import React from 'react'

import mylogo from '../Images/mylogo.svg.png'

import { Button, TextField } from '@material-ui/core';

import good from '../Images/good.png'

import flower from '../Images/halfflowerr.svg.png'

const Forgotpassword = () => {
  return (
    <section className="body-signup">

      <section className="body-part1">

        <img className='logo-sign' src={mylogo} alt=""  />

        <img src={good} alt=""  className='god'/>

        <div className="closebtndiv">

          <button className='closebtn'><i className='fa-solid fa-arrow-left'></i></button>

        </div>

      </section>

      <section className="body-part2">

      <img  className='flower' src={flower} alt="" />

        <div className="part2-titledi">

          <p className='part2-titleverify'>Recover password in   </p> <p className='colorkaronaverify'> Karona</p>

        </div>

        <div className="part2-formdiv11">

          <form action="" className="part2-form">

            <div className='db-numberinputdivverify'>

              <TextField style={{ height: '30px' }} variant='outlined' size="small" label="Email" fullWidth />

            </div>

            <div className="dbotpdiv">

              <div className="dbsecndcode">

                <Button className='dbsendcodebtn' variant='contained' style={{ height: ' 35px', borderRadius: '30px', backgroundColor: '#1d9cf1cd', color: 'white',fontSize:"70%" }}>Get Code</Button>


              </div>

              <div className="dbotpinput">

                <TextField style={{ height: '30px' }} variant='outlined' size="small" label="O T P" fullWidth />

              </div>

            </div>



            <div id='recap'>

            </div>

            <div className='dbinvelid'>

              {/* {invalidOTP && <div className="popup">Invalid OTP!</div>} */}

            </div>

            <div className="dbverifyotp">

              <Button style={{ height: ' 35px', borderRadius: '30px', backgroundColor: '#1d9cf1cd', color: 'white', marginBottom: '5%' }}  >Next</Button>


            </div>



          </form>



          <div className="part2-alredy">

            <p>Alredy have an account ? <a href="http://localhost:3000/Login" className='loginlink'>Login</a></p>

          </div>

          <div className='loginmobilepic'>

            <img src={good} alt="" className='women1king' />


          </div>

        </div>

      </section>

    </section>

  )
}

export default Forgotpassword
