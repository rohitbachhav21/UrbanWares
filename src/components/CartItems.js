import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMyContext } from './MyContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ClearIcon from '@mui/icons-material/Clear';
import PaymentForm from '../components/PaymentForm';
const CartItems = ({ cartItems, onRemoveItem }) => {


    const [isPaymentConfirmed, setPaymentConfirmed] = useState(false);


    const { state, dispatch } = useMyContext();
    const { formData } = state;


    const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '')), 0);


    const handlePayment = () => {
        // Simulate the payment process
        // This is where you could integrate with a real payment gateway in a real application
        setPaymentConfirmed(true);

        // Generate and display an invoice
        const invoice = generateInvoice();
        console.log('Invoice:', invoice);

        // Save the purchase information (this is a simulation)
        savePurchaseInformation();
    };

    const generateInvoice = () => {
        // Simulate generating an invoice based on purchased items

        const invoiceTotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '')), 0);
        const invoice = {
            items: cartItems,
            totalAmount: invoiceTotal,
            // Add more details as needed
        };
        return invoice;
    };

    const savePurchaseInformation = () => {
        // Simulate saving purchase information
        // This is where you could make an API call or store data in a database
        console.log('Purchase information saved.');
    };





    return (

        <div className='w-full'>
            <div className='flex bg-black p-4 items-center justify-between'>
                <Link to={"/"}><ArrowBackIosIcon className='text-white' /></Link>
                <h2 className='text-4xl font-semibold   text-white '>Shopping cart</h2>
            </div>
            <div className='w-1/2 md:w-48 font-semibold p-2'>
                <hr />
                <Link to={"/address"} className='flex justify-between cursor-pointer'>
                    <div >Add new address </div>
                    <div><ArrowForwardIosIcon /></div>
                </Link>
                <hr />
            </div>

            <div className='font-semibold border shadow-md bg-white w-64 md:grid md:grid-4 m-3 p-4'>
                {Object.values(formData).every(value => !value) ? (
                    <h2>Address details are not added yet..</h2>
                ) : (
                    <div>
                        <h2 className='font-semibold text-2xl'> {formData.name}</h2>
                        <p> {formData.country}</p>
                        <p> {formData.state}</p>
                        <p> {formData.city}</p>
                        <p>{formData.home}</p>
                        <p> {formData.area}</p>
                        <p> {formData.landmark}</p>
                        <p>{formData.pin}</p>
                        <p> {formData.mobile}</p>
                    </div>
                )}
            </div>

            <hr />

            <div className='md:grid md:grid-cols-3 m-3'>
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500">
                        Your cart is empty.
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <div >
                            <div className='border shadow-md bg-white p-2 cursor-pointer'>
                                <div className='flex justify-end '  >
                                    <ClearIcon onClick={() => onRemoveItem(item.id)} />
                                </div>
                                <div key={item.id} className="flex flex-col m-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.image} alt=""></img>

                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating:{item.rating}</p>
                                        <h5 className="mb-3 font-normal text-white text-2xl">{item.price}</h5>
                                    </div>
                                </div>
                            </div>



                        </div>




                    )))}
            </div>
            <div>
                {cartItems.length > 0 && (
                    <div>
                        <div><hr /></div>
                        <div className='text-2xl font-semibold text-center bg-yellow-400 w-1/2 m-auto rounded-md p-2 mt-3 mb-4'>Total Amount: {totalAmount} ₹</div>
                        <div >
                            <PaymentForm isPaymentConfirmed={isPaymentConfirmed} handlePayment={handlePayment} totalAmount={totalAmount} />
                        </div>
                    </div>
                )}
            </div>




        </div>

    )
}

export default CartItems
// <li key={item.id}>{item.name}</li>

