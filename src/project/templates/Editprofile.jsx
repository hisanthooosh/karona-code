import React from 'react'

import "../static/css/Editprofile.css"

import { useState } from 'react';

import dp from '../Images/MY FAV PIC.png'

import { useNavigate } from 'react-router-dom';

const Editprofile = () => {

  const navigate = useNavigate();

  const gotoprofile = () => {

    navigate('/Profile');

  }

  return (

    <section className="editprofilepagemain">

      <div className="editprofilepagemain-inner">


        <div className='backbtn-editprofilepage'>

          <button className='editbackbtn'>

            <i onClick={gotoprofile} className='fa-solid fa-arrow-left'></i>

          </button>

        </div>

        <div className="editdiv2">

          <strong>Edit Profile</strong>

        </div>

        <div className="editdiv3">

          <div className="editdiv3-inner">

            <div className="editdiv3part1">

              <img className='dpedit' src={dp} alt="" />

            </div>

            <div className="editdiv3part2">

              

            </div>

            <div className="editdiv3part3">


              <button className='editpicbtn'><strong>Change image</strong></button>


            </div>

          </div>


        </div>

        <div className="editdiv401">

           

        </div>

        <div className="editdiv4">

          <strong>Website</strong>

        </div>

        <div className="editdiv5">

          <input className="editdiv5-inner" type='text'>


          </input>

        </div>
        <div className="edit6">

          <p>provide link incase if you have any Website</p>

        </div>

        <div className="editdiv4">

          <strong>Bio</strong>

        </div>

        <div className="editdiv51">

          <input className="editdiv51-inner" type='text'>


          </input>

        </div>

        <div className="editdiv4">

          <strong>Gender (This won’t be shown in profile.)</strong>

        </div>

        <div className="editdiv51">

          <select className='gender' name="" id="">

            <option value="Mail">Mail</option>

            <option value="Femail">Femail</option>

            <option value="prefernototsay">prefer not to say</option>

          </select>

        </div>

        <div className="editsubmitgtn">

            <button className="editsubmitbtn-inner"> <strong>Submit</strong> </button>

        </div>

      </div>

    </section>

  )

}

export default Editprofile
