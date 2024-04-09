import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PendingPayment = ({ option }) => {
    const [pending, setPending] = useState([]);
    const [clientSecret, setClientSecret] = useState('');
    const [stripe, setStripe] = useState(null);
    const [selectedReq, setSelectedReq] = useState(null); // State to hold selected request

    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:5000/pendingBooking")
                .then(response => response.json())
                .then(data => setPending(data))
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchData(); // Fetch data initially

        const fetchClientSecret = async () => {
            try {
                const response = await fetch("http://localhost:5000/stripe/client_secret");
                const data = await response.json();
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Error fetching client secret:', error);
            }
        };

        fetchClientSecret();

        const loadStripeAndElements = async () => {
            const stripeInstance = await loadStripe('pk_test_51OY48pCg3UF6njdMXYwA7KnDAXPU64Spvu2xdQmgH0ggjM57bwH5T8X6iyY3G3w299SUGQa6wWdFlZpaqprQGVlq00iDqMKDhL');
            setStripe(stripeInstance);
        };

        loadStripeAndElements();

        const interval = setInterval(fetchData, 2000);
        return () => clearInterval(interval);
    }, []);

    // Handle successful payment and show success notification
    const handlePaymentSuccess = () => {
        toast.success("Payment Successful!");
    };

    // Function to handle deletion
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/pendingBooking/${id}`, {
                method: 'DELETE'
            });

        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    // Function to handle opening modal and setting selected request
    const handleOpenModal = (request) => {
        setSelectedReq(request);
        document.getElementById('my_modal_2').showModal();
    };

    return (
        <div className={option !== "pending_payment" && "hidden"}>
            <h1>Pending Payment</h1>
            {pending?.map(request => (
                <div key={request?._id}>
                    <div className='flex justify-between items-center border-dashed border-b py-4 px-3 rounded-xl hover:bg-amber-50 transition duration-200'>
                        {/* Details show */}
                        <div className='flex justify-between items-center'>
                            {/* Dish image */}
                            <img src={request?.dishImg} className='rounded-full w-10 h-10 border-2' alt="" />
                            {/* Dish name */}
                            <p className='text-gray-800 font-medium ms-4'>{request?.name}</p>
                            {/* How much number */}
                            <p className='text-gray-800 font-medium ms-4'>{request?.counter}</p>
                        </div>

                        {/* Action - button */}
                        <div>
                            {/* Details button */}
                            <button onClick={() => handleOpenModal(request)} className='btn btn-sm bg-green-400 hover:bg-green-300 transition-all'>Confirm</button>
                            {/* Cancel button */}
                            <button onClick={() => handleDelete(request?._id)} className='btn btn-sm bg-red-400 hover:bg-red-300 ms-3 transition-all'>Cancel</button>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Modal */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    
                            <h3 className="font-bold text-lg">Dish Name: {selectedReq?.name}</h3>
                            <p className="pt-4">Category: {selectedReq?.category}</p>
                            <p>How much: {selectedReq?.counter}</p>
                            <p>Total Price: {selectedReq?.total_amount}$</p>
                            <p>Food related issue?: {selectedReq?.foodIssue}</p>
                            <p>Message: {selectedReq?.message}</p>
                            <p>Event Address: {selectedReq?.eventAddress}</p>
                            <p className='mb-6'>Date: {selectedReq?.selectedDate}</p>
                            <p>Requested by: {selectedReq?.display_name}</p>
                            <p>Email: {selectedReq?.email}</p>
                        
                    <div className=' my-3 border-dashed border-2 px-4 py-3 rounded-lg'>
                        {stripe && selectedReq && (
                            <Elements stripe={stripe}>
                                <CheckoutForm
                                    onSuccess={handlePaymentSuccess}
                                    id={selectedReq?._id}
                                    request={selectedReq}
                                />
                            </Elements>
                        )}
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* If there is a button in form, it will close the modal */}
                            <button className="btn btn-sm">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default PendingPayment;
