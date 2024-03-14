import React from 'react';

const HowDoesItWorkCard = ({img, title, article}) => {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <img src={img} className=' mb-4 w-20' alt="" />
            <h1 className=' text-xl font-bold mb-4 text-center'>{title}</h1>
            <article className=' text-gray-400 text-sm text-center'>
                {article}
            </article>
        </div>
    );
};

export default HowDoesItWorkCard;