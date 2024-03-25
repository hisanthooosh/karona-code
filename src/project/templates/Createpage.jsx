import React from 'react'

import { useState } from 'react'

import "../static/css/Createpage.css"

const Createpage = (props) => {

    const [createPopup , setCreatePopup] = useState(false);

  return (props.trigger) ? (

    <div   onClick={() => props.setTrigger(false)} className='popupcreate'>


        <div className="popupcreate-inner">

               <button className="postbtn">Post</button><br />
               <button className="postbtn">Reel</button><br />
               <button className="postbtn">Video</button><br />
               <button className="postbtn">Live</button><br />

               <div className="postcanclebtn">


               <button onClick={() => props.setTrigger(false)} className="postcanclebtn1">Cancle</button><br />

               </div>

               

               {props.children}

        </div>
      
    </div>

  ) : "";

}

export default Createpage
