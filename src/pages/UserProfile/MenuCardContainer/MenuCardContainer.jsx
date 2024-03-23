import React from 'react';
import Card from './Card/Card';

const MenuCardContainer = () => {
    return (
        <div className=' w-full pt-16'>

            <h1 className=' text-4xl font-bold mb-5 text-gray-700'>All Available Menu: </h1>
            {/* =-============================================================----------------- */}

            <div className=' w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default MenuCardContainer;