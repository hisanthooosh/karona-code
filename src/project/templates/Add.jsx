import React from 'react'

import "../static/css/Add.css"

import { useNavigate } from 'react-router-dom'

const Add = () => {

    const nagivate = useNavigate();

    return (

        <div>

            <section className="addmain">

                <section className="backbtnadd">

                    <i onClick={()=>nagivate('/Home')} className='fa-solid fa-arrow-left'></i>

                </section>

                <section className="addtitle">

                    <strong>let people know about your <strong className='addtitlespl'>business</strong></strong>

                </section>

                <section className='addformsec'>


                    <strong>Lorem ipsum dolor sit amet. <strong className='addtitlespl'>business</strong></strong>

                    <form action="" >

                        <input type="text" placeholder='Owner Name' className='addforminput' />

                        <input type="text" placeholder='Business Name' className='addforminput' />

                        <input type="number" placeholder='Phone Number' className='addforminput' />

                        <input type="text" placeholder='Adress' className='addforminput' />

                        <textarea name="" id="" cols="30" rows="3" placeholder='Discribe about your business' className='addforminput'></textarea>

                        <input type="text" placeholder='uplode pics ' className='addforminput' />

                        <input type="text" placeholder='Select location to display add' className='addforminput' />

                        <div className="addformgenderdiv1">

                            <p>select Gender to display add</p>

                        </div>

                        <div className="addformgenderdiv111">

                            <label for="gender"> </label>

                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="male" />Male
                            </div>
                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="female" />Female

                            </div>

                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="female" />Both

                            </div>


                        </div>

                        <div className="addformgenderdiv1">

                            <p>select age rang to display add</p>

                        </div>

                        <div className="addformgenderdiv111">

                            <label for="gender"> </label>

                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="male" />kids (5 to 16)

                            </div>
                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="female" />Teen (16 to 22)

                            </div>

                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="female" />Youth (22 to 35)

                            </div>

                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="female" />Youth (35 above)

                            </div>


                        </div>


                        <div className="addformgenderdiv1">

                            <p>select device to display add</p>

                        </div>

                        <div className="addformgenderdiv111">

                            <label for="gender"> </label>

                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="male" />Mobile

                            </div>
                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="female" />Tab

                            </div>

                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="female" />Laptop / Dusktop

                            </div>

                            <div className="checkbox">

                                <input type="radio" id="gender" name="gender" value="female" />Tv

                            </div>


                        </div>



                        <button className='nextbtnadd'><strong>Next</strong></button>



                    </form>

                </section>

            </section>

        </div>

    )

}

export default Add
