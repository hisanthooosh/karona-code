import React from 'react'

import { useState , useEffect } from 'react';

import mylogo from '../Images/mylogo.svg.png'

import user from '../Images/user.svg'

import '../static/css/Home.css'

import Notification from './Notification';

import Createpage from './Createpage';

import More from './More';

import axios from 'axios';


import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [buttonPopup, setButtonPopup] = useState(false);

  const [createPopup, setCreatePopup] = useState(false);

  const [popupMore, setPopupMore] = useState(false);

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  
  

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

            <i onClick={() => setButtonPopup(true)} className='fa-solid fa-bell'></i>

          </div>
          <Notification trigger={buttonPopup} setTrigger={setButtonPopup} >


          </Notification>


          <div className='createbtn'>

            <i onClick={() => setCreatePopup(true)} className='fa-solid fa-square-plus'></i>

          </div>

          <Createpage trigger={createPopup} setTrigger={setCreatePopup} >


          </Createpage>

        </div>

      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>

        <div className="logodiv">

          <div className='logodiv-part1'>

            <img onClick={() => navigate('/Profile')} className='logo111' src={user} alt="" />

          </div>

          <div className='logodiv-part2'>

            <span className='useridinnav'><h3>{ username }</h3></span>

          </div>

        </div>

        <nav className='nav'>

          <div>

            <div className='nav-list'>

              <Link to='/Home' className='nav-link active'>

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

              <Link to='/History' className='nav-link'>

                <i className='fa-solid fa-clock-rotate-left'></i>

                <span className='nav-link-name'>History</span>

              </Link>

              <Link to='/Saved' className='nav-link'>

                <i className='fa-regular fa-bookmark'></i>

                <span className='nav-link-name'>saved</span>

              </Link>

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

          </div>



        </nav>

      </aside>

      <div className='contentfeed'>

        <div className="storydiv">



        </div>

        <div className="explorediv">

          <div className="followingfeed">

            <h6>Following</h6>

          </div>

          <div className="explorefeed">

            <h6>Explore</h6>

          </div>

        </div>

      </div>

    </main>

  )

}

export default Home
