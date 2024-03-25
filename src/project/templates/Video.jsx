import React from 'react'

import '../static/css/Video.css'

import logo from '../Images/mylogo.svg.png'

import dp from '../Images/user.svg'

const Video = () => {



    return (

        <section className='v-body'>

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

            <section className="v-m-s">

                <section className='v-m-s-1'>

                    <section className='v-m-s-1-inner'>

                        <div className='v-m-s-1-1'>



                        </div>

                        <div className="v-m-s-1-2">

                            <p>video title Lorem ipsum dolor sit, amet consectetur. Laudantium, libero?</p>

                        </div>

                        <div className='v-m-s-1-3'>

                            <div className='v-m-s-1-3-1'>

                                <i className='fa-solid fa-user'></i>

                            </div>

                            <div className='v-m-s-1-3-2'>

                                <div className='v-m-s-1-3-2-1'>

                                    <p>username</p>

                                </div>

                                <div className='v-m-s-1-3-2-2'>

                                    <p>100k followers</p>

                                </div>


                            </div>

                            <div className='v-m-s-1-3-3'>

                                <button className='v-m-s-1-3-3-b'>Follow</button>

                            </div>

                            <div className='v-m-s-1-3-4'>

                                <div className='v-m-s-1-3-4-1'>

                                    <i className='fa-regular fa-heart'></i>

                                    <p>  12k</p>

                                </div>

                                <div className='v-m-s-1-3-4-1'>

                                    <i className='fa-solid fa-share'></i>

                                    <p>  2k</p>

                                </div>

                                <div className='v-m-s-1-3-4-1'>

                                    <i className='fa-solid fa-arrow-down'></i>


                                </div>

                                <div className='v-m-s-1-3-4-1'>

                                    <i className='fa-solid fa-bookmark'></i>

                                </div>

                                <div className='v-m-s-1-3-4-1'>

                                    <i class="fa-regular fa-flag"></i>

                                </div>

                            </div>

                        </div>


                        <div className='v-m-s-1-4'>

                            <div className='v-m-s-1-4-1'>

                                <p>100k views &nbsp; &nbsp;  </p> <p>5 days ago</p>

                            </div>

                            <div className='v-m-s-1-4-2'>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero, temporibus molestias fugiat expedita aliquam praesentium? Sapiente dolores rem quasi expedita voluptates reiciendis quisquam nulla rerum aliquam, cupiditate labore ad ratione sint commodi, vitae ipsam esse eius atque inventore unde cumque eaque. Saepe a totam aliquid quae, officiis nulla atque quaerat obcaecati ullam non mollitia pariatur cum dolor deleniti, voluptatum suscipit! Facere eveniet voluptate quia minima. Exercitationem molestias error, hic quisquam unde assumenda maxime! Iure aliquam quaerat tempore nisi, commodi veritatis quia eos mollitia suscipit fugiat praesentium quasi dolores, ad at. Labore error, velit porro ullam, optio doloribus iure iusto quod ab odit in aut! Eveniet excepturi, aliquam minima velit earum aspernatur laudantium fugiat praesentium quisquam eius optio voluptas, ducimus perspiciatis commodi quam dolores nihil rerum itaque autem, dignissimos quidem? Sint cumque incidunt aliquid alias sit eaque nam hic aut maiores facere omnis quia commodi esse aspernatur, pariatur ducimus illo laudantium quaerat id assumenda autem!

                            </div>


                        </div>

                        <div className='v-m-s-1-5'>

                            <div className='v-m-s-1-5-1'>

                                <div className='v-m-s-1-5-1-1'>

                                    <p>100 &nbsp;Comments</p>

                                </div>

                                <div className='v-m-s-1-5-1-2'>

                                    <p>Sort &nbsp; &nbsp;</p>

                                    <i class="fa fa-bars"></i>

                                </div>

                            </div>

                            <div className='v-m-s-1-5-2'>

                                <div className='v-m-s-1-5-2-1'>

                                    <img src={dp} alt="" className='v-m-s-1-5-2-1-logo' />

                                </div>

                                <div className='v-m-s-1-5-2-2'>


                                    <div className='v-m-s-1-5-2-2-in'>

                                        <div className='v-m-s-1-5-2-2-in-1'>

                                            <input type="text" className=' v-m-s-1-5-2-2-in-1-input' placeholder='comment' />

                                        </div>

                                        <div className='v-m-s-1-5-2-2-in-2'>

                                            <i class="fa-regular fa-face-smile"></i>

                                        </div>

                                        <div className='v-m-s-1-5-2-2-in-3'>

                                            <i class="fa-regular fa-paper-plane"></i>

                                        </div>

                                    </div>


                                </div>

                            </div>

                            <div className='v-m-s-1-5-3'>



                            </div>

                        </div>

                    </section>

                </section>

                <section className='v-m-s-2'>

                    <section className='v-m-s-2-inner'>

                        <div className='v-m-s-2-inner-1'>

                            <div className='v-m-s-2-inner-1-1'>

                                add pic

                            </div>

                            <div className='v-m-s-2-inner-1-2'>

                                <div className='v-m-s-2-inner-1-2-1'>

                                    <img src={dp} alt="" className='v-m-s-2-inner-1-2-1-logo' />

                                </div>

                                <div className='v-m-s-2-inner-1-2-2'>

                                    <div className='v-m-s-2-inner-1-2-2-1'>

                                        <p>sponcer name </p>

                                    </div>

                                    <div className='v-m-s-2-inner-1-2-2-2'>

                                        <p>company.com</p>

                                    </div>

                                </div>

                                <div className='v-m-s-2-inner-1-2-3'>

                                    <button className='v-m-s-2-inner-1-2-3-btn'>learn more</button>

                                </div>

                            </div>

                        </div>

                        <div className='v-m-s-2-inner-2'>

                            <div className='v-m-s-2-inner-2-1'>

                                <p>All</p>

                            </div>

                            <div className='v-m-s-2-inner-2-1'>

                                <p>Related</p>

                            </div>

                            <div className='v-m-s-2-inner-2-1'>

                                <p>from that creater</p>

                            </div>

                            <div className='v-m-s-2-inner-2-1'>

                                <p>New to you</p>

                            </div>

                            <div className='v-m-s-2-inner-2-1'>

                                <p>New topic</p>

                            </div>

                        </div>

                        <div className='v-m-s-2-inner-3'>

                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className='v-m-s-2-inner-3-1'>

                                <div className=' v-m-s-2-inner-3-1-1'>



                                </div>

                                <div className=' v-m-s-2-inner-3-1-2'>

                                    <div className='v-m-s-2-inner-3-1-2-1 '>

                                        <div className='v-m-s-2-inner-3-1-2-1-1'>

                                            <p>videp title Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-1-2'>

                                            <i class="fa-solid fa-ellipsis-vertical"></i>

                                        </div>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-2 '>

                                        <p>creatorname</p>

                                    </div>

                                    <div className='v-m-s-2-inner-3-1-2-3 '>

                                        <div className='v-m-s-2-inner-3-1-2-3-1 '>

                                            <p>2k</p>

                                        </div>

                                        <div className='v-m-s-2-inner-3-1-2-3-2 '>

                                            <p>4 days age</p>

                                        </div>

                                    </div>

                                </div>

                            </div>




                        </div>



                    </section>

                </section>

            </section>

        </section>

    )

}

export default Video
