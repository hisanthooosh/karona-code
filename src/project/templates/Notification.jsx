import React from 'react'

import '../static/css/Notification.css'

import { useState } from 'react'

const Notification = (props) => {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (props.trigger) ? (

    <div  onClick={() => props.setTrigger(false)} className='popup' >

      <div className="popup-inner">


        <div  className="closebtndiv1">


          <strong className='notificationstitle'>Notifications</strong>

          <button onClick={() => props.setTrigger(false)} className='popupclosebtn'>x</button>

          {props.children}

        </div>

        




      </div>



    </div>
  ) : "";
}

export default Notification
