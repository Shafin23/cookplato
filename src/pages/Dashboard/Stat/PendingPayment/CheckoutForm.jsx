import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = ({ id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error.message);
      setLoading(false);
      return;
    }

    const response = await fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment_method_types: ['card'],
        currency: 'usd',
        amount: 1099,
      }),
    });

    const data = await response.json();
    const { clientSecret } = data;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (result.error) {
      setPaymentError(result.error.message);
    } else {
      toast.success('Payment successful!');
      setLoading(false);
       // Call confirmPayment function after successful payment
       confirmPayment(id);
    }
  };


  const confirmPayment = async (id) => {

    try {
        const response = await fetch(`http://localhost:3000/book/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ bookingStatus: "confirm" })
        });
        const data = await response.json();
        console.log(data);

        
    } catch (error) {
        console.error('Error confirming payment:', error);
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {paymentError && <div>{paymentError}</div>}
      <button
        onClick={() => confirmPayment(id)}
        type="submit"
        disabled={!stripe || loading}
        className='px-8 btn btn-sm hover:bg-blue-700 transition-all bg-blue-500 mt-3 text-white'>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default CheckoutForm;
