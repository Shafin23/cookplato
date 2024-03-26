import React from 'react';
import PendingCook from './PendingCook/PendingCook';
import ApprovedCook from './ApprovedCook/ApprovedCook';
import PendingBook from './PendingBook/PendingBook';
import ConfirmBook from './ConfirmBook/ConfirmBook';
import RequestBook from './RequestBook/RequestBook';
import PendingPayment from './PendingPayment/PendingPayment';
import ConfirmPayment from './ConfirmPayment/ConfirmPayment';

const Stat = ({ option }) => {
    
    return (
        <div className='w-[70vw] ms-10 p-10 border border-dashed min-h-[30vw] h-auto'>
            <PendingBook option={option}/>
            <ConfirmBook option={option}/>
            <RequestBook option={option}/>
            <PendingCook option={option}/>
            <ApprovedCook option={option}/>
            <PendingPayment option={option}/>
            <ConfirmPayment option={option}/>

        </div>
    );
};

export default Stat;