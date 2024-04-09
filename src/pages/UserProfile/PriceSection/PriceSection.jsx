import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'; // Import Axios for making HTTP requests

const PriceSection = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [processingPayment, setProcessingPayment] = useState(false);


    const handlePayment = async (event) => {
        event.preventDefault();
        setProcessingPayment(true);

        if (!stripe || !elements) {
            return;
        }

        try {
            // Create a payment method using the card element
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
            });

            if (error) {
                console.error(error);
                setPaymentError(error.message);
                setProcessingPayment(false);
                return;
            }

            // Send payment data to the server
            const response = await axios.post('https://server-qfkg.vercel.app/create-payment-intent', {
                amount: totalPrice * 100, // Convert to cents
                currency: 'usd', // Change to your desired currency
                payment_method: paymentMethod.id,
            });

            // Confirm the payment on the client-side
            await stripe.confirmCardPayment(response.data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            setPaymentError(null);
            setPaymentSuccess(true);
            setProcessingPayment(false);
        } catch (error) {
            console.error('Error processing payment:', error);
            setPaymentError('An error occurred while processing the payment. Please try again.');
            setProcessingPayment(false);
        }
    };


    return (
        <div className='w-full p-4 mt-12 ms-4'>
            <h1 className='font-bold text-3xl mb-4'>Order Summary</h1>
            <p className='text-lg mb-4'>Total Price: ${totalPrice}</p>
            <form onSubmit={handlePayment}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || processingPayment} className='btn bg-green-700 hover:bg-green-800 transition-all text-white px-8 mt-8'>
                    {processingPayment ? 'Processing...' : 'Confirm Order'}
                </button>
            </form>
            {paymentError && <p className="text-red-500">{paymentError}</p>}
            {paymentSuccess && <p className="text-green-500">Payment successful!</p>}
        </div>
    );
};

export default PriceSection;
