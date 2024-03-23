import React from 'react';
import PendingCook from './PendingCook/PendingCook';
import ApprovedCook from './ApprovedCook/ApprovedCook';

const Stat = ({ option }) => {
    return (
        <div className=' w-[70vw] ms-10 p-10 border border-dashed min-h-[30vw] h-auto'>
            {
                option==="pending"?<PendingCook />:<ApprovedCook/>
            }
            
        </div>
    );
};

export default Stat;