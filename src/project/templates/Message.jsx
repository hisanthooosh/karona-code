import React from 'react'

import '../static/css/Message.css'

import logo from '../Images/mylogo.svg.png'

const Message = () => {
  return (

    <section className="chatmain">

      <section className='c-s-1'>

        <div className='c-s-1-1'>

          <div className='c-s-1-1-inner'>

            <img src={logo} alt="" className='c-s-1-1-inner-pic' />

          </div>

        </div>

        <div className='c-s-1-2'>

          <i className='fa-solid fa-home' style={{ fontSize: "130%" }}  ></i>

        </div>

        <div className='c-s-1-2'>

          <i className='fa-solid fa-fire' style={{ fontSize: "130%" }} ></i>

        </div>

        <div className='c-s-1-2'>

          <i className='fa-solid fa-message' style={{ fontSize: "130%", color: "#1d9cf1cd" }} ></i>

        </div>

        <div className='c-s-1-2'>

          <i className='fa-solid fa-history' style={{ fontSize: "130%" }} ></i>

        </div>

        <div className='c-s-1-2'>

          <i className='fa-solid fa-bookmark' style={{ fontSize: "130%" }} ></i>

        </div>

        <div className='c-s-1-2'>



        </div>

        <div className='c-s-1-2'>

          <i className='fa-solid fa-bars' style={{ fontSize: "130%" }} ></i>

        </div>

        <div className='c-s-1-2'>

          <i className='fa-solid fa-arrow-right-from-bracket' style={{ fontSize: "130%" }} ></i>

        </div>

      </section>

      <section className='c-s-2'>

        <section className='c-s-2-1'>

          <p>@username</p>

        </section>

        <section className='c-s-2-2'>

          <section className='c-s-2-2-inner'>

            <input type="text" className='c-s-2-2-inner-bar' placeholder='Search' />

          </section>

        </section>

        <section className="c-s-2-3">

          <div className="c-s-2-3-1">

            <p>Chat</p>

          </div>

          <div className="c-s-2-3-1">

            <p>Group</p>

          </div>

          <div className="c-s-2-3-1">

            <p>Request</p>

          </div>

        </section>

      </section>

      <section className='c-s-3'>



      </section>

    </section>

  )
}

export default Message
