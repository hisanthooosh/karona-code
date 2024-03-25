import React from 'react'

import '../static/css/Settings.css'

import { useNavigate } from 'react-router-dom'

const Settings = () => {

    const navigate = useNavigate();

    const gotoprofile = () => {

        navigate('/Profile');

    }

    return (

        <section className='settingsbody'>

            <section className='settingsbodyinner'>

                <section className='set-s-1'>

                    <div className="set-s-1-1">

                        <i onClick={gotoprofile} className='fa-solid fa-arrow-left' ></i>

                    </div>

                    <div className="set-s-1-2">

                        <p className='set-s-1-2-text'>Settings and activity</p>

                    </div>

                </section>

                <section className='set-s-2'>

                    <input type="text" className='set-s-2-inner' placeholder='Search' />

                </section>

                <section className="set-s-3">

                    <p className="set-s-3-text">

                        Your account

                    </p>

                </section>

                <section className='set-s-4'>

                    <div className="set-s-4-1">

                        <i className='fa-solid fa-user' ></i>

                    </div>

                    <div className="set-s-4-2">

                        <div className="set-s-4-2-1">

                            <p className='set-s-4-2-1-text'>Account Center</p>

                        </div>

                        <div className="set-s-4-2-2">

                            <p className='set-s-4-2-1-text2'>Password,security,personal details,ads</p>

                        </div>

                    </div>

                    <div className="set-s-4-3">

                        <i className='fa-solid fa-arrow-right' ></i>

                    </div>

                </section>

                <section className='set-s-5'>

                    <section className='set-s-5-1'>

                        <p>How you use our App</p>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-regular fa-bookmark' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Saved</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-box-archive' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Archive</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-regular fa-clock' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Your activity</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-bell' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Notifications</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-regular fa-clock' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Time spend</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>





                </section>

                <section className='set-s-6'>

                    <section className='set-s-5-1'>

                        <p>Who can see your content</p>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-lock' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Account privacy</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-user' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Close Friends</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-shield-halved' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Blocked</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-eye-slash' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Hide story and live</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                </section>

                <section className='set-s-7'>

                    <section className='set-s-5-1'>

                        <p>How others can intract with you</p>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-regular fa-message' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Message and story replies</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-tag' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Tags and mentions</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-regular fa-comment' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Comments</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-share' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Sharing and remixes</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-ban' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Restricted</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                </section>


                <section className='set-s-8'>

                    <section className='set-s-5-1'>

                        <p>Your app and media</p>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-download' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Archiving and downloding</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-universal-access' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Accessibility</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-language' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Language</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    
                </section>

                
                <section className='set-s-9'>

                    <section className='set-s-5-1'>

                        <p>More info and support</p>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-regular fa-life-ring' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Help</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-regular fa-user' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Account Status</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            <i className='fa-solid fa-circle-info' ></i>

                        </div>

                        <div className="set-s-5-2-2">

                            <p>About</p>

                        </div>

                        <div className="set-s-5-2-3">

                            <i className='fa-solid fa-arrow-right' ></i>

                        </div>

                    </section>

                    
                </section>

                
                <section className='set-s-10'>

                    <section className='set-s-5-1'>

                        <p>Login</p>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">

                            

                        </div>

                        <div className="set-s-5-2-2">

                            <p>Add account</p>

                        </div>

                        <div className="set-s-5-2-3">

                           

                        </div>

                    </section>

                    <section className='set-s-5-2'>

                        <div className="set-s-5-2-1">


                        </div>

                        <div className="set-s-5-2-2">

                            <p style={{color:"red"}}>Log out</p>

                        </div>

                        <div className="set-s-5-2-3">

                            

                        </div>

                    </section>

                    

                    
                </section>

                



            </section>

        </section>

    )
}

export default Settings
