import React from 'react';

const BrowseByCategoryCard = ({img,title}) => {
    
    return (
        <div className=' bg-gray-50 border py-20 flex flex-col justify-evenly items-center me-8 rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl cursor-pointer mt-12 mb-20 h-[300px] '>
            <img src={img} className=' w-24 mb-2' alt="" />
            <h1 className=' text-center w-8/12 font-bold text-xl'>{title}</h1>
        </div>
    );
};

export default BrowseByCategoryCard;