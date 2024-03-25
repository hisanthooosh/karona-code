import React from 'react'

import { useState } from 'react'

import Add from './Add';

import '../static/css/More.css'

import { useNavigate } from 'react-router-dom'

const More = (props) => {

  const [popupMore, setPopupMore] = useState(false);

  const nagivate = useNavigate();

  return (props.trigger) ? (

    <div  onClick={() => props.setTrigger(false)} className='popupmore'>

      

      <div className="popupmore-inner">

        <button className="morebtn">Switch accounts</button>

        <button className="morebtn">Report a problem</button>

        <button onClick={()=>nagivate('/Add')} className="morebtn">Your Adds</button>

        <div className="morecanclebtn">

          <button onClick={() => props.setTrigger(false)} className="morecanclebtn1">Cancle</button><br />

        </div>

        {props.children}

      </div>

    </div>

  ) : "";

}

export default More
