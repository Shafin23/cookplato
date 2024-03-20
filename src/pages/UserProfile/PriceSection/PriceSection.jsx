import React from 'react';

const PriceSection = ({ totalPrice }) => {
    return (
        <div className=' w-8/12 border-gray-700 rounded-md p-4 mt-12'>
            <h1 className=' font-bold text-6xl mb-4'>Total Price : {totalPrice}</h1>
            <button className=' btn bg-green-700 hover:bg-green-800 transition-all text-white px-4'>Confirm Order</button>
        </div>
    );
};

export default PriceSection;