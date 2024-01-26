import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedeback = () => {

  const [feedback, setFeedback] = useState({
    name: "",
    message: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    })
  }

  const handleSubmit = () => {

    const isValid = valid();

    if (isValid) {

      setFeedback({
        name: "",
        message: ""
      })

      toast.success('Thank you for your feedback!', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }
      });
    }
    else {
      toast.error('Please fill in all the required fields!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        style: {
          borderRadius: '10px',
          background: '#ff3333',
          color: '#fff',
        }
      });
    }

  }

  const valid = () => {
    const requiredFields = ["name", "message"]
    const isValid = requiredFields.every(field => feedback[field].trim() !== '')
    return isValid;

  }

  return (
    <div id='feedbackSection' className='bg-neutral-300 m-auto p-3'>
      <ToastContainer />
      <h2 className='text-2xl font-semibold text-center'>Give us feedback </h2>
      <form action="" className='w-full md:w-1/2 m-auto p-3 '>


        <div className='p-3 bg-white rounded-sm m-1'>
          <input type="text" placeholder='Name' onChange={handleInputChange} value={feedback.name} name="name" className='w-full outline-none' />
        </div>
        <div className='bg-white p-3 rounded-sm m-1'>
          <textarea type="text" name="message" onChange={handleInputChange} value={feedback.message} placeholder="Message" rows="10" className="w-full outline-none" />
        </div>
        <div onClick={handleSubmit} className='bg-black text-white p-3  text-center rounded-sm m-1 cursor-pointer'>
          Submit
        </div>
      </form>
    </div>
  )
}

export default Feedeback
