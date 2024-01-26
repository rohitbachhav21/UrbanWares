import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CoPresentSharp } from '@mui/icons-material';
// import Fade from '@mui/material/Fade';

const PaymentForm = ({ isPaymentConfirmed, handlePayment, totalAmount }) => {
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [cardData, setCartData] = useState({
        name: "",
        number: "",
        date: "",
        cvv: ""
    })

    const [upiId, setUpiId] = useState({
        upi: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setCartData({
            ...cardData,
            [name]: value,
        });
        setUpiId({
            ...upiId,
            [name]: value
        })
    };

    const handleSubmit = () => {

        const isCardValid = validateCardDetails()

        if (isCardValid) {
            setFormSubmitted({ ...cardData })
            setCartData({
                name: "",
                number: "",
                date: "",
                cvv: "",
                ...cardData
            })

            toast.success('Card details added successfully!', {
                position: 'top-center',
                autoClose: 3000,
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

    const validateCardDetails = () => {
        const requiredFields = ['name', 'number', 'date', 'cvv'];

        // Check if all required fields have values
        const isCardValid = requiredFields.every(field => cardData[field].trim() !== '');

        return isCardValid;
    };

    const handlePay = () => {

        toast.success(`Paymanet of ₹${totalAmount} is successful!`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            }
        });
    }

    const validateUpi = () => {
        const requiredFields = ["upi"]
        const isUpiValid = requiredFields.every(field => upiId[field].trim() !== '')
        return isUpiValid;
    }

    const handleProceed = () => {
        const isUpiValid = validateUpi();

        if (isUpiValid) {
            setUpiId({
                upiId: ""
            })
            toast.success('Payment request has been sent to your upi id!', {
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
            toast.error('Please enter valid upi', {
                position: 'top-center',
                autoClose: 4000,
                hideProgressBar: false,
                style: {
                    borderRadius: '10px',
                    background: '#ff3333',
                    color: '#fff',
                }
            });
        }
    }


    const handleCashOnDelivery = () => {
        toast.success('Your order has been placed!', {
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



    return (
        <div className="w-4/5 md:w-1/2 flex justify-center items-center p-4 border shadow-md m-auto mb-4">
            <ToastContainer />
            <div className='w-full  '>
                <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>




                <div ><Accordion className='w-full'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"

                    >
                        <Typography>Credit/Debit cart details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div>
                                <div>
                                    <input type="text" onChange={handleInputChange} value={cardData.name} name='name' placeholder="Card holder's name" className='w-full outline-none p-3 border mt-1 mb-1 border-gray-300 ' required />
                                </div>
                                <div>
                                    <input type="text" onChange={handleInputChange} value={cardData.number} name="number" placeholder='Card number' className='w-full outline-none p-3 border mt-1 mb-1 border-gray-300 ' required />
                                </div>
                                <div className='flex'>
                                    <input type="date" onChange={handleInputChange} value={cardData.date} name='date' placeholder='Exoiry date' className='w-full outline-none p-3 border mt-1 mb-1 border-gray-300 ' />
                                    <input type="text" onChange={handleInputChange} value={cardData.cvv} placeholder='CVV' name="cvv" className='w-full outline-none p-3 border mt-1 mb-1 border-gray-300 ' />
                                </div>
                                <div onClick={handleSubmit} className='bg-yellow-400 p-4 text-center rounded-md cursor-pointer'>Proceed</div>
                            </div>
                            {isFormSubmitted && (
                                <div className="mt-4">
                                    <h2>Card Details:</h2>
                                    <p>Name: {cardData.name}</p>
                                    <p>Card Number: {cardData.number}</p>
                                    <p>Expiry Date: {cardData.date}</p>
                                    <p>CVV: {cardData.cvv}</p>
                                    <p>Total Amount : {totalAmount}</p>
                                    <div onClick={handlePay} className='bg-yellow-400 p-4 text-center rounded-md cursor-pointer mt-1 mb-1'>
                                        Pay
                                    </div>
                                </div>
                            )}
                        </Typography>
                    </AccordionDetails>
                </Accordion></div>

                <div className='mt-2' ><Accordion className='w-full'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"

                    >
                        <Typography>UPI</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div>
                                <div>
                                    <input type="text" name="upi" value={upiId.name} onChange={handleInputChange} placeholder='Enter upi id...' className='w-full outline-none p-3 border mt-1 mb-1 border-gray-300 ' required
                                    />
                                </div>
                                <div onClick={handleProceed} className="bg-yellow-400 p-4 text-center rounded-md cursor-pointer">Proceed</div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion></div>

                <div className='mt-2' ><Accordion className='w-full'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"

                    >
                        <Typography>Cash on delivery</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div>
                                <div onClick={handleCashOnDelivery} className="bg-yellow-400 p-4 text-center rounded-md cursor-pointer">Proceed</div>

                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion></div>





            </div>
        </div>
    );
};

export default PaymentForm;
