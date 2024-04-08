import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = ({ id, request }) => {
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

    console.log(request.total_amount)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error.message);
      setLoading(false);
      return;
    }

    const response = await fetch('https://cookplato-server.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment_method_types: ['card'],
        currency: 'usd',
        amount: request?.total_amount*100,
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
      // Send a DELETE request to delete the item from the pending list
      await fetch(`https://cookplato-server.vercel.app/pendingBooking/${id}`, {
        method: 'DELETE'
      });

      // Assuming request contains all necessary data to add the item to the confirm list
      // Send a POST request to add the item to the confirm list
      const response = await fetch('https://cookplato-server.vercel.app/confirmBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
      });

      if (response.ok) {
        // If the request is successful, you can delete the item locally
        // Assuming there's a prop onDelete that you can use to inform the parent component to delete the item from the pending list
        onDelete(id);
      } else {
        // Handle error if necessary
        console.error('Failed to confirm payment and move item to confirm list');
      }
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
