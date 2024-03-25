import React from 'react'

import "../static/css/Reel.css"

import logo from '../Images/mylogo.svg.png'

const Reel = () => {

    return (

        <section className='rbody'>

            <section className='v-head'>

                <div className='v-h-1'>

                    <i className='fa-solid fa-arrow-left'></i>

                </div>

                <div className='v-h-2'>

                    <div className='v-h-2-1'>

                        <img src={logo} alt="" className='v-h-2-1-logo' />

                    </div>

                    <div className='v-h-2-2'>

                        <p>Karona</p>

                    </div>

                </div>

                <div className='v-h-3'>

                    <div className='v-h-3-1'>

                        <div className='v-h-3-1-1'>

                            <input type="text" className='v-h-3-1-1-inner' placeholder='Search..' />

                        </div>

                        <div className='v-h-3-1-2'>

                            <i className='fa-solid fa-search'></i>

                        </div>

                    </div>

                    <div className='v-h-3-2'>

                        <i className='fa-solid fa-microphone'></i>

                    </div>

                </div>

                <div className="v-h-4">

                    <div className='v-h-4-1'>

                        <i className='fa-solid fa-video'></i>

                    </div>

                    <div className='v-h-4-1'>

                        <i className='fa-solid fa-bell'></i>

                    </div>

                    <div className='v-h-4-1'>

                        <i className='fa-solid fa-user'></i>

                    </div>

                </div>

            </section>


            <section className='rmain'>

                <section className='m-inner'>



                </section>

                <section className='m-inner-1'>

                    <div className='m-inner-1-1'>



                    </div>

                    <div className='m-inner-1-2'>

                    <i class="fa-regular fa-heart"></i>

                    </div>

                    <div className='m-inner-1-2'>

                    <i class="fa-regular fa-comment"></i>

                    </div>

                    <div className='m-inner-1-2'>

                    <i class="fa-solid fa-share"></i>

                    </div>

                    <div className='m-inner-1-2'>

                    <i class="fa-regular fa-flag"></i>

                    </div>

                    <div className='m-inner-1-2'>

                    <i class="fa-solid fa-ellipsis-vertical"></i>

                    </div>

                    <div className='m-inner-1-2'>

                       <i class='fa fa-user'></i>

                    </div>

                </section>

            </section>

        </section>

    )

}

export default Reel
