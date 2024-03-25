import React, { useState , useEffect } from 'react'

import '../static/css/Profile.css'

import dp from '../Images/MY FAV PIC.png'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const Profile = () => {

  const navigate = useNavigate();

  const gotohome = () => {

    navigate('/Home');

  }

  const gotoSettings = () => {

    navigate('/Settings');

  }

  const gotoeditmenu = () =>

  {

     navigate ('/Editprofile');

  }

  const gotoportfoliomenu = () =>

  {

     navigate ('/Portfolio');

  }

  const [username,setUsername]= useState('');
  const [name,setName] = useState('')

  useEffect(() => {
    const fetchName = async () => {
        try {
            const storedUsername = localStorage.getItem('username');
            if (storedUsername) {
                const response = await axios.get(`http://127.0.0.1:9889/profile/name/${storedUsername}`);
                console.log('Name response:', response.data);
                setName(response.data.name);
            } else {
                console.error('Username not found in localStorage');
            }
        } catch (error) {
            console.error('Error fetching name:', error);
        }
    };
    fetchName();
}, []);



useEffect(() => {
  const fetchUsername = async () => {
    try {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
     
       
          setUsername(storedUsername);
       
      } else {
        console.error('Username not found in localStorage');
      }
    } catch (error) {
      console.error('Error fetching username:', error);
   
    }
  };
  fetchUsername();
}, []);




  return (

    <section className='profilepage'>

      <section className="profilesection">

        <section className="userinfosection">

          <div className="userinfodiv1">

            <img src={dp} alt="" className='dp' />

            <div className="backbtn">

              <i onClick={gotohome} className='fa-solid fa-arrow-left'></i>

            </div>

          </div>

          <div className="userinfodiv2">

            <div className="userinfodiv2head">

              <div1 className="userinfodiv2headbuttons1">

                <p> { username } </p>

              </div1>

              <div2 className="userinfodiv2headbuttons">

                <button onClick={gotoeditmenu} className='editprofile'><strong>Edit Profile</strong></button>

              </div2>

              <div3 className="userinfodiv2headbuttons">

                <button onClick={gotoportfoliomenu} className='editprofile'><strong>Portfolio</strong></button>

              </div3>

              <div4 className="userinfodiv2headbuttons4">

                <i onClick={gotoSettings} className='fa-solid fa-gear'></i>

              </div4>


            </div>

            <div className="userfollowdiv">

              <div1 className="userfollowinfo">

                <strong>233&nbsp; </strong>

                <p> Posts</p>

              </div1>

              <div2 className="userfollowinfo">

                <strong>23&nbsp; </strong>

                <p> Followers</p>

              </div2>

              <div3 className="userfollowinfo">

                <strong>2333&nbsp; </strong>

                <p> Following</p>

              </div3>

            </div>

            <div className="bio">

              <div className="name">

                <h4>{name}</h4>

              </div>

              <div className="userbio">

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid repellat ad,  neque ipsam.

              </div>

            </div>




          </div>

        </section>

        <section className="userhighletssection">



        </section>

        <section className="profilenav">

          <div1 className="profilenavbtn">

            <strong>posts</strong>

          </div1>

          <div2 className="profilenavbtn">

            <strong>reels</strong>

          </div2>

          <div3 className="profilenavbtn">

            <strong>videos</strong>

          </div3>

          <div4 className="profilenavbtn">

            <strong>live</strong>

          </div4>

        </section>

      </section>

    </section>
  )
}

export default Profile
