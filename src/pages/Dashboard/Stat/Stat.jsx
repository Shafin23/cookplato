import React from 'react';
import PendingCook from './PendingCook/PendingCook';
import ApprovedCook from './ApprovedCook/ApprovedCook';
import PendingBook from './PendingBook/PendingBook';
import ConfirmBook from './ConfirmBook/ConfirmBook';
import RequestBook from './RequestBook/RequestBook';
import PendingPayment from './PendingPayment/PendingPayment';
import ConfirmPayment from './ConfirmPayment/ConfirmPayment';
import GetPaid from './GetPaid/GetPaid';


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OY48pCg3UF6njdMXYwA7KnDAXPU64Spvu2xdQmgH0ggjM57bwH5T8X6iyY3G3w299SUGQa6wWdFlZpaqprQGVlq00iDqMKDhL');

const Stat = ({ option }) => {

    return (
        <div className='w-[70vw] ms-10 p-10 border border-dashed min-h-[30vw] h-auto'>
            <PendingBook option={option} />
            <ConfirmBook option={option} />
            <RequestBook option={option} />
            <PendingCook option={option} />
            <ApprovedCook option={option} />
            <PendingPayment option={option} />
            <ConfirmPayment option={option} />

            <Elements stripe={stripePromise}>
                <GetPaid option={option} />
            </Elements>

        </div>
    );
};

export default Stat;