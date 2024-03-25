import React from 'react'

const Addtype = () => {
  return (
    <div>
       <section className="addmain">

<section className="backbtnadd">

    <i className='fa-solid fa-arrow-left'></i>

</section>

<section className="addtitle">

    <strong>Lorem ipsum dolor sit amet consectetur. <strong className='addtitlespl'>business</strong></strong>

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

         <button className='nextbtnadd'><strong>Next</strong></button>


    </form>

</section>

</section>
    </div>
  )
}

export default Addtype
