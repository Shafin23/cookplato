import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const GetPaid = ({option}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setError(error.message);
    } else {
      console.log('Payment successful!', paymentMethod);
      // Send paymentMethod.id to your server for further processing
      await sendPaymentMethod(paymentMethod.id);
    }
  };

  const sendPaymentMethod = async (paymentMethodId) => {
    try {
      const response = await fetch('https://cookplato-server.vercel.app/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentMethodId }),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      console.log('Payment completed successfully!');
      // Optionally handle successful payment completion on the frontend
    } catch (error) {
      console.error('Error:', error);
      setError('Payment failed');
    }
  };

  return (
    <div className={option!=="get_paid"&&"hidden"}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe} className=' btn '>
          Pay with Card
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default GetPaid;
