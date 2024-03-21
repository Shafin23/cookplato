import React from 'react';

const HowDoesItWorkCard = ({img, title, article}) => {
    return (
        <div className=' flex flex-col justify-start items-center hover:bg-amber-50 transition-all duration-300 px-6 py-8'>
            <img src={img} className=' mb-4 w-20' alt="" />
            <h1 className=' text-xl font-bold mb-4 text-center'>{title}</h1>
            <article className=' text-gray-400 text-sm text-center'>
                {article}
            </article>
        </div>
    );
};

export default HowDoesItWorkCard;