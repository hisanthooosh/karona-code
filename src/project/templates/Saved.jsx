import React from 'react'

import { useState,useEffect } from 'react';

import mylogo from '../Images/mylogo.svg.png'

import user from '../Images/user.svg'

import axios from 'axios';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'

import More from './More';

const Saved = () => {

  const [show, setShow] = useState(false);

  const [popupMore , setPopupMore] = useState(false);

  const navigate = useNavigate();

  const [username , setuserName] = useState('');

  useEffect(() => {

    const username = localStorage.getItem('username');

    if (username) {

      axios.get(`http://127.0.0.1:9889/home/${username}`)

        .then(response => {

          if (response.status === 200) {

            setuserName(response.data.username);

          } else {

            console.error('Error:', response.data.error);

          }

        })

        .catch(error => {

          console.error('Error:', error);

        });

    } else {

      // Redirect to login if username not found

      navigate('/');

    }

  }, [navigate]);

  return (

    <main className={show ? 'space-toggle' : null}>

      <header className={`header ${show ? 'space-toggle' : null}`}>

        <div className="logodivhead">

          <div className="profilebtn">

          </div>

          <div className='header-toggle' onClick={() => setShow(!show)}>

            <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>

          </div>

          <div className='logodiv-part1head'>

            <img className='logo11' src={mylogo} alt="" />

          </div>

          <div className='logodiv-part2head'>

            <span className='karonaname'><h2>Karona</h2></span>

          </div>

        </div>

        <div className="search">

          <div className='search-1'>

            <div className="surchbardiv">

              <input className='surchbar' type="text" placeholder='search' />

            </div>

            <div className="surchbaricon">

              <i className='fa-solid fa-magnifying-glass'></i>

            </div>


          </div>

          <div className='search-2'>

            <i className='fa-solid fa-bell'></i>

          </div>

        </div>

      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>

        <div className="logodiv">

          <div className='logodiv-part1'>

            <img onClick={() => navigate('/Profile')} className='logo111' src={user} alt="" />

          </div>

          <div className='logodiv-part2'>

            <span className='useridinnav'><h3>{username}</h3></span>

          </div>

        </div>

        <nav className='nav'>

          <div>

            <div className='nav-list'>

              <Link to='/Home' className='nav-link '>

                <i className='fas fa-home-alt nav-link-icon'></i>

                <span className='nav-link-name'>Home</span>

              </Link>

              <Link to='/Trendingfeed' className='nav-link '>

                <i className='fas fa-fire-alt nav-link-icon'></i>

                <span className='nav-link-name'>Trending</span>

              </Link>

              <Link to='/Message' className='nav-link'>

                <i className='fas fa-message nav-link-icon'></i>

                <span className='nav-link-name'>Message</span>

              </Link>

              <Link to='/History' className='nav-link '>

                <i className='fa-solid fa-clock-rotate-left'></i>

                <span className='nav-link-name'>History</span>

              </Link>

              <Link to='/Saved' className='nav-link active'>

                <i className='fa-regular fa-bookmark'></i>

                <span className='nav-link-name'>saved</span>

              </Link>

            </div>

            <div className="followingfeedinhome">


            </div>

            <div className="logoutbtnhome">


              <buttton onClick={() => setPopupMore(true)} className='nav-link'>

                <i className='fas fa-bars nav-link-icon'></i>

                <span className='nav-link-name'>More</span>

              </buttton>

              <More trigger={popupMore} setTrigger={setPopupMore}>

              </More>

              <Link to='/login' className='nav-link'>

                <i className='fas fa-sign-out nav-link-icon'></i>

                <span className='nav-link-name'>Logout</span>

              </Link>

            </div>

          </div>



        </nav>

      </aside>

      <div className='contentfeedtrending'>

        <div className="trendinglogodiv">

          <div className="trendinglogo">



          </div>

          <div className="trendingtitle">

            <p className='trindingtitle-1'>Saved Content </p>

          </div>

        </div>

      </div>

    </main>
  )
}

export default Saved
