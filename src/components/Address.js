import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMyContext, SET_FORM_DATA } from './MyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Address = () => {

    const navigate = useNavigate();
    const { dispatch } = useMyContext();
    const [formData, setFormData] = useState({
        country: "",
        name: "",
        mobile: "",
        home: '',
        area: "",
        landmark: "",
        pin: "",
        coity: "",
        state: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform form validation
        const isFormValid = validateForm();

        if (isFormValid) {
            // If the form is valid, proceed with submission
            dispatch({ type: SET_FORM_DATA, payload: formData });
            setFormData({
                country: "",
                name: "",
                mobile: "",
                home: '',
                area: "",
                landmark: "",
                pin: "",
                city: "",
                state: ""
            });

            toast.success('Address added successfully!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            });

            await new Promise(resolve => setTimeout(resolve, 3000));

            navigate("/CartItems");
        } else {
            // If the form is not valid, show a validation error toast
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
    };

    // Function to validate the form
    const validateForm = () => {
        const requiredFields = ['country', 'name', 'mobile', 'home', 'area', 'landmark', 'pin', 'city', 'state'];

        // Check if all required fields have values
        const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

        return isFormValid;
    };


    return (
        <div>
            <ToastContainer />
            <div className='flex bg-black p-4 items-center justify-between'>
                <Link to={"/"}><ArrowBackIosIcon className='text-white' /></Link>
                <h2 className='text-4xl font-semibold   text-white '>Add new Address</h2>
            </div>
            <div className='w-56 md:w-52 font-semibold p-2'>
                <hr />
                <Link to={"/CartItems"} className='flex justify-between cursor-pointer'>
                    <div><ArrowBackIosIcon /></div>
                    <div >Back to Shpping Cart </div>
                </Link>
                <hr />
            </div>
            <div className='w-3/4 md:w-1/2 m-auto'>
                <div>
                    <input onChange={handleInputChange} type="text" name='country' value={formData.country} placeholder='Country' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div>
                    <input onChange={handleInputChange} type="text" name="name" value={formData.name} placeholder='Full name' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div>
                    <input onChange={handleInputChange} type="tel" name='mobile' value={formData.mobile} placeholder='Mobile number' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div>
                    <input onChange={handleInputChange} type="text" name='home' value={formData.home} placeholder='Flat, House no., Building, Company, Apartment' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div>
                    <input onChange={handleInputChange} type="text" name='area' value={formData.area} placeholder='Area, Street, Sector, Village' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div>
                    <input onChange={handleInputChange} type="text" name='landmark' value={formData.landmark} placeholder='Landmark E.g.near amnora mall' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div>
                    <input onChange={handleInputChange} type="text" name='pin' value={formData.pin} placeholder='6-digit Pincode' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div>
                    <input onChange={handleInputChange} type="text" name='city' value={formData.city} placeholder='Town/City' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div>
                    <input onChange={handleInputChange} type="text" name='state' value={formData.state} placeholder='State' required className='w-full p-4 outline-none border border-spacing-3 border-gray-300 mt-1 mb-1' />
                </div>
                <div onClick={handleSubmit} className='bg-black text-white p-2 rounded-md text-center cursor-pointer'>Add address</div>
            </div>
        </div>
    )
}



export default Address
