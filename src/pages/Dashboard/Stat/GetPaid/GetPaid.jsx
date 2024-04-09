import React, { useState, useEffect, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';

const GetPaid = ({ option }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [totalBalance, setTotalBalance] = useState(0);

  const {userData} = useContext(authContext);

  useEffect(() => {
    const fetchTotalBalance = async () => {
      try {
        const response = await fetch('http://localhost:5000/confirmBooking');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Filter data based on cookEmail
        const filteredData = data.filter(item => item.cookEmail === userData?.email);
        // Calculate total balance from filtered data
        const balance = filteredData.reduce((acc, curr) => acc + curr.price, 0);
        setTotalBalance(balance);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      }
    };

    if (option === 'get_paid') {
      fetchTotalBalance();
    }
  }, [option, userData?.email]);

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
      const response = await fetch('http://localhost:5000/charge', {
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
    <div className={option !== "get_paid" ? "hidden" : ""}>
      <h1 className=' text-4xl font-bold mb-4'>Your Total Balance is ${totalBalance}</h1>
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CardElement className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" disabled={!stripe} className="btn btn-primary">
            Pay with Card
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default GetPaid;
