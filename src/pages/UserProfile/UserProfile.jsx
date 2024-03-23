import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe function
import UpperSection from './UpperSection/UpperSection';
import MenuCardContainer from './MenuCardContainer/MenuCardContainer';

const stripePromise = loadStripe("pk_test_51OY48pCg3UF6njdMXYwA7KnDAXPU64Spvu2xdQmgH0ggjM57bwH5T8X6iyY3G3w299SUGQa6wWdFlZpaqprQGVlq00iDqMKDhL");

const UserProfile = () => {

    const { id } = useParams();

    return (
        <div className='w-[95vw] mx-auto my-14'>
            <UpperSection id={id} />
            <MenuCardContainer />
        </div>
    );
};

export default UserProfile;
