import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = ({ id, request, onDelete }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(5); // Default rating is 5
  const [ratingInputVisible, setRatingInputVisible] = useState(false); // State to control the visibility of rating input


  console.log(id)
  
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

    const response = await fetch('https://cookplato-server.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment_method_types: ['card'],
        currency: 'usd',
        amount: request?.total_amount * 100,
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
      // Display rating input after successful payment
      setRatingInputVisible(true);
    }
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleRatingSubmit = async () => {
    try {
      const response = await fetch(`https://cookplato-server.vercel.app/getAllUsers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating }),
      });

      if (response.ok) {
        toast.success('Rating updated successfully!');
        // Assuming there's a prop onDelete that you can use to inform the parent component to delete the item from the pending list
        onDelete(id);
      } else {
        console.error('Failed to update rating');
      }
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {paymentError && <div>{paymentError}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className='px-8 btn btn-sm hover:bg-blue-700 transition-all bg-blue-500 mt-3 text-white'>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {/* Display rating input after successful payment */}
      {ratingInputVisible && (
        <div className=' mt-10 px-6 py-4 rounded-md border-dashed bg-amber-100'>
          <label htmlFor="rating" className=' text-3xl font-semibold block'>Give a 5-star rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            className='block my-4'
          />
          <button
            type="button"
            onClick={handleRatingSubmit}
            className='px-8 btn btn-sm hover:bg-amber-700 transition-all bg-amber-500 mt-3 text-white'>
            Submit Rating
          </button>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
