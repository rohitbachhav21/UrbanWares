import React from 'react'
import phone from "../images/phone.png"
import chat from "../images/chat.png"
import email from "../images/email.png"
import store from "../images/store.png"
const Contact = () => {

  return (
    <div id='contactSection'>
      <div className='m-10  text-4xl text-left font-bold'>CONTACT US</div>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-2' >

        <div className='flex m-4  md:flex-col md:items-center md:justify-center font-semibold'>
          <img src={phone} className='sm:' alt="phone" width={100} height={100}></img>
          <div className='m-2 md:text-center'>
            <p>000 911 208 0902</p>
            <p>Products & Orders: 03:30-21:30, 7 days a week</p>
            <p>Company Info & Enqiries: 07:30 - 16:30, Monday - Friday</p>
          </div>
        </div>

        <div className='flex m-4  md:flex-col md:items-center md:justify-center font-semibold'>
          <img src={chat} className="" alt="phone" width={100} height={100}></img>
          <div className='m-2'>
            <p>24 hours a day</p>
            <p>7 days a week</p>
          </div>
        </div>
        <div className='flex m-4  md:flex-col md:items-center md:justify-center font-semibold'>
          <img src={email} className="" alt="phone" width={100} height={100}></img>
          <div className='m-2'>
            <p>We'll reply within</p>
            <p>five business days</p>
          </div>
        </div>

        <div className='flex m-4  md:flex-col md:items-center md:justify-center font-semibold'>

          <img src={store} alt="phone" width={100} height={100}></img>


          <div className='m-2 md:text-center md:justify-center '>
            <p>STORE LOCATOR</p>
            <p>Find UrbanWares retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
